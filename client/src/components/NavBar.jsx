import React from "react";
import {useDispatch} from 'react-redux'
import { filterSort } from "./redux/actions";

export default function NavBar (){
    const dispatch = useDispatch()

    function handleSort(e){
        dispatch(filterSort(e.target.value))
    }

    return(
        <div>
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
        </div>
    )
}