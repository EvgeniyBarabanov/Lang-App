import React from "react";

function HomeData(props){
    return(
        <div className="counter">
            <props.icon />
            <span>{props.amount}</span>
            <props.iconPlus />
            <p>{props.postscript}</p>
        </div>
    )
}

export default HomeData;