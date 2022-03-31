import React from "react";
import {NavLink} from 'react-router-dom'
import {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'

import { currentPage, getAllDogs } from "./redux/actions";

import NavBar from "./NavBar";
import Paginated from "./Paginated";
import Card from "./Card";

import s from './css/Home.module.css'

export default function Home(){

    const dispatch = useDispatch()
    const allDogs = useSelector((state)=> state.dogs)
    const filters = useSelector((state)=> state.filter)
    const page = useSelector((state)=> state.page)

    const dogsPerPage = 8
    const indexOfLastDog = page * dogsPerPage
    const indexOfFirstDog = indexOfLastDog - dogsPerPage
    const currentDogs = allDogs.slice(indexOfFirstDog,indexOfLastDog)

    useEffect(()=>{
        dispatch(getAllDogs());
    },[dispatch])
    
    const pag = (pageNumber) =>{
        dispatch(currentPage(pageNumber))
   }

    return(
        <div>
            <NavBar/>
            <h3 className={s.filter}>Filter by: {filters}</h3>
            <div className={s.grid}>
                {currentDogs[0] && currentDogs[0].errors !== undefined ? (<h1>No results for: {currentDogs[0].errors}</h1>) : currentDogs.map(el =>{
                    return(
                        <NavLink className={s.card} to={`/dogs/${el.id}`}>
                        <Card 
                        dog={el.name}
                        weight = {el.weight}
                        temperament = {el.temperament}
                        image = {el.image}
                        />
                        </NavLink>
                    )
                })}
            </div>
            <Paginated 
            allDogs={allDogs.length} 
            dogsPerPage={dogsPerPage} 
            pag={pag}
            page={page}
            />
        </div>
    )
}