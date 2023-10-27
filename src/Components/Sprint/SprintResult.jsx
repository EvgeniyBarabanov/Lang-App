import React,{ useState, useEffect} from "react";
import ResultGame from "../ResultGame/ResultGame"
import Song from "../../../public/image/song-icon.svg"


function SprintResult() {
    const [wordLearnedList, setWordLearnedList] = useState([]);
    const [wordUnlearnedList, setWordUnlearnedList] = useState([]);

    const wordList = {
        "nameGame": "your Sprint",
        "description": "You did pretty good!",
        "learned": wordLearnedList.map(
            (item, index)=>{
                return <li key={index}><Song/>{item.word}<span>-{item.translate}</span></li>
            }),
        "unlearned": wordUnlearnedList.map(
            (item, index)=>{
                return <li key={index}><Song/>{item.word}<span>-{item.translate}</span></li>
            })
    }

    useEffect(()=>{

        const learned = history.state.usr.correctlyAnswers.map((item, index) =>{
            return fetch('https://tmp.myitschool.org/API/translate/?source=en&target=ru&word=' + item)
            .then((response) => response.json())
        });

        const unlearned = history.state.usr.mistakes.map((item, index) =>{
            return fetch('https://tmp.myitschool.org/API/translate/?source=en&target=ru&word=' + item)
            .then((response) => response.json())
        });
        console.log(history.state.usr);
        Promise.all([...learned, ...unlearned])
        .then((result)=> {
            setWordLearnedList(result.splice(0, history.state.usr.correctlyAnswers.length));
            setWordUnlearnedList(result);
        })
    },[])

    return( 
            <ResultGame nameGame={wordList.nameGame} description={wordList.description} learned={wordList.learned} unlearned={wordList.unlearned}/>
    )
}

export default SprintResult;