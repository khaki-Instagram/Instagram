import React from "react";

function box(props){
    return (
        <div className="box">
            {props.name}
        </div>

    )
}

function label(test){
    return (
        <div className="label">
            {test.name}
        </div>

    )
}

export default {box, label};