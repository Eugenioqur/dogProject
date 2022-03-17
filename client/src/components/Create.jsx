import React from "react";

export default function Create(){
    return(
        <div>
            <h1>Create</h1>
            <div>
                <div>
                    <label>Name</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Height</label>
                    <div>
                        <label>Min</label>
                        <input type="text" />
                        <label>Max</label>
                        <input type="text" />
                    </div>
                </div>
                <div>
                    <label>Weight</label>
                    <div>
                        <label>Min</label>
                        <input type="text" />
                        <label>Max</label>
                        <input type="text" />
                    </div>
                </div>
                <div>
                    <label>Life span</label>
                    <input type="text" />
                </div>
                <button>Create</button>
            </div>
        </div>
    )
}