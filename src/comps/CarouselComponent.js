import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComponent(className, source) {
    return (
        <div>
            <Carousel className={className}>
                {source.map((url, idx) => {
                    return(
                        <div key={idx}>
                            <img src={url} alt=''></img>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    );
}