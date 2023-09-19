import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import React from 'react';

function ResultGame(props){
    return(
        <div className="result">
            <div className="container">
                <div className="result__progress">
                    <img src={props.logo}/>
                    {console.log(props.logo)}
                    <div className="result__score">
                        <h3>{props.nameGame}</h3>
                        <p>{props.description}</p>
                        <div className="result__progressBar">
                        {/* {props.elements.map(
                            (item, index) =>{
                            return <CircularProgressbarWithChildren ></CircularProgressbarWithChildren>
                        })} */}
                        </div>
                        {props.content}
                    </div>
                </div>
                <div className="result__word">
                <p>I know</p>
                <ul>
                    {props.learned}
                </ul>
                <p>I don't know</p>
                {/* <ul>
                    {props.unlearned.map(
                        (item, index)=>{
                            return <li></li>
                        }
                    )}
                </ul> */}
                </div>
            </div>
        </div>
    )
}

export default ResultGame;