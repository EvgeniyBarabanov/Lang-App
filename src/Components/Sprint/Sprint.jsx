import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Sprint.sass";

import SprintLogo from "../../../public/image/sprintLogo.png";
import Games from "../Games/Games";
import { createButtons } from "../Buttons/Buttons";

/* change round button styles */

function Sprint(){

    const [level, setLevel] = useState('')

    const chooseLevel = function(lvl){
        setLevel(lvl);
    }

    const navigate = useNavigate();
    const handleSubmit = function(route){
        navigate(route);
    }

    let sprintInfo = {
        'logo': SprintLogo,
        'heading': "Sprint",
        'label': "speed task",
        'description': "Trains the skill of fast translation. You have to choose if the translation corresponds to the suggested word.",
        'buttonLabel': "Choose a level:",
        'content': <div className='games__content'>
            <span className="text text_size14">Choose a level:</span>
            <div className='buttonGroup'>{createButtons([
                {
                    'text': "А1",
                    'onClick': ()=>chooseLevel("A1"),
                    'variant': "hollow hollow_round hollow_round_color_green"
                },
                {
                    'text': "А2",
                    'onClick': ()=>chooseLevel("A2"),
                    'variant': "hollow hollow_round hollow_round_color_yellow"
                },
                {
                    'text': "B1",
                    'onClick': ()=>chooseLevel("B1"),
                    'variant': "hollow hollow_round hollow_round_color_orange"
                },
                {
                    'text': "B2",
                    'onClick': ()=>chooseLevel("B2"),
                    'variant': "hollow hollow_round hollow_round_color_red"
                },
                {
                    'text': "C1",
                    'onClick': ()=>chooseLevel("C1"),
                    'variant': "hollow hollow_round hollow_round_color_pink"
                },
                {
                    'text': "C2",
                    'onClick': ()=>chooseLevel("C2"),
                    'variant': "hollow hollow_round hollow_round_color_cyan"
                }
            ])}</div>
            <div className='buttonGroup'>{createButtons([
                {
                    'text': "Get started",
                    'onClick': ()=>handleSubmit(level),
                    'variant': "button_small hollow"
                }
            ])}</div>
        </div>
    }

    return(
            <Games logo={sprintInfo.logo} heading={sprintInfo.heading} label={sprintInfo.label} description={sprintInfo.description} buttonLabel={sprintInfo.buttonLabel} content={sprintInfo.content} />
    )
}

export default Sprint;