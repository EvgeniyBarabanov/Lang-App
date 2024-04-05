import React, { useCallback } from "react";
import Word from "../Word/Word";
import useEmblaCarousel from "embla-carousel-react";
import { useOutletContext } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import "./EmblaCarousel.sass";

function EmblaCarousel(props) {
    const context = useOutletContext();

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
        Autoplay(),
    ]);
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <div className="embla">
            <div
                className="embla__viewport"
                ref={emblaRef}>
                <div className="embla__container">
                    {context[0].map((item, index) => {
                        return (
                            <Word
                                word={item}
                                key={index}
                            />
                        );
                    })}
                </div>
                <button
                    className="embla__prev"
                    onClick={scrollPrev}>
                    Prev
                </button>
                <button
                    className="embla__next"
                    onClick={scrollNext}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default EmblaCarousel;