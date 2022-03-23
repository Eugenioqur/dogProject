import React from "react";
import {Link} from 'react-router-dom'
import {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'

import { currentPage, getAllDogs } from "./redux/actions";

import NavBar from "./NavBar";
import Paginated from "./Paginated";
import Card from "./Card";

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
            <h1>Home</h1>
            <NavBar/>
            <Link to='/create'><button>Create new dog</button></Link>
            <h3>filter by:{filters}</h3>
            {currentDogs.map(el =>{
                return(
                    <Link to={`/dogs/${el.id}`}>
                    <Card 
                    dog={el.name}
                    weight = {el.weight}
                    temperament = {el.temperament}
                    image = {el.image}
                    />
                    </Link>
                )
            })}
            <Paginated 
            allDogs={allDogs.length} 
            dogsPerPage={dogsPerPage} 
            pag={pag} />
        </div>
    )
}