import { CLEAR_DOG, CURRENT_PAGE, FILTER_CREATED, FILTER_SORT, FILTER_TEMPERAMENT, GET_ALL_DOGS, GET_ALL_TEMPERAMENTS, GET_DOG, SEARCH_DOGS } from "../constant";
import axios from 'axios'

export function getAllDogs(){
    return function(dispatch){
        axios ('http://localhost:3001/dogs',{}).then((json)=>{
            return dispatch({
                type:GET_ALL_DOGS,
                payload: json.data
            })
        });
    }
}

export function getAllTemperaments(){
    return async function(dispatch){
        let json = await axios ('http://localhost:3001/temperament',{});
        return dispatch({
            type:GET_ALL_TEMPERAMENTS,
            payload: json.data
        })
    }
}

export function filterSort(payload){
    return({
        type: FILTER_SORT,
        payload
    })
}

export function filterTemperament(payload){
    return({
        type: FILTER_TEMPERAMENT,
        payload
    })
}

export function filterCreated(payload){
    return({
        type: FILTER_CREATED,
        payload
    })
}

export function getDogSearch(name){
    return async function(dispatch){
        try{
            var json = await axios.get('http://localhost:3001/dogs?name='+name)
            return dispatch({
                type:SEARCH_DOGS,
                payload:json.data
            })
        } catch (error){
            console.log(error)
            return dispatch({
                type:SEARCH_DOGS,
                payload:[{errors:name}]
            })
        }
    }
    
}

export function currentPage(payload){
    return({
        type: CURRENT_PAGE,
        payload
    })
}

export function getDog(id){
    return async function(dispatch){
        let json = await axios(`http://localhost:3001/dogs/${id}`,{});
        return dispatch({
            type: GET_DOG,
            payload: json.data
        })
    }
}

export function clearDog(){
    return({
        type: CLEAR_DOG,
    })
}

export function postDog(payload){
    return async function(dispatch){
        const dog = await axios.post('http://localhost:3001/dog',payload)
        return dog
    }
}