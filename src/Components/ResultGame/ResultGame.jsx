import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import React from 'react';
import StackOfBooks from "../../../public/image/stackOfBooks.svg"
import { ClockLoader } from 'react-spinners';


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
                    <StackOfBooks/>
                    <div className="result__score">
                        <h3>{props.nameGame}</h3>
                        <p>{props.description}</p>
                        <div className="result__progressBar">
                        </div>
                        {props.content}
                    </div>
                </div>
                <div className="result__learnedWord">
                    <p>I know</p>
                    <ul>
                        {props.learned}
                    </ul>
                </div>
                <div className="result__unlearnedWord">
                    <p>I don't know</p>
                    <ul>
                        {props.unlearned}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ResultGame;