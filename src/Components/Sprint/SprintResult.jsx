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
        "unlearned": wordUnlearnedList.map(
            (item, index)=>{
                return <li key={index}>{item.word} - {item.translate}</li>
            })
    }

    useEffect(()=>{

        const learned = history.state.usr.correctlyAnswers.map((item, index) =>{
            return fetch('http://tmp.myitschool.org/API/translate/?source=en&target=ru&word=' + item)
            .then((response) => response.json())
            .then(result =>{
                wordLearnedListTMP = wordLearnedList;
                wordLearnedListTMP.push(result);
                setWordLearnedList([wordLearnedListTMP])
            })
        });

        const unlearned = history.state.usr.mistakes.map((item, index) =>{
            return fetch('http://tmp.myitschool.org/API/translate/?source=en&target=ru&word=' + item)
            .then((response) => response.json())
        })

    },[])

    return( 
            <ResultGame nameGame={wordList.nameGame} description={wordList.description} learned={wordList.learned} unlearned={wordList.unlearned}/>
    )
}

export default SprintResult;