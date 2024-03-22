import React from "react";
import "./word.sass";

import Song from "../../../public/image/song-icon.svg"

import PlayVoice from "../PlayVoice/PlayVoice.jsx";

function Word(props){
    return <div className="word">
        <div className="word__image">
            <img src="https://placehold.co/330x260/b4b4b4/FFF?text=Hello+World&font=Montserrat" alt="слово для изучения" />
        </div> 
        <div className="word__info">
            <div className="word__item">
                <span>word</span> 
                <span>I</span> 
                <span>слово</span>
                <PlayVoice className="play-voice" onClick={(event)=>{voiceWord(item.word, event)}} image=<Song className='play-voice__image'/> />
                {/* сделать компонентом воспроизведение текста  */}
            </div>
            <p className="word__transcription">[я транскрипция]</p>
            <p className="word__description">я определение</p>
            <p className="word__example">я пример</p> 
        </div>
    </div>
}

export default Word;