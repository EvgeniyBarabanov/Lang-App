import React, { useEffect, useState } from "react";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { useParams } from "react-router-dom";
import { words } from "popular-english-words";
import Song from "../../../public/image/song-icon.svg"
import { Button } from "../Buttons/Buttons";


function AudioCallGame(){
    
    const params = useParams();
    
    const popularWords = words.getMostPopular(10000);

    const [wordInfo, setWordInfo] = useState([])

    useEffect(()=>{
        console.log(wordInfo.length);
        if(wordInfo.length < 5){
            getWord(params.level);
        }
    },[wordInfo])

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

        let wordInfoTMP = wordInfo;
        wordInfoTMP.push((allWords[Math.floor(Math.random() * (allWords.length-1 - 0 + 1) ) + 0]))
        setWordInfo([...wordInfoTMP])
        
    }


    return(
        <div>
            <Button className='button hollow-reverse'><Song width={50} height={50}/></Button>
            <ul>{wordInfo.map((item, index)=>{
                return <li><button>{item}</button></li>
            })}</ul>
        </div>
    )
}

export default AudioCallGame;