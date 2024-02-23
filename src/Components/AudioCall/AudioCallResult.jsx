import React from "react";
import ResultGame from "../ResultGame/ResultGame";
import Heart from "../../../public/image/heart-icon.svg";

function AudioCallResult() {

    const gameInfo = {
        "name":"/audioCall",
        "heading": "Your Audio-Call",
        "maxScoreValue": 5,
        "scoreValue": history.state.usr.lives,
        "learned": history.state.usr.correctlyAnswers,
        "labelLearned": history.state.usr.correctlyAnswers.length + " words",
        "unlearned": history.state.usr.mistakes,
        "labelUnlearned": history.state.usr.mistakes.length + " words",
        "maxWordsValue": history.state.usr.maxWordsValue,
        "wordsValue": history.state.usr.correctlyAnswers.length,
        "scoreBarColor": {
            pathColor: '#945069', 
            trailColor: '#C3DCE3',
        },
        "scoreBarCount":<div className="progressBar"> 
                            <p className="text text_size14 text_color_black">remains</p>
                            <div className="progressBar__img-wrapper">
                                <Heart className="heartFill heartFill_color-red"/>
                                <h3 className='heading heading_3'>{history.state.usr.lives}</h3>
                            </div>    
                            <p className='text text_size16'>lives</p>
                        </div>,
        "wordsBarColor": {
            pathColor: '#639B6D', 
            trailColor: '#C3DCE3',
        },             
        "wordsBarCount":<div className="progressBar"> 
                            <p className="text text_size14 text_color_black">{history.state.usr.maxWordsValue + "/"}</p>
                            <h3 className='heading heading_3'>{history.state.usr.correctlyAnswers.length}</h3>
                            <p className='text text_size16'>words</p>
                        </div>
    }
    
    return( 
            <ResultGame content={gameInfo} />
    )

}

export default AudioCallResult;