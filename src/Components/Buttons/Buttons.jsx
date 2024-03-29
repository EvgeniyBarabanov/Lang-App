import React from "react";

export const Button = function (props) {
    return (
        <button
            onClick={props.onClick}
            className={props.className}
            disabled={props.disabled}>
            {props.logo && <img src={props.logo} />}
            {props.children}
        </button>
    );
};

export const ButtonGroup = function (props) {
    return (
        <div className={props.className}>
            {props.elements.map((item, index) => {
                return (
                    <Button
                        className={item.className}
                        disabled={item.disabled}
                        onClick={item.onClick}
                        key={index}
                        logo={item.logo}>
                        {item.text}
                    </Button>
                );
            })}
        </div>
    );
};
