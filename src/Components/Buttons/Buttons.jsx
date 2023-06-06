import React from "react";
import './Buttons.sass'


export const Button = function(props){
    const classes = [/button_small/, /hollow/, /hollow_round/, /filled/, /filled_picture/, /filled_color_pinkDark/, /hollow_round_color_green/ , /hollow_round_color_yellow/, /hollow_round_color_orange/, /hollow_round_color_red/, /hollow_round_color_pink/, /hollow_round_color_cyan/];

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
            <button onClick={props.onClick} className={`button ${selectClass(classes)} `}>
                {props.children}
                {props.logo &&
                    <props.logo/>}
            </button>    
    )
}



export const createButtons = function(elements, label){
        return (
            <div className="buttonGroup">
                {label &&
                    <div className="buttonGroup__label">{label}</div>}
                <div className="buttonGroup__wrapper">
                    {elements.map(
                        (item, index)=>{
                            return <Button variant={item.variant} onClick={item.onClick} key={index} logo={item.logo}>{item.text}</Button>
                        }
                    )}
                </div>
            </div>
        )
}