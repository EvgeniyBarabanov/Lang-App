import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { words } from 'popular-english-words';

function SprintGame(){
    
    const [wordRu, setWordRu] = useState({})

    useEffect(()=>{
        getWord(params.level)
        
    },[])

    const params = useParams()
    const popularWords = words.getMostPopular(10000)
    
    const getWord = function(lvl){

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

        Promise.all([
            fetch('http://tmp.myitschool.org/API/translate/?source=en&target=ru&word=' + wordEngWrong)
            .then(response => response.json())
            .then(wrong => {
                return wrong
            }),
            fetch('http://tmp.myitschool.org/API/translate/?source=en&target=ru&word=' + wordEngRight)
            .then(response => response.json())
            .then(result => {
                return result
            })
        ]).then(values => {
            values[1].falseTranslate = values[0].translate
            setWordRu({...values[1]})

        })

    } 
    
    const getRandomIntInclusive = function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    return(
        <div className="sprintgame">
        {wordRu &&
            <div>
                <h1>{wordRu.word}</h1>
                <h1>{Object.values(wordRu)[getRandomIntInclusive(1,2)]}</h1>
            </div>
        }
        <button onClick={()=>getWord(params.level)}>right</button>
        <button onClick={()=>getWord(params.level)}>wrong</button>
        </div>
    )
}

export default SprintGame;