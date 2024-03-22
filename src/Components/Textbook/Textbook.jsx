import React, {useRef} from "react";
import "./Textbook.sass";

import Word from "../Word/Word.jsx";

import TextbookLogo from "../../../public/image/textbook-logo.svg";
import DictionaryLogo from "../../../public/image/dictionary-logo.svg";
import SneakersIcon from "../../../public/image/sneakers-icon.png"
import HornIcon from "../../../public/image/horn-icon.png";
import GearIcon from "../../../public/image/gear-icon.svg";

//переписать рефы для шестеренки стейтами
// переделать полочку между кнопками textbook и dictionary отдельным элементом(занимает высоту родительского элемента)
//пересохранить картинки для игр в соотв. с макетом.(44х44)
//поменять названия стилей для текса, кнопок, заголовков и изменить line-height

function Textbook(){

    document.title = 'Textbook';

    const showWindow = useRef();
    const activeBtn = useRef();

    const mode = function(){
        console.log('mode textbook');
    }

    const chooseLevel = function(lvl){
        console.log(lvl);

    }

    const buttonLevelGroup = [
        {
            "heading": "A1",
            "level": "Easy",
            "color": "textbook__level-group-btn_color-green"
        },
        {
            "heading": "A2",
            "level": "Easy",
            "color": "textbook__level-group-btn_color-green"
        },
        {
            "heading": "B1",
            "level": "Medium",
            "color": "textbook__level-group-btn_color-yellow"
        },
        {
            "heading": "B2",
            "level": "Medium",
            "color": "textbook__level-group-btn_color-yellow"
        },
        {
            "heading": "C1",
            "level": "Hard",
            "color": "textbook__level-group-btn_color-orange"
        },
        {
            "heading": "C2",
            "level": "Hard",
            "color": "textbook__level-group-btn_color-orange"
        }
    ]

    const toogleBtn = function(){
        showWindow.current.classList.toggle('textbook__modal_hidden')
        activeBtn.current.classList.toggle('textbook__drop-btn_color_cyan')
        activeBtn.current.classList.toggle('textbook__drop-btn_active')
    };

    return(
        <div className="textbook">
            <div className="container container_column">
                <div className="textbook__select-mode">
                    <div className="button-group textbook__select-mode_group">
                        <button className="button textbook__btn" onClick={()=>mode()}>
                            <TextbookLogo/>
                            Textbook
                        </button>
                        <button className="button textbook__btn" onClick={()=>mode()}>
                            <DictionaryLogo/>
                            Dictionary
                        </button>
                    </div>

                    <div className="button-group button-group_gap10 button-group_position-relative">
                        <button className="button button_small textbook__filled-btn">
                            <div className="textbook__filled-btn_wrapper">
                                <img src={SneakersIcon} alt="sprint game" />
                            </div>
                            Sprint
                        </button>
                        <button className="button button_small textbook__filled-btn">
                            <div className="textbook__filled-btn_wrapper">
                                <img src={HornIcon} alt="audio-call game" />
                            </div>
                            Audio-Call
                        </button>
                        <button ref={activeBtn} onClick={()=>toogleBtn()} className="button textbook__drop-btn">
                            <GearIcon/>
                        </button>
                        <div ref={showWindow} className="textbook__modal textbook__modal_hidden">
                            <div className="textbook__checkbox">
                                <input type="checkbox"/>
                                <p className="text text_size16">Show words in a list</p> 
                            </div>
                            <div className="textbook__checkbox">
                                <input type="checkbox"/>
                                <p className="text text_size16">Display the 'Add' and 'Remove' buttons</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="textbook__btn-level-group">
                    {buttonLevelGroup.map((item, index)=>{
                        return <button className="textbook__btn-level" onClick={()=>chooseLevel(item.heading)} key={index}>
                            <p className="heading heading_shadow heading_4">{item.heading}</p>
                            <span className="label textbook__label">{item.level}</span> 
                        </button>
                    })}
                </div>
                
                <div className="textbook__slider">
                    <Word />
                </div>
            </div>
        </div>
    )
}

export default Textbook;