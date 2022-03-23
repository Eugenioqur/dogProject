import React from "react";
import { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
import {Link ,useParams} from 'react-router-dom'

import { clearDog, getDog } from "./redux/actions";

export default function Dog(){
    const dispatch = useDispatch()
    const dog = useSelector((state)=> state.dog)

    const {idRaza} = useParams()

    useEffect(()=>{
        dispatch(getDog(idRaza))
        return ()=> dispatch(clearDog())
    },[])

    return(
        <div>
            <h1>guf guf</h1>
            <h1>{dog.name}</h1>
            <img src={dog.image} alt="No hay imagen bro" />
            <p>{dog.weight}</p>
            <p>{dog.height}</p>
            <p>{dog.life_span}</p>
            <p>{dog.temperament}</p>
            <Link to='/home'>home</Link>
        </div>
    )
}