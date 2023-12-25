import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import React from 'react';
import { ButtonGroup } from '../Buttons/Buttons.jsx';
import StackOfBooks from "../../../public/image/stackOfBooks.svg"
import { ClockLoader } from 'react-spinners';
import "./ResultGame.sass";
import Song from "../../../public/image/song-icon.svg"
import Checkbox from "../Checkbox/Checkbox.jsx";
import Repeat from "../../../public/image/repeat.png";


function ResultGame(props){
    const override = {
        "boxShadow": "#2B788B 0px 0px 0px 10px inset"
      };

    if(props.learned.length == 0 && props.unlearned.length == 0){
        return <div className='result__clockloader'>
            <ClockLoader size={400} color='#2B788B' cssOverride={override}/>
        </div>
    }

    function voiceWord(word, event){
        let synth = window.speechSynthesis;
        let voices = synth.getVoices();
        console.log(voices[2]);
        let message = new SpeechSynthesisUtterance();
        message.text = word;
        
        synth.speak(message);
        const e = event.currentTarget;
        message.onstart = function(){
            e.classList.toggle('checkbox__active');
        }
        message.onend = function(){
            e.classList.toggle('checkbox__active');
        }
    }

    const buttonData = [
        {
            'text': "Play it again",
            'onClick': ()=>handleSubmit("sprint"),
            'logo': Repeat,
            'className': "button button_picture button_small"
        },
        {
            'text': "Go to textbook",
            'onClick': ()=>handleSubmit("textbook"),
            'className': "button button_small filled"
        }
    ];

    return(   
        <div className="result">
            <div className="container result__container">
                <div className="result__progress">
                    <div className="result__points">
                        <StackOfBooks/>
                        <div className="result__score">
                            <h3 className='heading heading_3'>{props.heading}</h3>
                            <p className='text text_size16'>You did pretty good!</p>
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
                    <ButtonGroup className='button-group' elements={buttonData}/>
                </div>              
                <div className="result__word-group">
                    <div className='result__word-learned'>
                        <h3 className='heading heading_3 result__heading-words'>I know</h3>
                        <span className='label result__label'>{props.labelLearned}</span>
                        <ul className='list-word'>
                            {props.learned.map((item, index)=>{
                                return <li className='list-word__item text text_size16' key={index}><Checkbox onClick={(event)=>{voiceWord(item.word, event)}} image=<Song className='checkbox__image'/> />{item.word}<span className='text text_size16'> - {item.translate}</span></li>
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