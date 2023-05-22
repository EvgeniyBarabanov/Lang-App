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
                    {props.label &&
                        <span className="label">props.label</span>
                    }
                    {props.description &&
                        (props.descriptionSize16
                        ? <p className="text text_size16">{props.description}</p>
                        : <p className="text">{props.description}</p>)
                    }
                    {props.buttonLevel &&
                        <div className="showcase__buttonLevel-group">
                            {props.buttonLevel}
                        </div>
                    }
                    <div className="showcase__button-group">
                        {props.button}
                    </div>
                    {props.wordsGames &&
                        <div  className="showcase__counter-group">
                            {props.wordsGames}
                        </div>
                    }
                </div>
                    <img src={props.logo} />
            </div>
        </div>
    )
}

export default Showcase;