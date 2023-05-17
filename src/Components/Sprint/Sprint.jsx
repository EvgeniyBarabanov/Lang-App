import React from "react";
import "./Sprint.sass";
import {words} from 'popular-english-words';
import SprintLogo from "../../../public/image/sprintLogo.png";

function Sprint(){
    let popularWords = words.getMostPopular(10000)

    console.log(popularWords);

    return(
        <div className="sprint">
            <div className="container container_reverse">
                <div className="sprint__info">
                    <h2 className="heading heading_2">Sprint</h2>
                    <span className="label">speed task</span>
                    <p className="text text_size16">Trains the skill of fast translation. You have to choose if the translation corresponds to the suggested word.</p>
                </div>
            </div>
        </div>
    )
}

export default Sprint;