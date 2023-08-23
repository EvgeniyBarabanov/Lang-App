import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { words } from 'popular-english-words';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {ButtonGroup} from "../Buttons/Buttons";



function SprintGame(){
    
    const [word, setWord] = useState({});

    const [timeSec, setTimeSec] = useState({
        'timer': 100
    });

    const [timer, setTimer] = useState({
        'timerId': 0
    });

    const [buttonStatus, setButtonStatus] = useState({
        disabled: false
    }/* ,[word] */);

    const [correctlyAnswers, setCorrectlyAnswers] = useState(0);

    const [mistakes, SetMistakes] = useState(0);

    const params = useParams();
   
    const popularWords = words.getMostPopular(10000);

    useEffect(()=>{
        getWord(params.level, getRandomFlag(0,1))
    },[]);

    useEffect(()=>{
        if (Object.entries(word).length != 0) {
            startTime();
        }
    },[word]);

    useEffect(()=>{
        if(timeSec.timer <= 0){
            finishTime();
        }
    },[timeSec]);

    const buttonsData = [
        {
            'text': "Right",
            'onClick' : ()=>test(true),
            'className': "button button_small filled",
            'disabled': buttonStatus.disabled
        },
        {
            'text': "Wrong",
            'onClick': ()=>test(false),
            'className': "button button_small filled filled_color_pinkDark",
            'disabled': buttonStatus.disabled
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
        setButtonStatus({'disabled':true});

        if(value === word.flag){
            setCorrectlyAnswers(correctlyAnswers +1)
        }else{
            SetMistakes(mistakes +1)
        };

        finishTime();
        getWord(params.level, getRandomFlag(0,1));
        
    }

    const navigate = useNavigate();
    const handleSubmit = function(route){
        navigate(route);
    }

    let startTime = function(){
        if(mistakes == 3){
            handleSubmit("resultGame")
        }else{
            setTimer({'timerId': setInterval(()=> timeSet(), 100)});

            setButtonStatus({'disabled':false});
        }
    }

    let timeSet = function(){
        let timeSecTMP = timeSec;
        timeSecTMP.timer = timeSecTMP.timer - 1;
        setTimeSec({...timeSecTMP});
        /* console.log(timer.timerId); */
    }

    let finishTime = function(){
        /* console.log(timer.timerId); */
        setTimer({'timerId': clearInterval(timer.timerId)}); 

        setTimeSec({'timer':100});
    }

    return(
        <div className="sprintgame">
            <div style={{ width: 500, height: 500 }}>
                <CircularProgressbarWithChildren text strokeWidth='2' value={timeSec.timer}>
                    <p>Правильных ответов:{correctlyAnswers}</p>
                    <p>Ошибок:{mistakes}</p>
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