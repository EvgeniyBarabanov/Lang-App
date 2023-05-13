import React from "react";
import "./Counter.sass"

function Counter(props){
    return(
        <div className="counter">
            <div className="counter__wrapper">
                <props.icon />
                <span className="counter__amount">{props.amount}</span>
                <props.iconPlus />
            </div>
            <span className="text text_size16">{props.postscript}</span>
        </div>
    )
}

export default Counter;