import React, {useEffect, useState} from "react";
import Word from "../Word/Word";

import { useOutletContext } from "react-router-dom";

import "./Carousel.sass";

function Carousel(props) {
    const context = useOutletContext();
    const [slideNumber, setSlideNumber] = useState(0);
    const [slideWord, setSlideWord] = useState([])

    const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
        arr.slice(i * size, i * size + size)
    );

    useEffect(()=>{
        console.log('123');
    },[])

    useEffect(()=>{
        let requests = chunk(context[0], 3)[slideNumber].map((item) => {
                return fetch("https://tmp.myitschool.org/API/translate/?source=en&target=ru&word=" +
                item)
                    .then((response) => response.json())
        })
        
        Promise.all(requests)
            .then(responses =>{
                setSlideWord(responses)
            })

    },[slideNumber])

    const changeSlide = function(sign){
        if(sign === 'prevSlide' && slideNumber === 0){
            setSlideNumber( chunk(context[0], 3).length - 1);
        }else if(sign === 'prevSlide' && slideNumber >= 1){
            setSlideNumber( slideNumber - 1)
        }else if(sign === 'nextSlide' && slideNumber === chunk(context[0], 3).length - 1){
            setSlideNumber(0);
        }else{
            setSlideNumber( slideNumber + 1);
        }
    }
    console.log(slideWord);
    return (
        <div className="carousel">
            <div>
                <div className="carousel__container">
                    {slideWord.map((item, index) => {
                        console.log(item);
                        return (
                            <Word
                                word={item.word}
                                translate={item.translate}
                                key={index}
                            />
                        );
                    })}
                </div>
                <button
                    onClick={()=> changeSlide('prevSlide')}>
                    Prev
                </button>
                <button
                    onClick={()=> changeSlide('nextSlide')}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default Carousel;
