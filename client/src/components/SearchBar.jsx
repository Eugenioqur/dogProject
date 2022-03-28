import React from  'react'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { getDogSearch } from './redux/actions';

import s from './css/SearchBar.module.css'

export default function SearchBar(){
    const dispatch = useDispatch();
    const [dog,setDog] = useState({dogs:""})

    function handleImputChange(e){
        e.preventDefault();
        setDog({
            ...dog,
            dogs: e.target.value 
        });
    
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(getDogSearch(dog.dogs));
        setDog({dogs:""});
    }

    return(
        <div>
            <input className={s.input} type="text" placeholder="Search..." value={dog.dogs} onChange={(e)=> handleImputChange(e)}/>
            <button className={s.button} type="submit" onClick={(e) => handleSubmit(e)}>Search</button>
        </div>
    )
}