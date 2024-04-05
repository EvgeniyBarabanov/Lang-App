import React from "react";
import "./Word.sass";

import Song from "../../../public/image/song-icon.svg";

import PlayVoice from "../PlayVoice/PlayVoice.jsx";
import { ButtonGroup } from "../Buttons/Buttons.jsx";

function Word(props) {
    const voiceWord = function (word, event) {
        let synth = window.speechSynthesis;
        let voices = synth.getVoices();
        let message = new SpeechSynthesisUtterance();
        message.text = word;

        synth.speak(message);
        const e = event.currentTarget;

        message.onstart = function () {
            e.classList.toggle("play-voice_active");
        };
        message.onend = function () {
            e.classList.toggle("play-voice_active");
        };
    };

    const switchBtn = function () {
        console.log("i work");
    };

    const buttonsData = [
        {
            text: "Add to learned",
            onClick: () => switchBtn(),
            className: "button button_small filled filled_color-green",
        },
        {
            text: "Add to dictionary",
            onClick: () => switchBtn(),
            className: "button button_small filled filled_color-orange",
        },
    ];

    return (
        <div className="word">
            <div className="word__image"></div>
            <div className="word__info">
                <div className="word__item">
                    <span className="heading heading_3">{props.word}</span>
                    <span className="heading heading_3">I </span>
                    <span className="heading heading_3">слово</span>
                    <PlayVoice
                        className="play-voice"
                        onClick={(event) => {
                            voiceWord("test word", event);
                        }}
                        image=<Song />
                    />
                </div>

                <p className="text text_color_black">[я транскрипция]</p>
                <p className="word__description text text_size16 text_color_black">
                    я определение
                </p>
                <p className="text text_size16">я пример</p>

                <ButtonGroup
                    className="button-group button-group_gap20"
                    elements={buttonsData}
                />
            </div>
        </div>
    );
}

export default Word;
