import React,{ useState, useEffect} from "react";
import ResultGame from "../ResultGame/ResultGame"


function SprintResult() {
    const [wordLearnedList, setWordLearnedList] = useState([]);
    const [wordUnlearnedList, setWordUnlearnedList] = useState([]);

    const wordList = {
        "nameGame": "your Sprint",
        "description": "You did pretty good!",
        "learned": wordLearnedList.map(
            (item, index)=>{
                return <li key={index}>{item.word} - {item.translate}</li>
            }),
        "unLearned": wordUnlearnedList.map(
            (item, index)=>{
                return <li key={index}>{item.word} - {item.translate}</li>
            })
    }

    useEffect(()=>{

        const learned = history.state.usr.correctlyAnswers.map((item, index) =>{
            return fetch('https://tmp.myitschool.org/API/translate/?source=en&target=ru&word=' + item)
            .then((response) => response.json())
        });

        const unLearned = history.state.usr.mistakes.map((item, index) =>{
            return fetch('https://tmp.myitschool.org/API/translate/?source=en&target=ru&word=' + item)
            .then((response) => response.json())
        });

        Promise.all([...learned, ...unLearned])
        .then((result)=> {
            setWordLearnedList(result.splice(0, history.state.usr.correctlyAnswers.length));
            setWordUnlearnedList(result);
        })
    },[])

    return( 
            <ResultGame nameGame={wordList.nameGame} description={wordList.description} learned={wordList.learned} unLearned={wordList.unLearned}/>
    )
}

export default SprintResult;