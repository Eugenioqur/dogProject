import { FILTER_SORT, GET_ALL_DOGS } from "../constant"

const initialState={
    dogs:[],
    allDogs:[],
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

        default:
            return state
    }
}

export default rootReducer;