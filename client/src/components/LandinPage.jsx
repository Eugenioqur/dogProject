import React from "react";
import {Link} from "react-router-dom"

export default function LandinPage(){

    return(
        <div>
            <h1>Dogs</h1>
            <Link to="/home"><button>Home</button></Link>
        </div>
    )
}