import React,{ useState, Suspence, useEffect} from "react";
import ResultGame from "../ResultGame/ResultGame"
import Loading from "../Loading/Loading"
import StackOfBooks from "../../../public/image/stackOfBooks.svg"


function SprintResult() {
    
    const [wordList, setWordList] = useState([])

    const learnedList = {
        "logo": StackOfBooks,
        "nameGame": "your Sprint",
        "description": "You did pretty good!",
        "learned": wordList.map(
            (item, index)=>{
                return <li>{item.word} - {item.translate}</li>
            })
    }

    useEffect(()=>{
        const test = history.state.usr.correctlyAnswers;

        const arrtest = test.map((item, index) =>{
            return fetch('http://tmp.myitschool.org/API/translate/?source=en&target=ru&word=' + item)
            .then((response) => response.json())
        })

        Promise.all(arrtest)
        .then((responses)=>{
            setWordList(responses)
        })
    })

    return(
        <Suspence fallback={<Loading />}>
            <ResultGame logo={learnedList.logo} nameGame={learnedList.nameGame} description={learnedList.description} learned={learnedList.learned}/>
        </Suspence>
    )
}

export default SprintResult;