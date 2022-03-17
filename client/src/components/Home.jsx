import React from "react";
import {Link} from 'react-router-dom'
import {useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'

import { getAllDogs } from "./redux/actions";

import NavBar from "./NavBar";
import Paginated from "./Paginated";

export default function Home(){

    const dispatch = useDispatch()
    const allDogs = useSelector((state)=> state.dogs)

    const [page,setPage] = useState(1)
    const dogsPerPage = 8
    const indexOfLastDog = page * dogsPerPage
    const indexOfFirstDog = indexOfLastDog - dogsPerPage
    const currentDogs = allDogs.slice(indexOfFirstDog,indexOfLastDog)

    useEffect(()=>{
        dispatch(getAllDogs());
    },[dispatch])
    
    const pag = (pageNumber) =>{
        setPage(pageNumber)
   }

    return(
        <div>
            <h1>Home</h1>
            <NavBar/>
            <Link to='/create'><button>Create new dog</button></Link>
            <Paginated allDogs={allDogs.length} dogsPerPage = {dogsPerPage} pag = {pag} />
            {currentDogs.map(el =>{
                return(
                    <div>
                        <p>{el.name}</p>
                        <img src={el.image} alt="no imagen" />
                    </div>
                )
            })}

            <Paginated 
            allDogs={allDogs.length} 
            dogsPerPage={dogsPerPage} 
            pag={pag} />
        </div>
    )
}