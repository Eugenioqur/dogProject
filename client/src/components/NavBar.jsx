import React from "react";
import { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
import { Link } from "react-router-dom";

import { filterCreated, filterSort, filterTemperament, getAllTemperaments } from "./redux/actions";
import SearchBar from "./SearchBar";

import s from './css/NavBar.module.css'

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
        <div className={s.conteiner}>
            <Link to='/create'><button className={s.button}>Create new dog</button></Link>
            <SearchBar/>
            <select className={s.select} onChange={ e => handleSort(e)}>
                <option>Weight</option>
                <option value="Ascendant">Ascendant</option>
                <option value="Downward">Downward</option>
            </select>
            <select className={s.select} onChange={ e => handleSort(e)}>
                <option>Alphabetical</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
            </select>
            <select className={s.select} onChange={ e => handleTemperament(e)}>
                <option>Temperament</option>
                {temperaments.map((el)=>
                (<option value={el.name}>{el.name}</option>))}
            </select>
            <select className={s.select} onChange={ e => handleCreate(e)}>
                <option>Created from</option>
                <option value="api">from api</option>
                <option value="db">from data base</option>
            </select>
        </div>
    )
}