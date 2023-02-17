import React from "react";

function HomeInfo(props){
    return(
        <div className="home-page">
            <div className="home-page__info">
                <span>{props.name}</span>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <div className="home-page__link">
                    {props.link}
                </div>
                <div  className="home-page__data">
                    {props.wordsGames}
                </div>
            </div>
                <props.logo className="home-page__logo"/>
        </div>
    )
}

export default HomeInfo;