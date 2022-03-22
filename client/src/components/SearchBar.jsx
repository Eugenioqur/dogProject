import React from  'react'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { getDogSearch } from './redux/actions';

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
            <input type="text" placeholder="Search..." value={dog.dogs} onChange={(e)=> handleImputChange(e)}/>
            <button type="submit" onClick={(e) => handleSubmit(e)}>Search</button>
        </div>
    )
}