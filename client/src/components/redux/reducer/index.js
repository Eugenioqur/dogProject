import { CLEAR_DOG, CURRENT_PAGE, FILTER_CREATED, FILTER_SORT, FILTER_TEMPERAMENT, GET_ALL_DOGS, GET_ALL_TEMPERAMENTS, GET_DOG, SEARCH_DOGS } from "../constant"

const initialState={
    dogs:[],
    allDogs:[],
    dog:[],
    temperaments:[],
    filter:'A-Z',
    page: 1
}

const rootReducer=(state=initialState,action)=>{
    switch(action.type){
        
        case GET_ALL_DOGS:
            return {
                ...state,
                dogs:  action.payload,
                allDogs: action.payload,
                filter:'A-Z'
            }

        case GET_ALL_TEMPERAMENTS:
            return {
                ...state,
                temperaments:  action.payload,
                }
                
        case FILTER_SORT:
            let sortedArr = action.payload === 'A-Z' ? state.dogs.sort(function(a,b){
                if (a.name>  b.name){
                    return 1
                }
                if (a.name < b.name){
                    return -1
                }
                return 0
            }): action.payload === 'Z-A' ? state.dogs.sort(function(a,b){
                if(a.name < b.name){
                    return 1
                }
                if(a.name > b.name){
                    return -1
                }
                return 0
            }) : action.payload === 'Ascendant' ? state.dogs.sort(function(a,b){
                if(a.weight > b.weight){
                    return 1
                } 
                if(a.weight < b.weight){
                    return -1
                }
                return 0
            }) : action.payload ==='Downward' ? state.dogs.sort(function(a,b){
                if (a.weight.slice(-2) < b.weight.slice(-2)){
                    return 1
                }
                if (a.weight.slice(-2) > b.weight.slice(-2)){
                    return -1
                }
                return 0
            }) : state.dogs
            
            return{
                ...state,
                dogs: sortedArr,
                filter: action.payload,
                page: 1
            }

        case FILTER_TEMPERAMENT:
            const dogs = state.allDogs;
            const dogsFiltered = []

            console.log(dogs[0].temperament)
            for(let i=0;i < dogs.length; i++){
                if (dogs[i].temperament){
                    if(dogs[i].temperament.includes(action.payload)){
                        dogsFiltered.push(dogs[i])
                    }
                }
            }
            if(dogsFiltered.length){
                return{
                    ...state,
                    dogs : dogsFiltered,
                    page: 1,
                    filter: action.payload
                }
            } else{
                return{
                    ...state,
                    dogs: dogs,
                    page: 1,
                    filter: action.payload
                }
            }
        
        case FILTER_CREATED:

            switch(action.payload){
                case 'api':
                    const dogsFromApi = state.allDogs.filter((el)=> typeof el.id === 'number')
                    return{
                        ...state,
                        dogs: dogsFromApi,
                        page: 1,
                        filter: 'Created from api'
                    }
                case 'db':
                    const dogsFromDb = state.allDogs.filter((el)=> typeof el.id === 'string')
                    return{
                        ...state,
                        dogs: dogsFromDb,
                        page: 1,
                        filter: 'Created from db'
                    }
                    
                default:
                    return state
            }
        
        case SEARCH_DOGS:
            return{
                ...state,
                dogs: action.payload,
                page: 1
            }
        
        case CURRENT_PAGE:
            return{
                ...state,
                page: action.payload
            }

        case GET_DOG:
            return{
                ...state,
                dog: action.payload
            }

        case CLEAR_DOG:
            return{
                ...state,
                dog:[]
            }

        default:
            return state
    }
}

export default rootReducer;