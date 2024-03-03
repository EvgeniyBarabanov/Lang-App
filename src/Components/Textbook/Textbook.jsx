import React, {useRef} from "react";

import "./Textbook.sass";


import { ButtonGroup } from "../Buttons/Buttons";
import TextbookLogo from "../../../public/image/textbook-logo.png";
import DictionaryLogo from "../../../public/image/dictionary-logo.png";
import SneakersIcon from "../../../public/image/sneakers-icon.png"
import HornIcon from "../../../public/image/horn-icon.png";
import GearIcon from "../../../public/image/gear-icon.svg";

function Textbook(){

    const showWindow = useRef()

    const mode = function(){
        console.log('mode textbook');
    }

    const buttonsMode = [
        {
            'text': <h4 className="heading heading_4">Textbook</h4>,
            'logo': TextbookLogo,
            'onclick': mode(),
            'className': 'button button_row'
        },
        {
            'text': <h4 className="heading heading_4">Dictionary</h4>,
            'logo': DictionaryLogo,
            'onclick': mode(),
            'className': 'button button_row'
        }
    ]

    const toogleBtn = function(){
        showWindow.current.classList.toggle('textbook__modal')
    }

    return(
        <div className="textbook">
            <div className="container">
                <div className="textbook__select-mode">
                    <ButtonGroup className="button-group" elements={buttonsMode} />

                    <div className="textbook__button-group">
                        <button className="button button_small textbook__button">
                            <div className="textbook__button_wrapper">
                                <img src={SneakersIcon} alt="sprint game" />
                            </div>
                            Sprint
                        </button>
                        <button className="button button_small textbook__button">
                            <div className="textbook__button_wrapper">
                                <img src={HornIcon} alt="audio-call game" />
                            </div>
                            Audio-Call
                        </button>
                        <button onClick={()=>toogleBtn()} className="button textbook__drop-btn">
                            <GearIcon/>
                        </button>
                        <div ref={showWindow} className="textbook__modal">
                            <label htmlFor="">
                                <input type="checkbox" value="#"/>
                                Show words in a list
                            </label>
                            <label htmlFor="">
                                <input type="checkbox" value="#"/>
                                Display the 'Add' and 'Remove' buttons
                            </label>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Textbook;