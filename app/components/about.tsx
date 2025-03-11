"use client";
import ImageSlider from './imageSlider';
import { useState } from 'react';

export default function About() {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    // Callback function that gets the updated slideIndex
    const handleSlideChange = (slideIndex: number) => {
        setCurrentSlideIndex(slideIndex);
    };

    return (
        <div id='about' className="text-black bg-white">
            <div className='py-10 md:py-16'>
                <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2">
                    <div>
                        <h2 className={`font-pressStart text-2xl px-10 py-5 text-black break-words`}>About Me</h2>
                        <p className={`font-pressStart text-base md:text-xl px-10 py-5 text-black break-words`}>AI / ML Engineer based in Silicon Valley. I love to code and experiment.</p>
                        <p className="font-pressStart text-base md:text-xl px-10 py-5 text-black break-words">
                            I am passionate about driving
                            <span className={currentSlideIndex === 0 ? "text-blue-500" : "text-black"}> Computer Vision</span>,
                            <span className={currentSlideIndex === 1 ? "text-red-500" : "text-black"}> Generative AI</span>, and
                            <span className={currentSlideIndex === 2 ? "text-green-500" : "text-black"}> Natural Language Processing </span>
                            project ideas into reality.
                        </p>
                        <p className={`font-pressStart text-base md:text-xl px-10 py-5 text-black break-words`}>In my spare time, I enjoy learning new foreign languages and climbing rocks.</p>
                    </div>
                    <div className='w-full'>
                        <ImageSlider onSlideChange={handleSlideChange} />
                    </div>
                </div>
            </div>
        </div>
    );
}
