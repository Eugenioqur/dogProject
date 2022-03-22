import React from "react";
import { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'

import { filterCreated, filterSort, filterTemperament, getAllTemperaments } from "./redux/actions";
import SearchBar from "./SearchBar";

export default function NavBar (){
    const dispatch = useDispatch()
    const temperaments = useSelector((state)=>state.temperaments)

    function handleSort(e){
        dispatch(filterSort(e.target.value))
    }

    function handleTemperament(e){
        dispatch(filterTemperament(e.target.value))
    }

    function handleCreate(e){
        dispatch(filterCreated(e.target.value))
    }

    useEffect(()=>{
        dispatch(getAllTemperaments());
    },[dispatch])

    return(
        <div>
            <SearchBar/>
            <h1>Hi, i'm NavBar</h1>
            <select onChange={ e => handleSort(e)}>
                <option>---</option>
                <option value="asc">Ascendant</option>
                <option value="des">Downward</option>
            </select>
            <select onChange={ e => handleSort(e)}>
                <option>---</option>
                <option value="az">A-Z</option>
                <option value="za">Z-A</option>
            </select>
            <select onChange={ e => handleTemperament(e)}>
                <option>---</option>
                {temperaments.map((el)=>
                (<option value={el.name}>{el.name}</option>))}
            </select>
            <select onChange={ e => handleCreate(e)}>
                <option>---</option>
                <option value="api">from api</option>
                <option value="db">from data base</option>
            </select>
        </div>
    )
}