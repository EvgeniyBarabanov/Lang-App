import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { words } from "popular-english-words";
import { ClockLoader } from 'react-spinners';
import Song from "../../../public/image/song-icon.svg"
import Heart from "../../../public/image/heart-icon.svg"
import { Button } from "../Buttons/Buttons";
import './AudioCallGame.sass'

/* сравнить функции getRandom и getRandomFlag по размещению на странице */
/* переписать кнопки компонентом buttonGroup */
/* проверить фокус при нажатии кнопок, срабатывает только после клика по области */
/* переписать функци. hundleSubmit, т.к. дублируется на нескольких страницах */

/* создать sass файд дял всех прогрессбаров, обьединить что возможно */
/* создать отдельный sass для svg heart */
/* dshjdyznm heart на странице результатов */

function AudioCallGame(){
    const params = useParams();
    
    const popularWords = words.getMostPopular(10000);

    const [keyBlock, setKeyBlock] = useState(false);
    const [wordList, setWordList] = useState([]);
    const [wordInfo, setWordInfo] = useState([]);
    const [wordForTranslate, setWordForTranlsate] = useState({});
    const [lives, setLives] = useState(5)
    const [buttonStatus, setButtonStatus] = useState(false);
    const [passedWords, setPassedWords] = useState(0);
    const [correctlyAnswers, setCorrectlyAnswers] = useState([]);
    const [mistakes, setMistakes] = useState([]);
    const maxWordsValue = 20;

    const focus = useRef();
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

    useEffect(()=>{
        if(lives == 0 || passedWords == maxWordsValue){
            handleSubmit("audioCallResult");
        }
    },[lives, passedWords])

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
                result.flag = false;
                result.className = 'button button_small dim';
                let wordListTMP = wordList;
                wordListTMP.push(result);
                setWordList([...wordListTMP]);
            });
    };

    function getRandom(min, max) {

        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min
    };

    function test(obj){

        let wordInfoTMP = wordInfo;
        wordInfoTMP.map(item =>{
            if(item.flag == wordForTranslate.flag){
                item.className = item.className + ' dim_cyan_dark';
            }

            if(obj.translate == item.translate && obj.flag == false){
                let mistakesTMP = mistakes;
                mistakesTMP.push(wordForTranslate);
                setMistakes([...mistakesTMP]);
                item.className = item.className + ' dim_pink_dark';
                setLives(lives - 1);
            }else if(obj.translate == item.translate && obj.flag == true){
                let correctlyAnswersTMP = correctlyAnswers;
                correctlyAnswersTMP.push(wordForTranslate);
                setCorrectlyAnswers([...correctlyAnswersTMP]);
            }

            item.className = item.className + ' dim_block';
        });

        setWordInfo([...wordInfoTMP]);
        setButtonStatus(true);
        setPassedWords(passedWords + 1);
        setKeyBlock(true);
    }

    function voiceWord(){

        let synth = window.speechSynthesis;
        let voices = synth.getVoices();
        let message = new SpeechSynthesisUtterance();
        console.log(wordForTranslate);
        message.text = wordForTranslate.word;
        synth.speak(message);
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
        };
    }

    function nextWord(){

        setButtonStatus(false);
        setWordList([]);
        setKeyBlock(false);
    }

    function skipWord(){

        let mistakesTMP = mistakes;
        mistakesTMP.push(wordForTranslate);
        setMistakes([...mistakesTMP]);

        setLives(lives - 1);
        setButtonStatus(true);
        setPassedWords(passedWords + 1);
        setKeyBlock(true);

        let wordInfoTMP = wordInfo;
        wordInfoTMP.map(item =>{
            if(item.flag == wordForTranslate.flag){
                item.className = item.className + ' dim_cyan_dark';
            }
            item.className = item.className + ' dim_block';
        });

        setWordInfo([...wordInfoTMP]);
    }

    const navigate = useNavigate();
    function handleSubmit(route){
        navigate(route, {replace: true, state: {correctlyAnswers, mistakes, lives, maxWordsValue}});
    }

    return(
        <div onKeyDown={keyTest} tabIndex={-1} className="audio-call-game">
            <div ref={focus} className="container audio-call-game__container">
                <Button onClick={()=>voiceWord()} className='button hollow-reverse'><Song width={48} height={50}/><p className="hollow-reverse_color_cyan-dark">Play</p></Button>
                <div ref={heart} className="audio-call-game__hearts">
                    <Heart className="heartFill" />
                    <Heart className="heartFill" />
                    <Heart className="heartFill" />
                    <Heart className="heartFill" />
                    <Heart className="heartFill" />
                </div>
                {
                    wordList.length < 5
                        ? <ClockLoader color='#2B788B' box-shadow="#2B788B 0px 0px 0px 2px inset"/>
                        : <div className="list-button">{wordInfo.map((item, index)=>{
                            return <Button key={index} disabled={buttonStatus} className={item.className} onClick={()=>test(item)} >{item.translate}</Button>
                        })}</div>
                }
                {
                    buttonStatus 
                        ? <Button className="button button_small filled" onClick={()=>nextWord()}>Next</Button>
                        : <Button className="button button_small filled" onClick={()=>skipWord()}>I don't now</Button>
                }
                <p className="text text_size12">*You can also use the 1-5 keys on the keyboard</p>
            </div>
        </div>
    )
}

export default AudioCallGame;