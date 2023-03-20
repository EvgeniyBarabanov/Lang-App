import React from "react";

function HomeInfo(props){
    return(
        <div className="showcase">
            <div className="container">
                <div className="showcase__info">
                    {props.name &&
                        <span>{props.name}</span>
                    }
                    {props.heading &&
                        (props.big 
                        ? <h1 className="heading heading_1">{props.heading}</h1>
                        : <h2 className="heading heading_2">{props.heading}</h2>)
                    }
                    
                    <p>{props.description}</p>
                    <div className="showcase__link-group">
                        {props.link}
                    </div>
                    {props.wordsGames &&
                        <div  className="showcase__counter-group">
                            {props.wordsGames}
                        </div>
                    }
                </div>
                    <props.logo className="showcase__image"/>
            </div>
        </div>
    )
}

export default HomeInfo;