const { Router } = require('express');
const axios = require('axios');

const{Dog,Temperament} = require('../db.js')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
dogs = axios.get('https://api.thedogapi.com/v1/breeds');


const getApiInfo = async() =>{
    const dogs = await axios.get('https://api.thedogapi.com/v1/breeds');
    const dog = await dogs.data.map(el =>{
        return{
            id:el.id,
            name: el.name,
            weight: el.weight.metric,
            height: el.height.metric,
            life_span: el.life_span,
            image: el.image.url,
            temperament: el.temperament
        }
    })
    return dog;
}

const getDbInfo = async()=>{
    return await Dog.findAll({
        include:{
            model: Temperament,
            attributes:['name'],
            through:{
                Temperaments:[],
            },
        }
    })
}

const allInfo = async()=>{
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const allInfo = apiInfo.concat(dbInfo)
    return allInfo
}


function separate(el){
    let elements = []
    
    for(let j=0; j < el.length; j++){
      let space = 0
      if(el[j]){
          for(let i =0; i < el[j].length; i++){
            if(el[j][i]=== ','){
             elements.push(el[j].slice(space,i))
               space= i+2
            }
            if(i === el[j].length-1){
             elements.push(el[j].slice(space,i+1))
            }
          }
          
      }
    }
    return elements
}

router.get('/dogs',async (req,res)=>{
    const {name} = req.query;
    const dogs = await allInfo();

    if(name){
        let dogsFound = await dogs.filter(el => el.name.toLowerCase().includes(name.toLowerCase()));
        if(dogsFound.length){
            res.status(200).send(dogsFound);
        }else{
            res.status(404).json({msg:'dog not found'});
        }
    }else{
        res.status(200).send(dogs);
    }
});

router.get('/dogs/:idRaza', async(req,res)=>{
    const id = req.params.idRaza;
    const dogs = await allInfo();
    idFound = await dogs.find(el => el.id == id);
    if(idFound){
        res.status(200).send(idFound)
    }else{
        res.status(404).json({msg:'id is not valid'})
    }
})

router.get('/temperament', async(req,res)=>{
    const dogs = await getApiInfo();
    const arrTemp = dogs.map(el => el.temperament)
    const temperaments = separate(arrTemp)
    await temperaments.forEach(el =>{
        if(el){
            Temperament.findOrCreate({
                where: {name: el}
            })
        }
    })
    const allTemp = await Temperament.findAll()
    res.status(200).send(allTemp)
})

router.post('/dog', async(req,res)=>{
    const {name, weight, height, life_span, temperament} = req.body;

    const dog = await Dog.create({
        name,
        weight,
        height,
        life_span,
    })

    let temperaments = await Temperament.findAll({
        where: {name: temperament}
    })

    dog.addTemperament(temperaments)
    res.send(dog)
})


module.exports = router;
