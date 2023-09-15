import React from "react";
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

function ResultGame(props){
    return(
        <div className="result">
            <div className="container">
                <div className="result__info">
                    <img src={props.logo}/>
                    <div className="result__score">
                        <h3>{props.nameGame}</h3>
                        <p>{props.description}</p>
                        <div className="result__">
                        </div>
                    </div>
                </div>
                <div className="result__word">
                <ul>
                    <li>
                        <p>I know</p>
                        <ul>
                            {history.state.usr.correctlyAnswers.map(
                                (item, index)=>{
                                    return(
                                        fetch('http://tmp.myitschool.org/API/translate/?source=en&target=ru&word=' + item)
                                        .then(response => response.json())
                                        .then(result =>{
                                            <li>{result.word} {result.translate}</li> /* attension on this line code */
                                        })
                                    )
                                    
                                }
                            )}
                        </ul>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default ResultGame;