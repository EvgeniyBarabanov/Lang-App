import React, {useEffect, useState, useRef} from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { words } from 'popular-english-words';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { counterInfo } from "../Counter/Counter";
import {ButtonGroup} from "../Buttons/Buttons";
import StarBonusIcon from "../../../public/image/starBonusIcon.svg";
import "./Sprint.sass";



function SprintGame(){
    
    const [word, setWord] = useState({});

    const [points, setPoints] = useState(0);

    const [buttonStatus, setButtonStatus] = useState(false)

    const [passedWords, setPassedWords] = useState([]);

    const [timeSec, setTimeSec] = useState({
        'timer': 60,
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

    const [multipleBonus, setMultipleBonus] = useState('x1')

    useEffect(()=>{
        startTime();
    },[]);

    useEffect(()=>{
        countPoints();
        bonusScore();
        getWord(params.level, getRandomFlag(0,1));
    },[correctlyAnswers, mistakes]);

    useEffect(()=>{
        if(timeSec.timer <= 0 || passedWords.length == 40){
            finishTime();
        }
    },[timeSec]);

    useEffect(()=>{
        setButtonStatus(false)
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
            })
        }else{
            fetch('https://tmp.myitschool.org/API/translate/?source=en&target=ru&word=' + wordEngWrong)
            .then(response => response.json())
            .then(result => {
                result.flag = false;
                result.word = wordEngRight;
                setWord({...result});
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

        let passedWordsTMP = passedWords;
        passedWordsTMP.push(word);
        setPassedWords([...passedWordsTMP])
        
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
        if(counterRightAnswers > 0 && counterRightAnswers <= 3){
            setPoints(points + 10);
        }else if(counterRightAnswers > 3 && counterRightAnswers <= 7){
            setPoints(points + 20);
        }else if(counterRightAnswers > 7){
            setPoints(points + 30);
        }
    }

    const navigate = useNavigate();
    const handleSubmit = function(route){
        navigate(route, {replace: true, state: {correctlyAnswers, mistakes}});
    }

    let startTime = function(){
            setTimer({'timerId': setInterval(()=> timeSet(), 100)});
    }

    let timeSet = function(){
        let timeSecTMP = timeSec;
        timeSecTMP.timer = (timeSecTMP.timer - 0.1).toFixed(1);
        setTimeSec({...timeSecTMP});
    }

    let finishTime = function(){
        setTimer({'timerId': clearInterval(timer.timerId)}); 
        handleSubmit("sprintResult");
    }

    return(
        <div className="sprintGame">
            <CircularProgressbarWithChildren className="sprintGame__progressBar" strokeWidth='2' maxValue={60} value={timeSec.timer}>
                
                <div className="counterGroup">{counterInfo(counterData)}</div>
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
        </div>
    )
}

export default SprintGame;