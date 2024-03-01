import React from "react";

import "./Textbook.sass";

import { ButtonGroup } from "../Buttons/Buttons";
import TextbookLogo from "../../../public/image/textbook-logo.png";
import DictionaryLogo from "../../../public/image/dictionary-logo.png";
import SneakersIcon from "../../../public/image/sneakers-icon.png"
import HornIcon from "../../../public/image/horn-icon.png";

function Textbook(){

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

    

    return(
        <div className="textbook">
            <div className="container">
                <div className="textbook__select-mode">
                    <ButtonGroup className="button-group" elements={buttonsMode} />

                    <div className="textbook__button-group">
                        <button className="button button_small textbook__button">
                            <div className="textbook__button_wrapper">
                                <img src={SneakersIcon} alt="" />
                            </div>
                            Sprint
                        </button>
                        <button className="button button_small textbook__button">
                            <div className="textbook__button_wrapper">
                                <img src={HornIcon} alt="" />
                            </div>
                            Audio-Call
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Textbook;