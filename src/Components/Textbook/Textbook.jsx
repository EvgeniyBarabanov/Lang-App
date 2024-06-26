import React, { useEffect, useRef, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { words } from "popular-english-words";
import "./Textbook.sass";

import TextbookLogo from "../../../public/image/textbook-logo.svg";
import DictionaryLogo from "../../../public/image/dictionary-logo.svg";
import SneakersIcon from "../../../public/image/sneakers-icon.png";
import HornIcon from "../../../public/image/horn-icon.png";
import GearIcon from "../../../public/image/gear-icon.svg";

//переписать рефы для шестеренки стейтами
// переделать полочку между кнопками textbook и dictionary отдельным элементом(занимает высоту родительского элемента)
//пересохранить картинки для игр в соотв. с макетом.(44х44)
//поменять названия стилей для текса, кнопок, заголовков и изменить line-height

function Textbook() {
    document.title = "Textbook";

    const popularWords = words.getMostPopular(10000);

    /* const [lvl, setLvl] = useState(); */
    const [groupWords, setGroupWords] = useState([]);

    const showWindow = useRef();
    const activeBtn = useRef();

    const lvlWords = {
        A1: [0, 1666],
        A2: [1667, 3332],
        B1: [3333, 4998],
        B2: [4999, 6664],
        C1: [6665, 8330],
        C2: [8331, 9999],
    };

    const navigate = useNavigate();
    const handleSubmit = function (route) {
        const allWords = popularWords.slice(
            lvlWords[route][0],
            lvlWords[route][1]
        );
        setGroupWords([allWords]);
        /* setLvl(route); */
        navigate(route);
    };

    /* const allWords = popularWords.slice(groupWords[lvl][0], groupWords[lvl][1]); */
    /* console.log(allWords); */

    useEffect(() => {
        handleSubmit("A1");
    }, []);

    const mode = function () {
        console.log("mode textbook");
    };

    const buttonLevelGroup = [
        {
            heading: "A1",
            level: "Easy",
            color: "textbook__level-group-btn_color-green",
        },
        {
            heading: "A2",
            level: "Easy",
            color: "textbook__level-group-btn_color-green",
        },
        {
            heading: "B1",
            level: "Medium",
            color: "textbook__level-group-btn_color-yellow",
        },
        {
            heading: "B2",
            level: "Medium",
            color: "textbook__level-group-btn_color-yellow",
        },
        {
            heading: "C1",
            level: "Hard",
            color: "textbook__level-group-btn_color-orange",
        },
        {
            heading: "C2",
            level: "Hard",
            color: "textbook__level-group-btn_color-orange",
        },
    ];

    const toogleBtn = function () {
        showWindow.current.classList.toggle("textbook__modal_hidden");
        activeBtn.current.classList.toggle("textbook__drop-btn_color_cyan");
        activeBtn.current.classList.toggle("textbook__drop-btn_active");
    };

    return (
        <div className="textbook">
            <div className="container container_column">
                <div className="textbook__select-mode">
                    <div className="button-group textbook__select-mode_group">
                        <button
                            className="button textbook__btn"
                            onClick={() => mode()}>
                            <TextbookLogo />
                            Textbook
                        </button>
                        <button
                            className="button textbook__btn"
                            onClick={() => mode()}>
                            <DictionaryLogo />
                            Dictionary
                        </button>
                    </div>

                    <div className="button-group button-group_gap10 button-group_position-relative">
                        <button className="button button_small textbook__filled-btn">
                            <div className="textbook__filled-btn_wrapper">
                                <img
                                    src={SneakersIcon}
                                    alt="sprint game"
                                />
                            </div>
                            Sprint
                        </button>
                        <button className="button button_small textbook__filled-btn">
                            <div className="textbook__filled-btn_wrapper">
                                <img
                                    src={HornIcon}
                                    alt="audio-call game"
                                />
                            </div>
                            Audio-Call
                        </button>
                        <button
                            ref={activeBtn}
                            onClick={() => toogleBtn()}
                            className="button textbook__drop-btn">
                            <GearIcon />
                        </button>
                        <div
                            ref={showWindow}
                            className="textbook__modal textbook__modal_hidden">
                            <div className="textbook__checkbox">
                                <input type="checkbox" />
                                <p className="text text_size16">
                                    Show words in a list
                                </p>
                            </div>
                            <div className="textbook__checkbox">
                                <input type="checkbox" />
                                <p className="text text_size16">
                                    Display the 'Add' and 'Remove' buttons
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="textbook__btn-level-group">
                    {buttonLevelGroup.map((item, index) => {
                        return (
                            <button
                                className="textbook__btn-level"
                                onClick={() => handleSubmit(item.heading)}
                                key={index}>
                                <p className="heading heading_shadow heading_4">
                                    {item.heading}
                                </p>
                                <span className="label textbook__label">
                                    {item.level}
                                </span>
                            </button>
                        );
                    })}
                </div>
                <Outlet context={groupWords} />
            </div>
        </div>
    );
}

export default Textbook;
