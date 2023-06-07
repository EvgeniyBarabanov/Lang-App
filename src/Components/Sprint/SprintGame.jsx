import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { words } from 'popular-english-words';

function SprintGame(){
    
    const [wordRu, setWordRu] = useState({})

    useEffect(()=>{
        getWord(params.level)
    },[])

    /* useEffect(()=>{
        console.log(wordRu);
    }) */

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
        
        fetch('http://tmp.myitschool.org/API/translate/?source=en&target=ru&word=' + wordEngRight)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            setWordRu({...result})
        })

        const wordEngWrong = (allWords[Math.floor(Math.random() * (allWords.length-1 - 0 + 1) ) + 0])
        fetch('http://tmp.myitschool.org/API/translate/?source=en&target=ru&word=' + wordEngWrong)
        .then(response => response.json())
        .then(wrong => {
            console.log(wrong);
        })
        
    }

    return(
        <div className="sprintgame">
        {wordRu &&
            <div>
                <h1>{wordRu.word}</h1>
                <h1>{wordRu.translate}</h1>
            </div>
        }
        <button onClick={()=>getWord(params.level)}>next word</button>
        </div>
    )
}

export default SprintGame;