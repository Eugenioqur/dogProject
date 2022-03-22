import { FILTER_SORT, FILTER_TEMPERAMENT, GET_ALL_DOGS, GET_ALL_TEMPERAMENTS } from "../constant";
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