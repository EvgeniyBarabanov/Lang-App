import React from "react";
import './Form.sass'
import Button from "../Buttons/Buttons.jsx"

function Form(){
    return(
        <div className="form">
            <Button variant = "button_small">Log in →</Button>
            <Button variant = "button_small hollow">Sign up</Button>
        </div>
    )
}

export default Form;