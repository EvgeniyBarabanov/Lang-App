import React from "react";
import "./Counter.sass"

export const Counter = function(props){
    return(
        <div className="counter">
            <div className="counter__wrapper">
                <div className="counter__wrapper_directionRow">
                    {props.icon &&
                        <props.icon />
                    }
                    <span className="counter__amount">{props.amount}</span>
                    {props.iconPlus &&
                        <props.iconPlus />
                    }
                </div>
                <span className="text text_size16">{props.postscript}</span>  
            </div>
        </div>
    )
}

export const counterInfo = function(elements){
        let wordsGamesInfo = [];
        elements.map(
            (item, index)=>{
                wordsGamesInfo.push(<Counter key={index} icon={item.icon} amount={item.amount} iconPlus={item.iconPlus} postscript={item.postscript}/>)
            }
        )
        return wordsGamesInfo;
    }