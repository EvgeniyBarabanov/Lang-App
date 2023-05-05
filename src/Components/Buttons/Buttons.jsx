import React from "react";
import { useNavigate } from "react-router-dom";
import './Buttons.sass'

function Button(props){
    const classes = [/button_small/, /hollow/, /filled/, /filled_picture/, /filled_color_pinkDark/];

    const navigate = useNavigate();

    const handleSubmit = function(){
        navigate(props.route);
    }

    const selectClass = function(variants){
        let arrClasses = [];
        variants.map(
            (item)=>{
                let result = props.variant.match(item)
                if (result !== null){
                    arrClasses.push(result[0])
                }
            }
        )
        let buttonClasses = arrClasses.join(' '); 
        return buttonClasses;
    }
    
    return(
           <button onClick={handleSubmit} className={`button ${selectClass(classes)} `}>
                {props.children}
                {props.logo &&
                    <props.logo/>}
           </button>    
    )
}

export default Button;