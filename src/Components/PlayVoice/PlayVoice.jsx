import React from "react";
import "./PlayVoice.sass";

function PlayVoice(props) {
    return (
        <button
            className={props.className}
            onClick={props.onClick}>
            {props.image}
        </button>
    );
}

export default PlayVoice;
