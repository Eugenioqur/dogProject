import React from "react";
import {NavLink,useNavigate} from 'react-router-dom' 

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllTemperaments, postDog } from "./redux/actions";

import s from './css/Create.module.css'

export default function Create(){
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const allTemperaments = useSelector((state)=> state.temperaments)

    useEffect(()=>{
        dispatch(getAllTemperaments())
    },[dispatch])

    const [input,setInput] = useState({
        name:'',
        weight:'',
        height:'',
        life_span:'',
        temperament:[]
    })

    const [err,setErr] = useState('')
    const [arrTemperaments,setArrTemperaments] = useState('')

    function controller(){
        if(input.name === ''){
            return 'name'
        }else if(input.height === ''){
            return 'height'
        }else if(input.weight === ''){
            return 'wheight'
        }else if(input.life_span === ''){
            return 'life_span'
        }else if(!input.temperament.length){
            return 'temperaments'
        }else{
            return 'ok'
        }
    }

    function handleChange(e){
            setInput({
                ...input,
                [e.target.name]: e.target.value
            })
    }

    function handleSelect(e){
        if (e.target.value !== "" && !arrTemperaments.includes(e.target.value)){
            setArrTemperaments([...arrTemperaments,e.target.value])
            setInput({
                ...input,
                temperament: [...input.temperament,e.target.value]
            })
        }

    }

    function handleSubmit(e){
        e.preventDefault();
        const check = controller()
        if(check === 'name' ){
            let name='Complete the Name'
            setErr(name)
        }else if (check === 'height'){
            let height = 'Complete the height'
            setErr(height)
        }else if(check === 'wheight'){
            let wheight = 'Complete the wheight'
            setErr(wheight)
        }else if(check === 'life_span'){
            let life_span = 'Assign a life span'
            setErr(life_span)
        }else if(check === 'temperaments'){
            let temperaments = 'Assign a temperaments'
            setErr(temperaments)
        }else{
            setErr('')
            dispatch(postDog(input))
            setInput({
                name:'',
                weight:'',
                height:'',
                life_span:'',
                temperament:[]
            })
            alert("Your dog was created!");
            navigate("/home");
        }
    }

    function handleQuit(e){
        let quit = arrTemperaments.filter(el =>  el !== e.target.value)
        setArrTemperaments(quit)
    }

    return(
        <div className={s.body}>
            <div className={s.cont}>
                <form onSubmit={(e)=>handleSubmit(e)}>
                <h1>Create</h1>
                <div className={s.conteiner}>
                    <div className={s.text}>
                        <div className={s.inp}>
                            <label>Name</label>
                            <input type="text" value={input.name} name='name' placeholder='Name...' onChange={(e)=>handleChange(e)}/>
                        </div>
                        <div className={s.inp}>
                            <label>Height</label>
                            <input type="text" value={input.height} name='height' placeholder='Height...' onChange={(e)=>handleChange(e)}/>        
                        </div>
                        <div className={s.inp}>
                            <label>Weight</label>
                            <input type="text" value={input.weight} name='weight' placeholder='weight...' onChange={(e)=>handleChange(e)}/>
                        </div>
                        <div className={s.inp}>
                            <label>Life span</label>
                            <input type="text" value={input.life_span} name='life_span' placeholder='Life span...' onChange={(e)=>handleChange(e)}/>
                        </div>
                        <div>
                            <label>Temperaments</label>
                            <select onChange={(e)=> handleSelect(e) }>
                                <option> </option>
                                {allTemperaments.map((e)=>(
                                <option value={e.name}>{e.name}</option>
                                ))}
                            </select>
                            <p></p>
                        </div>
                        <div className={s.conteiner}>
                            <button className={s.button} type='submit'>Create</button>
                            <NavLink to="/home"><button className={s.button}>Home</button></NavLink>
                        </div>
                        {err && (<div className={s.error}>{err}</div>)}
                    </div>
                    <div>
                        <div className={s.card}>
                            {arrTemperaments && arrTemperaments.map((e)=>(
                               <div>
                                   <p>{e}</p>
                                    <button value={e} onClick={(e)=>handleQuit(e)} type='button'>X</button>
                               </div>
                            ))}
                        </div>
                    </div>
                </div>
                </form>
            </div>
            
        </div>
    )
}