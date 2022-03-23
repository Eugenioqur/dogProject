import React from "react";

export default function Card({dog,weight,temperament,image}){

    return(
        <div>
            <p>{dog}</p>
            <p>{weight}</p>
            <p>{temperament}</p>
            <img src={image} alt="no imagen" />
        </div>
    )
}