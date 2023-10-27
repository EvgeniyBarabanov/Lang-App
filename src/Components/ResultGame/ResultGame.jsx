import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
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
            <div className="container">
                <div className="result__progress">
                    <div className="result__points">
                        <StackOfBooks/>
                        <div className="result__score">
                            <h3>{props.nameGame}</h3>
                            <p>{props.description}</p>
                            <div className="result__progress-bar-group">
                                <CircularProgressbarWithChildren className='result__progress-bar' strokeWidth='2'>

                                </CircularProgressbarWithChildren>
                                <CircularProgressbarWithChildren className='result__progress-bar' strokeWidth='2'>
 
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