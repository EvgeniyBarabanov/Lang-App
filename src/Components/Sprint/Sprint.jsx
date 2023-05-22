import React from "react";
import "./Sprint.sass";
import {words} from 'popular-english-words';
import SprintLogo from "../../../public/image/sprintLogo.png";
import Showcase from "../Showcase/Showcase";
import { createButtons } from "../Buttons/Buttons";
/* change round button styles */
function Sprint(){
    let popularWords = words.getMostPopular(10000)
    console.log(popularWords);

    let sprintInfo = {
        'heading': "Sprint",
        'label': "speed task",
        'description': "Trains the skill of fast translation. You have to choose if the translation corresponds to the suggested word.",
        'descriptionSize16': true,
        'buttonLevel': createButtons([
            {
                'text': "А1",
                'route': "#",
                'variant': "hollow hollow_round hollow_round_color_green"
            },
            {
                'text': "А2",
                'route': "#",
                'variant': "hollow hollow_round hollow_round_color_yellow"
            },
            {
                'text': "B1",
                'route': "#",
                'variant': "hollow hollow_round hollow_round_color_orange"
            },
            {
                'text': "B2",
                'route': "#",
                'variant': "hollow hollow_round hollow_round_color_red"
            },
            {
                'text': "C1",
                'route': "#",
                'variant': "hollow hollow_round hollow_round_color_pink"
            },
            {
                'text': "C2",
                'route': "#",
                'variant': "hollow hollow_round hollow_round_color_cyan"
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