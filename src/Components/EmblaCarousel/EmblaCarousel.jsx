import React, { useEffect } from "react";
import Word from "../Word/Word";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./EmblaCarousel.sass";

function EmblaCarousel(props) {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

    return (
        <div
            className="embla"
            ref={emblaRef}>
            <div className="embla__container">
                <Word className="embla__slide"> Slide 1</Word>
                <Word className="embla__slide"> Slide 2</Word>
                <Word className="embla__slide"> Slide 3</Word>
            </div>
        </div>
    );
}

export default EmblaCarousel;
