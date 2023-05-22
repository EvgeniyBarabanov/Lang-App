import React from "react";
import "./Sprint.sass";
import {words} from 'popular-english-words';
import SprintLogo from "../../../public/image/sprintLogo.png";
import Showcase from "../Showcase/Showcase";
import { createButtons } from "../Buttons/Buttons";

function Sprint(){
    /* let popularWords = words.getMostPopular(10000)
    console.log(popularWords); */

    let sprintInfo = {
        'heading': "Sprint",
        'label': "speed task",
        'description': "Trains the skill of fast translation. You have to choose if the translation corresponds to the suggested word.",
        'descriptionSize16': true,
        'buttonLevel': createButtons([
            {
                'text': "А1",
                'route': "#",
                'variant': "hollow hollow_round"
            },
            {
                'text': "А2",
                'route': "#",
                'variant': "hollow hollow_round"
            },
            {
                'text': "B1",
                'route': "#",
                'variant': "hollow hollow_round"
            },
            {
                'text': "B2",
                'route': "#",
                'variant': "hollow hollow_round"
            },
            {
                'text': "C1",
                'route': "#",
                'variant': "hollow hollow_round"
            },
            {
                'text': "C2",
                'route': "#",
                'variant': "hollow hollow_round"
            }
        ]),
        'button': createButtons([
            {
                'text': "Get started",
                'route': "#",
                'variant': "button_small hollow"
            }
        ]),
        'logo': SprintLogo
    }

    return(
        <div className="sprint">
            <Showcase reverse={sprintInfo.reverse} heading={sprintInfo.heading} label={sprintInfo.label} description={sprintInfo.description} descriptionSize16={sprintInfo.descriptionSize16} button={sprintInfo.button} buttonLevel={sprintInfo.buttonLevel} logo={sprintInfo.logo}/>
        </div>
    )
}

export default Sprint;