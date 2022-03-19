import { FILTER_SORT, GET_ALL_DOGS } from "../constant";
import axios from 'axios'

export function getAllDogs(){
    return async function(dispatch){
        let json = await axios ('http://localhost:3001/dogs',{});
        return dispatch({
            type:GET_ALL_DOGS,
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