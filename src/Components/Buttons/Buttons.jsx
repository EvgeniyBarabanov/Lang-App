import React from "react";
import './Buttons.sass'


export const Button = function(props){
    return(
            <button onClick={props.onClick} className={props.className}>
                {props.children}
                {props.logo &&
                    <props.logo/>}
            </button>    
    )
}

export const ButtonGroup = function(props){
    return (
        <div className={props.className}>
            {props.buttonGroupLabel &&
                <div className="buttonGroup__label text text_size16">{props.buttonGroupLabel}</div>}
            <div className="buttonGroup__wrapper">
                {props.elements.map(
                    (item, index)=>{
                        return <Button className={item.className} onClick={item.onClick} key={index} logo={item.logo}>{item.text}</Button>
                    }
                )}
            </div>
        </div>
    )
}