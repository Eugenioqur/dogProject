import React from "react";

export default function Paginated({allDogs,dogsPerPage,pag}){
    let numbers = []

    for (let i = 1; i<= Math.ceil((allDogs/dogsPerPage));i++){
        numbers.push(i)
    }

    return(
        <div>
            <ul>
                {
                    numbers.map(n=>(
                        <li key ={n}>
                            <button  onClick={()=> pag(n)}>{n}</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}