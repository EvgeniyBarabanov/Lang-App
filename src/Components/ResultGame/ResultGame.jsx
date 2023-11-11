import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import React, {useRef} from 'react';
import StackOfBooks from "../../../public/image/stackOfBooks.svg"
import { ClockLoader } from 'react-spinners';
import "./ResultGame.sass";
import Song from "../../../public/image/song-icon.svg"
import Checkbox from "../Checkbox/Checkbox.jsx";


function ResultGame(props){

    const toogleRef = useRef();

    const override = {
        display: "block",
        margin: "0 auto",
      };

    if(props.learned.length == 0 && props.unlearned.length == 0){
        return <ClockLoader color='silver' cssOverride={override}/>
    }

    function voiceWord(word, event){
        let synth = window.speechSynthesis;
        let message = new SpeechSynthesisUtterance();
        message.onstart = function(){
            /* toogleRef.current.classList.toggle('checkbox__active');
            console.log(toogleRef.current); */
        }
        message.onend = function(){
            /* toogleRef.current.classList.toggle('checkbox__active'); */
        }
        message.text = word;
        console.log(event.target);
        synth.speak(message);
    }

    return(   

        <div className="result">
            <div className="container result__container">
                <div className="result__progress">
                    <div className="result__points">
                        <StackOfBooks/>
                        <div className="result__score">
                            <h3 className='heading heading_3'>{props.heading}</h3>
                            <p className='text text_size16'>{props.description}</p>
                            <div className="result__progress-bar-group">
                                <CircularProgressbarWithChildren className='result__progress-bar' maxValue={1110} value={props.points} styles={buildStyles({pathColor: '#2B788B', trailColor: '#C3DCE3'})} strokeWidth='3'>
                                    <p className='text text_size14 text_color_black'>retrieved</p>
                                    <h3 className='heading heading_3'>{props.points}</h3>
                                    <p className='text text_size16'>points</p>
                                </CircularProgressbarWithChildren>
                                <CircularProgressbarWithChildren className='result__progress-bar' maxValue={40} value={props.rightAnswers} strokeWidth='3' styles={buildStyles({pathColor: '#639B6D', trailColor: '#C3DCE3'})}>
                                    <p className='text text_size14 text_color_black'>40 /</p>
                                    <h3 className='heading heading_3'>{props.rightAnswers}</h3>
                                    <p className='text text_size16'>words</p>
                                </CircularProgressbarWithChildren>
                            </div>
                        </div>
                    </div>
                    {props.content}
                </div>              
                <div className="result__word-group">
                    <div className='result__word-learned'>
                        <h3 className='heading heading_3 result__heading-words'>I know</h3>
                        <span className='label result__label'>{props.labelLearned}</span>
                        <ul className='list-word'>
                            {props.learned.map((item, index)=>{
                                return <li className='list-word__item text text_size16' key={index}><Checkbox onClick={(event)=>{voiceWord(item.word, event)}} image=<Song/> />{item.word}<span className='text text_size16'> - {item.translate}</span></li>
                            })}
                        </ul>
                    </div>
                    <div className='result__word-unlearned'>
                        <h3 className='heading heading_3 result__label'>I don't know</h3>
                        <span className='label result__label'>{props.labelUnlearned}</span>
                        <ul className='list-word'>
                            {props.unlearned.map((item, index)=>{
                                return <li className='list-word__item text text_size16' key={index}><Checkbox onClick={(event)=>{voiceWord(item.word, event)}} image=<Song/> />{item.word}<span className='text text_size16'> - {item.translate}</span></li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultGame;