import { FILTER_SORT, FILTER_TEMPERAMENT, GET_ALL_DOGS, GET_ALL_TEMPERAMENTS } from "../constant"

const initialState={
    dogs:[],
    allDogs:[],
    temperaments:[],
    filter:''
}

const rootReducer=(state=initialState,action)=>{
    switch(action.type){
        
        case GET_ALL_DOGS:
            return {
                ...state,
                dogs:  action.payload,
                allDogs: action.payload
            }

        case GET_ALL_TEMPERAMENTS:
            return {
                ...state,
                temperaments:  action.payload,
                }
                
        case FILTER_SORT:
            let sortedArr = action.payload === 'az' ? state.allDogs.sort(function(a,b){
                if (a.name>  b.name){
                    return 1
                }
                if (a.name < b.name){
                    return -1
                }
                return 0
            }): action.payload === 'za' ? state.allDogs.sort(function(a,b){
                if(a.name < b.name){
                    return 1
                }
                if(a.name > b.name){
                    return -1
                }
                return 0
            }) : action.payload === 'asc' ? state.allDogs.sort(function(a,b){
                if(a.weight > b.weight){
                    return 1
                } 
                if(a.weight < b.weight){
                    return -1
                }
                return 0
            }) : action.payload ==='des' ? state.allDogs.sort(function(a,b){
                if (a.weight < b.weight){
                    return 1
                }
                if (a.weight > b.weight){
                    return -1
                }
                return 0
            }) : state.allDogs
            
            return{
                ...state,
                dogs: sortedArr,
                filter: action.payload
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
                    dogs : dogsFiltered
                }
            } else{
                return{
                    ...state,
                    dogs: dogs
                }
            }
            
        default:
            return state
    }
}

export default rootReducer;