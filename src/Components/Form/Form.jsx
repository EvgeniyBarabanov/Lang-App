import React from "react";
import './Form.sass'
import {ButtonGroup} from "../Buttons/Buttons.jsx"

function Form(){

    const buttonsData =[
        {
            'text': "Log in →",
            'onClick': ()=>handleSubmit("login"),
            'className': "button button_small"
        },
        {
            'text': "Sign up",
            'onClick': ()=>handleSubmit("signUp"),
            'className': "button button_small hollow"
        }
    ]

    return(
        <div className="form">
            <ButtonGroup className="buttonGroup" elements={buttonsData}></ButtonGroup>
        </div>
    )
}

export default Form;