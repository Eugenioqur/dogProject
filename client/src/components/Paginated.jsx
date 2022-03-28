import React from "react";

import s from './css/Paginated.module.css'

export default function Paginated({allDogs,dogsPerPage,pag}){
    let numbers = []

    for (let i = 1; i<= Math.ceil((allDogs/dogsPerPage));i++){
        numbers.push(i)
    }

    return(
        <div>
            <ul className={s.cont}>
                {
                    numbers.map(n=>(
                        <li className={s.list} key ={n}>
                            <button className={s.button}  onClick={()=> pag(n)}>{n}</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}