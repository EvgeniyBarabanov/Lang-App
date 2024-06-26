import React from "react";
import { useNavigate } from "react-router-dom";
import {
    CircularProgressbarWithChildren,
    buildStyles,
} from "react-circular-progressbar";
import "./ResultGame.sass";

import { ButtonGroup } from "../Buttons/Buttons.jsx";
import PlayVoice from "../PlayVoice/PlayVoice.jsx";

import StackOfBooks from "../../../public/image/stackOfBooks.svg";
import Song from "../../../public/image/song-icon.svg";
import Repeat from "../../../public/image/repeat.png";

function ResultGame(props) {
    const navigate = useNavigate();
    function handleSubmit(route) {
        navigate(route);
    }

    const buttonData = [
        {
            text: "Play it again",
            onClick: () => handleSubmit(props.content.name),
            logo: Repeat,
            className: "button button_picture button_small",
        },
        {
            text: "Go to textbook",
            onClick: () => handleSubmit("/textbook"),
            className: "button button_small filled",
        },
    ];

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

    return (
        <div className="result">
            <div className="container result__container">
                <div className="result__progress">
                    <div className="result__points">
                        <StackOfBooks />
                        <div className="result__score">
                            <h3 className="heading heading_3">
                                {props.content.heading}
                            </h3>
                            <p className="text text_size16">
                                You did pretty good!
                            </p>
                            <div className="result__progress-bar-group">
                                <CircularProgressbarWithChildren
                                    className="result__progress-bar"
                                    maxValue={props.content.maxScoreValue}
                                    value={props.content.scoreValue}
                                    styles={buildStyles(
                                        props.content.scoreBarColor
                                    )}
                                    strokeWidth="4">
                                    {props.content.scoreBarCount}
                                </CircularProgressbarWithChildren>
                                <CircularProgressbarWithChildren
                                    className="result__progress-bar"
                                    maxValue={props.content.maxWordsValue}
                                    value={props.content.wordsValue}
                                    styles={buildStyles(
                                        props.content.wordsBarColor
                                    )}
                                    strokeWidth="4">
                                    {props.content.wordsBarCount}
                                </CircularProgressbarWithChildren>
                            </div>
                        </div>
                    </div>
                    <ButtonGroup
                        className="button-group"
                        elements={buttonData}
                    />
                </div>
                <div className="result__word-group">
                    <div className="result__word-learned">
                        <h3 className="heading heading_3 result__heading-words">
                            I know
                        </h3>
                        <span className="label result__label">
                            {props.content.labelLearned}
                        </span>
                        <ul className="list-word">
                            {props.content.learned.map((item, index) => {
                                return (
                                    <li
                                        className="list-word__item text text_size16"
                                        key={index}>
                                        <PlayVoice
                                            className="play-voice"
                                            onClick={(event) => {
                                                voiceWord(item.word, event);
                                            }}
                                            image=<Song />
                                        />
                                        {item.word}
                                        <span className="text text_size16">
                                             - {item.translate}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="result__word-unlearned">
                        <h3 className="heading heading_3 result__label">
                            I don't know
                        </h3>
                        <span className="label result__label">
                            {props.content.labelUnlearned}
                        </span>
                        <ul className="list-word">
                            {props.content.unlearned.map((item, index) => {
                                return (
                                    <li
                                        className="list-word__item text text_size16"
                                        key={index}>
                                        <PlayVoice
                                            className="play-voice"
                                            onClick={(event) => {
                                                voiceWord(item.word, event);
                                            }}
                                            image=<Song />
                                        />
                                        {item.word}
                                        <span className="text text_size16">
                                             - {item.translate}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResultGame;
