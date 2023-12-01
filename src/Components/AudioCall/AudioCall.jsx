import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import audioCallLogo from "../../../public/image/audio-call-logo.png";
import Games from "../Games/Games";
import {Button, ButtonGroup } from "../Buttons/Buttons";

function AudioCall(){
    document.title = 'Audio-call game'
    const [level, setLevel] = useState('')

    const chooseLevel = function(lvl){
        setLevel(lvl);
    }

    const navigate = useNavigate();
    const handleSubmit = function(route){
        navigate(route);
    }

    const buttonsData = [
        {
            'text': "А1",
            'onClick': ()=>chooseLevel("A1"),
            'className': "button hollow hollow_round hollow_round_color_green"
        },
        {
            'text': "А2",
            'onClick': ()=>chooseLevel("A2"),
            'className': "button hollow hollow_round hollow_round_color_yellow"
        },
        {
            'text': "B1",
            'onClick': ()=>chooseLevel("B1"),
            'className': "button hollow hollow_round hollow_round_color_orange"
        },
        {
            'text': "B2",
            'onClick': ()=>chooseLevel("B2"),
            'className': "button hollow hollow_round hollow_round_color_red"
        },
        {
            'text': "C1",
            'onClick': ()=>chooseLevel("C1"),
            'className': "button hollow hollow_round hollow_round_color_pink"
        },
        {
            'text': "C2",
            'onClick': ()=>chooseLevel("C2"),
            'className': "button hollow hollow_round hollow_round_color_cyan"
        }
    ]

    let info = {
        'logo': audioCallLogo,
        'heading': "Audio-Call",
        'label': "audition task",
        'description': "The Audio-Call training develops vocabulary and improves listening comprehension.",
        'content': <div className='games__content'>
            <p className='text text_size14'>Choose a level:</p>
            <ButtonGroup className="button-group button-group_gap24"elements={buttonsData}></ButtonGroup>
            <Button onClick={()=>handleSubmit(level)} className={'button button_small hollow'}>
                Get started
            </Button>  
        </div>
        
    }

    return(
            <Games logo={info.logo} heading={info.heading} label={info.label} description={info.description} content={info.content} />
    )
}
export default AudioCall;