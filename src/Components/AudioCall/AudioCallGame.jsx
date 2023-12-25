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

    const [keyBlock, setKeyBlock] = useState(false);

    const [wordList, setWordList] = useState([]);
    const [wordInfo, setWordInfo] = useState([]);
    const [wordForTranslate, setWordForTranlsate] = useState({});
    const [lives, setLives] = useState(5)
    const [buttonStatus, setButtonStatus] = useState(false);

    const focus = useRef();
    const heart = useRef();
    const positiveAnswer = useRef();

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
            let wordListTMP = wordList;
            wordListTMP[getRandom(0,4)].flag = true;
            wordListTMP.map((item)=>{
                if(item.flag){
                    setWordForTranlsate({...item});
                }
            })
            setWordInfo([...wordListTMP])
        }
    },[wordList])

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

    function test(obj, event){
        console.log(obj);
        setKeyBlock(true);
        Array.from(positiveAnswer.current.children).map((item, index)=>{
            if(wordForTranslate.translate == item.innerHTML){
                item.classList.add('dim_cyan_dark');
            }
            if( obj.flag == undefined && obj.translate == item.innerHTML){
                item.classList.add('dim_pink_dark');
                setLives(lives - 1);
            }
            item.classList.add('dim_block');
        })

        /* if(obj.word === wordForTranslate.word){
            event.target.classList.add('dim_cyan_dark');
        }else{
            event.target.classList.add('dim_pink_dark');
        } */
        setButtonStatus(true);
    }

    function voiceWord(event){
        let synth = window.speechSynthesis;
        let voices = synth.getVoices();
        let message = new SpeechSynthesisUtterance();
        console.log(wordForTranslate);
        message.text = wordForTranslate.word;
        console.log(message.text);
        synth.speak(message);
    }

    function variantWord(){
        const override = {
            "boxShadow": "#2B788B 0px 0px 0px 2px inset"
        };

        if(wordList.length < 5){
            return <ClockLoader color='#2B788B' cssOverride={override}/>
        }else{
            focus.current.focus({preventScrool : true})
            return <div ref={positiveAnswer} className="list-button">{wordInfo.map((item, index)=>{
                    return <Button key={index} disabled={buttonStatus} className="button button_small dim" onClick={(event)=>test(item, event)}>{item.translate}</Button>
                })}</div>
        }
    }

    let keyTest = function(event){
        if(keyBlock == true)
            return
        switch(event.code){
            case 'Digit1':
                test(wordInfo[0]);
                break;
            case 'Digit2':
                test(wordInfo[1]);
                break;
            case 'Digit3':
                test(wordInfo[2]);
                break;
            case 'Digit4':
                test(wordInfo[3]);
                break;
            case 'Digit5':
                test(wordInfo[4]);
                break;
        }
    }

    function nextTest(){
        setButtonStatus(false);
        setWordList([]);
        setKeyBlock(false);
    }

    return(
        <div ref={focus} onKeyDown={keyTest} tabIndex={-1} className="audio-call-game">
            <div className="container audio-call-game__container">
                <Button onClick={()=>voiceWord()} className='button hollow-reverse'><Song width={48} height={50}/><p className="hollow-reverse_color_cyan-dark">Play</p></Button>
                <div ref={heart} className="audio-call-game__hearts">
                    <Heart className="heartFill" />
                    <Heart className="heartFill" />
                    <Heart className="heartFill" />
                    <Heart className="heartFill" />
                    <Heart className="heartFill" />
                </div>
                {variantWord()}
                <button onClick={()=>nextTest()}>NEXT</button>
                <p className="text text_size12">*You can also use the 1-5 keys on the keyboard</p>
            </div>
        </div>
    )
}

export default AudioCallGame;