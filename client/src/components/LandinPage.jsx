import React from "react";
import {Link} from "react-router-dom"

import s from './css/LandinPage.module.css'

export default function LandinPage(){

    return(
        <div className={s.body}>
            <div className={s.conteiner}>
                <h1 className={s.text}>Dogs</h1>
                <Link to="/home"><button className={s.button}>Home</button></Link>
            </div>
        </div>
    )
}