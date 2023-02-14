import React from "react";

function HomeInfo(props){
    return(
        <div className="home-page">
            <div className="home-page__info">
                <span>{props.name}</span>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <button>{props.reference}</button>
            </div>
            <div className="home-page__info">
                <img src={props.logo} alt="" />
            </div>
        </div>
    )
}

export default HomeInfo;