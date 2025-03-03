"use client";

import { useState, useEffect } from "react";
import LeftArrowIcon from './icons/leftArrowIcon'
import RightArrowIcon from './icons/rightArrowIcon'

export default function ImageSlider({ onSlideChange }: { onSlideChange: (slideIndex: number) => void }) {
    const slides = [
        { url: "assets/donut.gif" },
        { url: "assets/coronavirus.gif" },
        { url: "assets/facelabo.gif" }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the previous slide
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        onSlideChange(newIndex);
    };

    // Function to go to the next slide
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        onSlideChange(newIndex);
    };

    // Function to go to a specific slide
    const goToSlide = (slideIndex: number): void => {
        setCurrentIndex(slideIndex);
        onSlideChange(slideIndex);
    };

    // Automatically move to the next slide every 3 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, 3000); // 3000ms = 3 seconds

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [currentIndex]); // Dependency on currentIndex to trigger updates

    return (
        <div className='max-w-[500px] h-[300px] w-full md:max-w-[600px] md:h-[500px] p-10 relative group'>
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
            ></div>
            <div
                onClick={prevSlide}
                className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <LeftArrowIcon />
            </div>
            <div
                onClick={nextSlide}
                className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <RightArrowIcon />
            </div>
            <div className="flex top-4 justify-center py-2">
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className={`cursor-pointer w-5 h-5 rounded-full m-5 ${slideIndex === currentIndex ? 'bg-red-500' : 'bg-green-800'}`}
                    ></div>
                ))}
            </div>
        </div>
    );
}
