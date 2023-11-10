import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import React from 'react';
import StackOfBooks from "../../../public/image/stackOfBooks.svg"
import { ClockLoader } from 'react-spinners';
import "./ResultGame.sass";


function ResultGame(props){

    const override = {
        display: "block",
        margin: "0 auto",
      };

    if(props.learned.length == 0){
        return <ClockLoader color='silver' cssOverride={override}/>
    }

    return(
        <div className="result">
            <div className="container result__container">
                <div className="result__progress">
                    <div className="result__points">
                        <StackOfBooks/>
                        <div className="result__score">
                            <h3 className='heading heading_3'>{props.nameGame}</h3>
                            <p className='text text_size16'>{props.description}</p>
                            <div className="result__progress-bar-group">
                                <CircularProgressbarWithChildren className='result__progress-bar' maxValue={1110} value={props.points} styles={buildStyles({pathColor: '#2B788B', trailColor: '#C3DCE3'})} strokeWidth='3'>
                                    <p className='text text_size14 text_color_black'>retrieved</p>
                                    <h1 className='heading heading_3'>{props.points}</h1>
                                    <p className='text text_size16'>points</p>
                                </CircularProgressbarWithChildren>
                                <CircularProgressbarWithChildren className='result__progress-bar' maxValue={40} value={props.rightAnswers} strokeWidth='3' styles={buildStyles({pathColor: '#639B6D', trailColor: '#C3DCE3'})}>
                                    <p className='text text_size14 text_color_black'>40 /</p>
                                    <h1 className='heading heading_3'>{props.rightAnswers}</h1>
                                    <p className='text text_size16'>words</p>
                                </CircularProgressbarWithChildren>
                            </div>
                        </div>
                        {/* buttonGroup */}
                    </div>
                </div>              
                <div className="result__word-group">
                    <div className='result__word-learned'>
                        <p>I know</p>
                        <ul>
                            {props.learned}
                        </ul>
                    </div>
                    <div className='result__word-unlearned'>
                        <p>I don't know</p>
                        <ul>
                            {props.unlearned}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultGame;