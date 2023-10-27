import React, {useEffect, useState, useRef} from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { words } from 'popular-english-words';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { counterInfo } from "../Counter/Counter";
import {ButtonGroup} from "../Buttons/Buttons";
import StarBonusIcon from "../../../public/image/starBonusIcon.svg";
import "./SprintGame.sass";



function SprintGame(){
    
    const [word, setWord] = useState({});

    const [points, setPoints] = useState(0);

    const [buttonStatus, setButtonStatus] = useState(false);

    const [passedWords, setPassedWords] = useState(0);

    const [timeSec, setTimeSec] = useState({
        'timer': 10,
    });

    const [timer, setTimer] = useState({
        'timerId': 0,
    });

    const [correctlyAnswers, setCorrectlyAnswers] = useState([]);

    const [mistakes, setMistakes] = useState([]);

    const [counterRightAnswers, setCounterRightAnswers] = useState(0);

    const params = useParams();
   
    const popularWords = words.getMostPopular(10000);

    const myRef = useRef();

    const focus = useRef();

    const [multipleBonus, setMultipleBonus] = useState('x1');

    useEffect(()=>{
        focus.current.focus({preventScroll : true});
    },[]);

    useEffect(()=>{
        countPoints();
        bonusScore();
        getWord(params.level, getRandomFlag(0,1));
        clearInterval(timer.timerId)
    },[correctlyAnswers, mistakes]);

    useEffect(()=>{
        if(passedWords == 10){
            finishTime();
            handleSubmit("sprintResult");
        }
    },[passedWords]);

    useEffect(()=>{
        if(timeSec.timer <= 0){
            let mistakesTMP = mistakes;
                mistakesTMP.push(word.word);
                setMistakes([...mistakesTMP]);
                setCounterRightAnswers(0);

            finishTime();
        }
    },[timeSec]);

    useEffect(()=>{
        setButtonStatus(false);
    },[word]);

    const buttonsData = [
        {
            'text': "Right",
            'onClick' : ()=>test(true),
            'className': "button button_small filled",
            'disabled' : buttonStatus,
        },
        {
            'text': "Wrong",
            'onClick': ()=>test(false),
            'className': "button button_small filled filled_color_pinkDark",
            'disabled' : buttonStatus,
        }
    ];

    const counterData = [
        {
            'amount': multipleBonus,
            'postscript': "multiplier",
        },
        {
            'amount': points,
            'postscript': "points",
        }
    ]

    const navigate = useNavigate();
    const handleSubmit = function(route){
        navigate(route, {replace: true, state: {correctlyAnswers, mistakes, passedWords, points}});
    }

    function getWord(lvl, positive){

        const groupWords = {
            'A1':[0, 1666],
            'A2':[1667, 3332],
            'B1':[3333, 4998],
            'B2':[4999, 6664],
            'C1':[6665, 8330],
            'C2':[8331, 9999],
        };

        const allWords = popularWords.slice(groupWords[lvl][0], groupWords[lvl][1]);
        const wordEngRight = (allWords[Math.floor(Math.random() * (allWords.length-1 - 0 + 1) ) + 0]);
        const wordEngWrong = (allWords[Math.floor(Math.random() * (allWords.length-1 - 0 + 1) ) + 0]);


        if (positive){
            fetch('https://tmp.myitschool.org/API/translate/?source=en&target=ru&word=' + wordEngRight)
            .then(response => response.json())
            .then(result => {
                result.flag = true;
                setWord({...result});
                startTime();
            })
        }else{
            fetch('https://tmp.myitschool.org/API/translate/?source=en&target=ru&word=' + wordEngWrong)
            .then(response => response.json())
            .then(result => {
                result.flag = false;
                result.word = wordEngRight;
                setWord({...result});
                startTime();
            })
        }
    }; 
    
    const getRandomFlag = function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        if (Math.floor(Math.random() * (max - min + 1)) + min == 0){
            return true;
        }else{
            return false;
        }
    };

    function test(value){

        setButtonStatus(true);

        setPassedWords(passedWords + 1)
        
        if(value === word.flag){
            let correctlyAnswersTMP = correctlyAnswers;
            correctlyAnswersTMP.push(word.word);
            setCorrectlyAnswers([...correctlyAnswersTMP]);
            setCounterRightAnswers( counterRightAnswers + 1);
        }else{
            let mistakesTMP = mistakes;
            mistakesTMP.push(word.word);
            setMistakes([...mistakesTMP]);
            setCounterRightAnswers(0);
        };

    }

    /* https://felixgerschau.com/react-hooks-settimeout/ */

    let keyTest = function(event){
        if(event.code == "ArrowLeft"){
            test(true);
        }else if(event.code == "ArrowRight"){
            test(false);
        }
    }

    function bonusScore(){
        if(counterRightAnswers > 2 && counterRightAnswers <= 6){
            myRef.current.children[1].setAttribute('class', 'starFill');
            setMultipleBonus('x2');
        }else if(counterRightAnswers >= 6){
            myRef.current.children[2].setAttribute('class', 'starFill'); 
            setMultipleBonus('x3');
        }else{
            myRef.current.children[1].removeAttribute('class');
            myRef.current.children[2].removeAttribute('class');
            setMultipleBonus('x1');
        }
    }

    function countPoints(){ /* написать через свитч */
        if(counterRightAnswers > 0 && counterRightAnswers <= 3){
            setPoints(points + 10);
        }else if(counterRightAnswers > 3 && counterRightAnswers <= 6){
            setPoints(points + 20);
        }else if(counterRightAnswers > 6){
            setPoints(points + 30);
        }
    }

    let startTime = function(){
        const timer1 = {'timerId': setInterval(()=> timeSet(), 100)};
        setTimer(timer1);
        let timeSecTMP = timeSec;
        timeSecTMP.timer = 10;
        setTimeSec({...timeSecTMP});
    }

    let timeSet = function(){
        let timeSecTMP = timeSec;
        timeSecTMP.timer = (timeSecTMP.timer - 0.1).toFixed(1);
        setTimeSec({...timeSecTMP});
        console.log(timeSec, timer.timerId);
    }

    let finishTime = function(){
        clearInterval(timer.timerId); 
        console.log('asd');
    }

    return(
        <div ref={focus} onKeyDown={keyTest} tabIndex={-1} className="sprintGame">
            <CircularProgressbarWithChildren className="sprintGame__progressBar" strokeWidth='2' maxValue={10} value={timeSec.timer}>
                
                <div className="counterGroup counterGroup_padding-bottom">{counterInfo(counterData)}</div>
                <div ref={myRef} className="sprintGame__stars">
                    <StarBonusIcon className="starFill" />
                    <StarBonusIcon  />
                    <StarBonusIcon  />
                </div>
                <div className="sprintGame__words">
                    <h2 className="heading heading_2">{word.word}</h2>
                    <h2 className="heading heading_2 heading_color_cyanDark">{word.translate}</h2>
                </div>
                <ButtonGroup className="buttonGroup" elements={buttonsData}></ButtonGroup>
            </CircularProgressbarWithChildren>
            <p className="text text_size12">*You can also use the ← → keys on the keyboard</p>
        </div>
    )
}

export default SprintGame;