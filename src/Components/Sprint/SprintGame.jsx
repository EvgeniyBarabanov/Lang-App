import React, {useEffect, useState, useRef} from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { words } from 'popular-english-words';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { counterInfo } from "../Counter/Counter";
import {ButtonGroup} from "../Buttons/Buttons";
import StarBonusIcon from "../../../public/image/starBonusIcon.svg";
import "./SprintGame.sass";

function SprintGame(){
    
    const params = useParams();
   
    const popularWords = words.getMostPopular(10000);

    const [word, setWord] = useState({});
    const [points, setPoints] = useState(0);
    const [buttonStatus, setButtonStatus] = useState(false);
    const [passedWords, setPassedWords] = useState(0);
    const [correctlyAnswers, setCorrectlyAnswers] = useState([]);
    const [mistakes, setMistakes] = useState([]);
    const [counterRightAnswers, setCounterRightAnswers] = useState(0);
    const [multipleBonus, setMultipleBonus] = useState('x1');
    const [timeSec, setTimeSec] = useState({
        'timer': 10,
    });

    const myRef = useRef();
    const focus = useRef();
    const timerRef = useRef(null);

    useEffect(()=>{
        focus.current.focus({preventScroll : true});
        return () => clearInterval(timerRef.current);
    },[]);
    /* ПЕРЕСМОТРЕТЬ ФУНКЦИЮ ПОДСЧЕТА ОЧКОВ В ЮСЭФЕКТЕ, и функцию остановки таймера, написал в 2 вариантах в 3 разных местах */
    useEffect(()=>{
        countPoints();
        bonusScore();
        getWord(params.level, getRandomFlag(0,1));
        clearInterval(timerRef.current);
    },[passedWords]);

    useEffect(()=>{
        if(timeSec.timer <= 0){
            setPassedWords(passedWords + 1);

            let mistakesTMP = mistakes;
            mistakesTMP.push(word.word);
            setMistakes([...mistakesTMP]);

            setCounterRightAnswers(0);

            finishTime();
        }
    },[timeSec]);

    useEffect(()=>{
        if(passedWords >= 40){
            finishTime();
            handleSubmit("sprintResult");
        }
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
        navigate(route, {replace: true, state: {correctlyAnswers, mistakes, points}});
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
        setPassedWords(passedWords + 1);
        
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

    function countPoints(){
        switch(counterRightAnswers){
            case 0:
                break;
            case 1:
            case 2:
            case 3:
                setPoints(points + 10);
                break;
            case 4:
            case 5:
            case 6:
                setPoints(points + 20);
                break;
            default:
                setPoints(points + 30);
        };
    };

    let startTime = function(){
        timerRef.current =  setInterval(()=> timeSet(), 100);
        let timeSecTMP = timeSec;
        timeSecTMP.timer = 10;
        setTimeSec({...timeSecTMP});
    }

    let timeSet = function(){
        let timeSecTMP = timeSec;
        timeSecTMP.timer = (timeSecTMP.timer - 0.1).toFixed(1);
        setTimeSec({...timeSecTMP});
        console.log(timeSec.timer);
    }

    let finishTime = function(){
        clearInterval(timerRef.current); 
    }

    return(
        <div ref={focus} onKeyDown={keyTest} tabIndex={-1} className="sprintGame">
            <CircularProgressbarWithChildren className="sprintGame__progressBar" styles={buildStyles({pathColor: '#2B788B', trailColor: '#C3DCE3', rotation: 0.25})} strokeWidth='2' maxValue={10} value={timeSec.timer}>
                
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