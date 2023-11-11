import React,{ useState, useEffect} from "react";
import ResultGame from "../ResultGame/ResultGame"
import { ButtonGroup } from "../Buttons/Buttons";
import Repeat from "../../../public/image/repeat.svg";

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
        console.log(history.state.usr);
        Promise.all([...learned, ...unlearned])
        .then((result)=> {
            setWordLearnedList(result.splice(0, history.state.usr.correctlyAnswers.length));
            setWordUnlearnedList(result);
        })
    },[])

    const buttonData = [
        {
            'text': "Play it again",
            'onClick': ()=>handleSubmit("sprint"),
            'logo': Repeat,
            'className': "button button_small"
        },
        {
            'text': "Go to textbook",
            'onClick': ()=>handleSubmit("textbook"),
            'className': "button button_small filled"
        }
    ];

    const wordList = {
        "heading": "Your Sprint",
        "description": "You did pretty good!",
        "rightAsnwers": history.state.usr.correctlyAnswers.length,
        "points": history.state.usr.points,
        "content": <ButtonGroup className="buttonGroup" elements={buttonData}></ButtonGroup>,
        "learned": wordLearnedList,
        "labelLearned": history.state.usr.correctlyAnswers.length + " words",
        "unlearned": wordUnlearnedList,
        "labelUnlearned": history.state.usr.mistakes.length + " words",
    }

    return( 
            <ResultGame heading={wordList.heading} description={wordList.description} points={wordList.points} content={wordList.content} rightAnswers={wordList.rightAsnwers} learned={wordList.learned} labelLearned={wordList.labelLearned} unlearned={wordList.unlearned} labelUnlearned={wordList.labelUnlearned}/>
    )
}

export default SprintResult;