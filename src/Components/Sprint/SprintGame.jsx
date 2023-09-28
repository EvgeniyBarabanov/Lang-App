import React, {useEffect, useState, useRef} from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { words } from 'popular-english-words';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {ButtonGroup} from "../Buttons/Buttons";
import StarBonusIcon from "../../../public/image/StarBonusIcon.svg";
import "./Sprint.sass";



function SprintGame(){
    
    const [word, setWord] = useState({});

    const [buttonStatus, setButtonStatus] = useState(false)

    const [passedWords, setPassedWords] = useState([]);

    const [timeSec, setTimeSec] = useState({
        'timer': 5
    });

    const [timer, setTimer] = useState({
        'timerId': 0
    });

    const [correctlyAnswers, setCorrectlyAnswers] = useState([]);

    const [mistakes, setMistakes] = useState([]);

    const [counterRightAnswers, setCounterRightAnswers] = useState(0);

    const params = useParams();
   
    const popularWords = words.getMostPopular(10000);

    const myRef = useRef();

    const multipleBonus = useRef();

    useEffect(()=>{
        startTime();
    },[]);

    useEffect(()=>{
        getWord(params.level, getRandomFlag(0,1))
    },[correctlyAnswers, mistakes]);

    useEffect(()=>{
        if(timeSec.timer <= 0){
            finishTime();
        }
    },[timeSec]);

    useEffect(()=>{
        setButtonStatus(false)
    },[word])

    const buttonsData = [
        {
            'text': "Right",
            'onClick' : ()=>test(true),
            'className': "button button_small filled",
            'disabled' : buttonStatus
        },
        {
            'text': "Wrong",
            'onClick': ()=>test(false),
            'className': "button button_small filled filled_color_pinkDark",
            'disabled' : buttonStatus
        }
    ];

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
            fetch('http://tmp.myitschool.org/API/translate/?source=en&target=ru&word=' + wordEngRight)
            .then(response => response.json())
            .then(result => {
                result.flag = true;
                setWord({...result});
            })
        }else{
            fetch('http://tmp.myitschool.org/API/translate/?source=en&target=ru&word=' + wordEngWrong)
            .then(response => response.json())
            .then(result => {
                result.flag = false;
                result.word = wordEngRight;
                setWord({...result});
            })
        }

        if(counterRightAnswers > 2){
            myRef.current.children[1].setAttribute('class', 'starFill');
            multipleBonus.current.innerHTML = 'x2';
        }else if(counterRightAnswers >= 6){
            myRef.current.children[2].setAttribute('class', 'starFill');
            multipleBonus.current.innerHTML = 'x3';
        }else{
            myRef.current.children[1].removeAttribute('class');
            myRef.current.children[2].removeAttribute('class');
            multipleBonus.current.innerHTML = 'x1';
        }
    }; 
    
    const getRandomFlag = function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        if (Math.floor(Math.random() * (max - min + 1)) + min == 0){
            return true
        }else{
            return false
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
        handleSubmit("sprintResult")
    }

    return(
        <div className="sprintgame">
            <div style={{ width: 500, height: 500 }}>
                <CircularProgressbarWithChildren strokeWidth='2' maxValue={60} value={timeSec.timer}>
                    <p className="heading heading_2" ref={multipleBonus}>х1</p>
                    <p className="text text_size16">multipler</p>
                    <p>{timeSec.timer}</p>
                    <div ref={myRef} className="stars">
                        <StarBonusIcon className="starFill" />
                        <StarBonusIcon  />
                        <StarBonusIcon  />
                        
                    </div>
                    <div>
                        <h2 className="heading heading_2">{word.word}</h2>
                        <h2 className="heading heading_2 heading_color_cyanDark">{word.translate}</h2>
                    </div>
                    <ButtonGroup className="buttonGroup" elements={buttonsData}></ButtonGroup>
                </CircularProgressbarWithChildren>;
            </div>
        </div>
    )
}

export default SprintGame;