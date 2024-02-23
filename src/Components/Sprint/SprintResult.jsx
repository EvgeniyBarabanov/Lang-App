import React,{ useState, useEffect} from "react";
import ResultGame from "../ResultGame/ResultGame";

function SprintResult() {
    const [wordLearnedList, setWordLearnedList] = useState([]);
    const [wordUnlearnedList, setWordUnlearnedList] = useState([]);

    useEffect(()=>{

        const learned = history.state.usr.correctlyAnswers.map((item)=>{
            return fetch('https://tmp.myitschool.org/API/translate/?source=en&target=ru&word=' + item)
            .then((response) => response.json())
        });

        const unlearned = history.state.usr.mistakes.map((item)=>{
            return fetch('https://tmp.myitschool.org/API/translate/?source=en&target=ru&word=' + item)
            .then((response) => response.json())
        });

        Promise.all([...learned, ...unlearned])
        .then((result)=> {
            setWordLearnedList(result.splice(0, history.state.usr.correctlyAnswers.length));
            setWordUnlearnedList(result);
        })
    },[])

    const gameInfo = {
        "name":"/sprint",
        "heading": "Your Sprint",
        "maxScoreValue": 1110,
        "scoreValue": history.state.usr.points,
        "learned": wordLearnedList,
        "labelLearned": history.state.usr.correctlyAnswers.length + " words",
        "unlearned": wordUnlearnedList,
        "labelUnlearned": history.state.usr.mistakes.length + " words",
        "maxWordsValue": history.state.usr.maxWordsValue,
        "wordsValue": history.state.usr.correctlyAnswers.length,
        "scoreBarColor": {
            pathColor: '#2B788B', 
            trailColor: '#C3DCE3',
        },
        "scoreBarCount":   <div className="progressBar"> 
                            <p className="text text_size14 text_color_black">retrieved</p>
                            <h3 className='heading heading_3'>{history.state.usr.points}</h3>    
                            <p className='text text_size16'>points</p>
                        </div>,
        "wordsBarColor": {
            pathColor: '#639B6D', 
            trailColor: '#C3DCE3',
        },             
        "wordsBarCount":   <div className="progressBar"> 
                            <p className="text text_size14 text_color_black">{history.state.usr.maxWordsValue + "/"}</p>
                            <h3 className='heading heading_3'>{history.state.usr.correctlyAnswers.length}</h3>
                            <p className='text text_size16'>words</p>
                        </div>
    }

    return( 
            <ResultGame content={gameInfo} />
    )
}

export default SprintResult;