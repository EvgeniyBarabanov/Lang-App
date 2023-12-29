import React from "react";
import ResultGame from "../ResultGame/ResultGame"

function AudioCallResult() {

    const wordList = {
        "heading": "Your Audio-Call",
        "rightAsnwers": history.state.usr.correctlyAnswers.length,
        "learned": history.state.usr.correctlyAnswers,
        "labelLearned": history.state.usr.correctlyAnswers.length + " words",
        "unlearned": history.state.usr.mistakes,
        "labelUnlearned": history.state.usr.mistakes.length + " words",
    }
console.log(history.state.usr.correctlyAnswers);
    return( 
            <ResultGame heading={wordList.heading} rightAnswers={wordList.rightAsnwers} learned={wordList.learned} labelLearned={wordList.labelLearned} unlearned={wordList.unlearned} labelUnlearned={wordList.labelUnlearned}/>
    )

}

export default AudioCallResult;