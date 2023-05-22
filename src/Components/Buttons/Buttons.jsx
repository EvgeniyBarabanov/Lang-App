import React from "react";
import { useNavigate } from "react-router-dom";
import './Buttons.sass'


export const Button = function(props){
    const classes = [/button_small/, /hollow/, /hollow_round/, /filled/, /filled_picture/, /filled_color_pinkDark/, /hollow_round_color_green/ , /hollow_round_color_yellow/, /hollow_round_color_orange/, /hollow_round_color_red/, /hollow_round_color_pink/, /hollow_round_color_cyan/];

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

export const createButtons = function(elements){
        return elements.map(
            (item, index)=>{
                return <Button variant={item.variant} key={index} route={item.route} logo={item.logo}>{item.text}</Button>
            }
        )
    }