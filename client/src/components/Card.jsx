import React from "react";

import s from './css/Card.module.css'

export default function Card({dog,weight,temperament,image}){

    return(
        <div className={s.conteiner}>
            <div className={s.text}>
                <h1 className={s.name}>{dog}</h1>
                <img className={s.image} src={image} alt="Image not found" />
                <p>Weight: {weight}</p>
                <hr className={s.line}/>
                <p>{temperament}</p>
            </div>
        </div>
    )
}