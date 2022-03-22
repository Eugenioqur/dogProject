import { FILTER_CREATED, FILTER_SORT, FILTER_TEMPERAMENT, GET_ALL_DOGS, GET_ALL_TEMPERAMENTS, SEARCH_DOGS } from "../constant";
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
        }
    }
    
}