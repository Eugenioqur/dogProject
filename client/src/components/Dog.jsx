import React from "react";
import { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
import {NavLink ,useParams} from 'react-router-dom'

import { clearDog, getDog } from "./redux/actions";
import s from './css/Dog.module.css'

export default function Dog(){
    const dispatch = useDispatch()
    const dog = useSelector((state)=> state.dog)

    const {idRaza} = useParams()

    useEffect(()=>{
        dispatch(getDog(idRaza))
        return ()=> dispatch(clearDog())
    },[])

    return(
        <div className={s.body}>
            <div className={s.cont}>
                    <h1 className={s.name}>{dog.name}</h1>
                <div className={s.conteiner}>
                    <img className={s.card} src={dog.image} alt="Image not found" />
                    <div className={s.text}>
                        <p>Weight: {dog.weight}</p>
                        <p>Height: {dog.height}</p>
                        <p>Life span: {dog.life_span}</p>
                        <p>temperaments:</p>
                        <p>{dog.temperament}</p>
                        <p></p>
                        <NavLink to='/home'><button className={s.button}>Home</button></NavLink>
                    </div>
                </div>
            </div>

        </div>
    )
}