import React from "react";
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
            'className': 'button button_heading'
        },
        {
            'text': <h4 className="heading heading_4">Dictionary</h4>,
            'logo': DictionaryLogo,
            'onclick': mode(),
            'className': 'button button_heading'
        }
    ]

    const buttonsGame = [
        {
            'text': "Sprint",
            'onClick' : ()=>handleSubmit("sprint"), 
            'logo': SneakersIcon,
            'className': "button button_small filled filled_picture filled_picture-small filled_color_pinkDark"
        },
        {
            'text': "Audio-call",
            'onClick': ()=>handleSubmit("audioCall"), 
            'logo': HornIcon,
            'className': "button button_small filled filled_picture filled_picture-small"
        }
    ]

    return(
        <div className="textbook">
            <div className="container">
                <div className="textbook__select-options">
                    <ButtonGroup className="button-group" elements={buttonsMode} />
                    <ButtonGroup className="button-group" elements = {buttonsGame} />
                </div>
            </div>
        </div>
    )
}

export default Textbook;