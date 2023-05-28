import React from "react";
import { useParams } from "react-router-dom";
import { words } from 'popular-english-words';

function SprintGame(){
    const params = useParams()
    
    const test = function(lvl){
        const popularWords = words.getMostPopular(10000)
        const groupWords = {
            'A1':[0, 1666],
            'A2':[1667, 3332],
            'B1':[3333, 4998],
            'B2':[4999, 6664],
            'C1':[6665, 8330],
            'C2':[8331, 9999],
        }
        
        const allWords = popularWords.slice(groupWords[lvl][0], groupWords[lvl][1])
        /* const allWords = ["яблоко", "банан", "груша"] */
        return allWords[Math.floor(Math.random() * (allWords.length-1 - 0 + 1) ) + 0]
    }

    return(
        <div className="sprintgame">
            <h1>{test(params.level)}</h1>
        </div>
    )
}

export default SprintGame;