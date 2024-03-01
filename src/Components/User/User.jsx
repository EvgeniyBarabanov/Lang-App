import React from "react";
import { useNavigate } from "react-router-dom";
import './User.sass'
import {ButtonGroup} from "../Buttons/Buttons.jsx"


function User(){

    const buttonsData =[
        {
            'text': "Log in →",
            'onClick': ()=>handleSubmit("registration"),
            'className': "button button_small"
        },
        {
            'text': "Sign up",
            'onClick': ()=>handleSubmit("authorization"),
            'className': "button button_small hollow"
        }
    ]

    const navigate = useNavigate();
    function handleSubmit(route){
        navigate(route);
    }

    return(
        <div className="user">
            <ButtonGroup className='button-group' elements={buttonsData} />
        </div>
    )
}

export default User;