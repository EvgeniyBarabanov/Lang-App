import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { words } from "popular-english-words";
import { ClockLoader } from 'react-spinners';
import Song from "../../../public/image/song-icon.svg"
import Heart from "../../../public/image/heart-icon.svg"
import { Button } from "../Buttons/Buttons";
import './AudioCallGame.sass'

/* сравнить функции getRandom и getRandomFlag по размещению на странице */

function AudioCallGame(){
    const params = useParams();
    
    const popularWords = words.getMostPopular(10000);

    const [wordList, setWordList] = useState([]);
    const [wordInfo, setWordInfo] = useState([]);
    const [wordForTranslate, setWordForTranlsate] = useState({});
    const [lives, setLives] = useState(5)

    const heart = useRef();

    useEffect(()=>{
        
        switch(lives){
            case 0:
                heart.current.children[0].classList.toggle('heartFill');
                break;
            case 1:
                heart.current.children[1].classList.toggle('heartFill');
                break;
            case 2:
                heart.current.children[2].classList.toggle('heartFill');
                break;
            case 3:
                heart.current.children[3].classList.toggle('heartFill');
                break;
            case 4:
                heart.current.children[4].classList.toggle('heartFill');
                break;
        }
    },[lives])

    const getRandom = function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min
    };

    useEffect(()=>{
        if(wordList.length < 5){
            getWord(params.level);
        }else{
            setWordForTranlsate(wordList[getRandom(0,4)].word);
            setWordInfo([...wordList])
        }
    },[wordList])

    const override = {
        display: "block",
        margin: "0 auto",
    };

    if(wordList.length < 5){
        return <ClockLoader color='silver' cssOverride={override}/>
    }

    function getWord(lvl){

        const groupWords = {
            'A1':[0, 1666],
            'A2':[1667, 3332],
            'B1':[3333, 4998],
            'B2':[4999, 6664],
            'C1':[6665, 8330],
            'C2':[8331, 9999],
        };

        const allWords = popularWords.slice(groupWords[lvl][0], groupWords[lvl][1]);

        const wordEng =(allWords[Math.floor(Math.random() * (allWords.length-1 - 0 + 1) ) + 0]);
        
        fetch('https://tmp.myitschool.org/API/translate/?source=en&target=ru&word=' + wordEng)
            .then((response) => response.json())
            .then((result)=>{
                let wordListTMP = wordList;
                wordListTMP.push(result);
                setWordList([...wordListTMP])
            })
    }

    function test(obj){
        if(obj.word === wordForTranslate){
            console.log('угадал');
        }else{
            setLives(lives - 1);
        }
    }

    function voiceWord(event){
        let synth = window.speechSynthesis;
        let voices = synth.getVoices();

        let message = new SpeechSynthesisUtterance();
        message.text = wordForTranslate;
        
        synth.speak(message);
        /* const e = event.currentTarget;
        message.onstart = function(){
            e.classList.toggle('checkbox__active');
        }
        message.onend = function(){
            e.classList.toggle('checkbox__active');
        } */
    }

    function nextTest(){
        setWordList([]);
    }

    return(
        <div className="audio-call-game">
            <div className="container audio-call-game__container">
                <Button onClick={()=>voiceWord()} className='button hollow-reverse'><Song width={48} height={50}/><p className="hollow-reverse_color_cyan-dark">Play</p></Button>
                <div ref={heart} className="audio-call-game__hearts">
                    <Heart className="heartFill" />
                    <Heart className="heartFill" />
                    <Heart className="heartFill" />
                    <Heart className="heartFill" />
                    <Heart className="heartFill" />
                </div>
                <ul className="list-button">{wordInfo.map((item, index)=>{
                    return <li className="list-button__item" key={index}><button className="button button_small hollow hollow_transparent" onClick={(e)=>test(item)}>{item.translate}</button></li>
                })}</ul>
                <button onClick={()=>nextTest()}>NEXT</button>
            </div>
        </div>
    )
}

export default AudioCallGame;