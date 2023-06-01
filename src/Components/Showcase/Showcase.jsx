import React from "react";
import "./Showcase.sass"

function Showcase(props){
    return(
        <div className={props.reverse
            ? "showcase showcase_background_white"
            : "showcase"}>
            <div className={props.reverse
                ? "container container_reverse"
                : "container"}>
                <div className="showcase__info">
                    {props.name &&
                        <span className="text text_spacing text_size16 text_color">{props.name}</span>
                    }
                    {props.heading &&
                        (props.headingBig 
                        ? <h1 className="heading">{props.heading}</h1>
                        : <h2 className="heading heading_2">{props.heading}</h2>)
                    }
                    <p className="text">{props.description}</p>
                    {props.content}
                </div>
                    <img src={props.logo} />
            </div>
        </div>
    )
}

export default Showcase;