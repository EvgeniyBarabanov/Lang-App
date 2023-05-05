import React from "react";
import "./Counter.sass"

function Counter(props){
    return(
        <div className="counter">
            <props.icon />
            <span className="counter__amount">{props.amount}</span>
            <props.iconPlus />
            <p className="text text_small">{props.postscript}</p>
        </div>
    )
}

export default Counter;