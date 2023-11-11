import React from "react";
import "./Checkbox.sass";

function Checkbox(props){
    return(
        <button className="checkbox" onClick={props.onClick}>{props.image}</button>
    )
}

export default Checkbox;