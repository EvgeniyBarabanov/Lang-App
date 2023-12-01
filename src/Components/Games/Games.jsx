import React from "react";

import "./Games.sass";

function Games(props){
    return(
        <div className="games">
            <div className="container games__container">
                <img src={props.logo} />
                <div className="games__info">
                    <h2 className="heading heading_2 games__heading">{props.heading}</h2>
                    <span className="label">{props.label}</span>
                    <p className="text text_size16 games__description">{props.description}</p>
                    {props.content}
                </div>
            </div>
        </div>
    )
}

export default Games