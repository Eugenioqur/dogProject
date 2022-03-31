import React from "react";

import s from './css/Paginated.module.css'

export default function Paginated({allDogs,dogsPerPage,pag,page}){
    let numbers = []

    for (let i = 1; i<= Math.ceil((allDogs/dogsPerPage));i++){
        numbers.push(i)
    }

    return(
        <div>
            <ul className={s.cont}>
            {page > 1 ? (<li className={s.list}><button className={s.button}  onClick={()=> pag(page-1)}>-</button></li>) :(<li className={s.list}><p></p></li>) }
                {
                    numbers.map(n=>(
                        <li className={s.list} key ={n}>
                            <button className={s.button}  onClick={()=> pag(n)}>{n}</button>
                        </li>
                    ))
                }
            {page < Math.ceil((allDogs/dogsPerPage)) ? (<li className={s.list}><button className={s.button}  onClick={()=> pag(page+1)}>+</button></li>) :(<li className={s.list}><p></p></li>) }
            </ul>
        </div>
    )
}