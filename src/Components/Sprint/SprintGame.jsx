import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { words } from 'popular-english-words';

function SprintGame(){
    
    const [word, setWord] = useState({})

    useEffect(()=>{
        getWord(params.level, getRandomFlag(0,1))
    },[])

    const params = useParams()
    const popularWords = words.getMostPopular(10000)
    
    const getWord = function(lvl, positive){

        const groupWords = {
            'A1':[0, 1666],
            'A2':[1667, 3332],
            'B1':[3333, 4998],
            'B2':[4999, 6664],
            'C1':[6665, 8330],
            'C2':[8331, 9999],
        }

        const allWords = popularWords.slice(groupWords[lvl][0], groupWords[lvl][1])
        const wordEngRight = (allWords[Math.floor(Math.random() * (allWords.length-1 - 0 + 1) ) + 0])
        const wordEngWrong = (allWords[Math.floor(Math.random() * (allWords.length-1 - 0 + 1) ) + 0])

        if (positive){
            fetch('http://tmp.myitschool.org/API/translate/?source=en&target=ru&word=' + wordEngRight)
            .then(response => response.json())
            .then(result => {
                result.flag = true;
                setWord({...result})
            })
        }else{
            fetch('http://tmp.myitschool.org/API/translate/?source=en&target=ru&word=' + wordEngWrong)
            .then(response => response.json())
            .then(result => {
                result.flag = false;
                result.word = wordEngRight
                setWord({...result})
            })
        }
    } 
    
    const getRandomFlag = function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        if (Math.floor(Math.random() * (max - min + 1)) + min == 0){
            return true
        }else{
            return false
        }
    }

    const test = function(value){
        if(value === word.flag){
            console.log('труе');
        }else{
            console.log('фалсе');
        }
        getWord(params.level, getRandomFlag(0,1))
    }

    return(
        <div className="sprintgame">
            {word &&
                <div>
                    <h1>{word.word}</h1>
                    <h1>{word.translate}</h1>
                </div>
            }
            <button onClick={()=>test(true)}>right</button>
            <button onClick={()=>test(false)}>wrong</button>
        </div>
    )
}

export default SprintGame;