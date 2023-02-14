import React from "react";

function HomeData(props){
    return(
        <div className="home-page__data">
            <img src={props.icon} alt="" />
            <span>{props.amount}</span>
            <img src={props.icon} alt="" />
            <p>{props.postcript}</p>
        </div>
    )
}

export default HomeData;