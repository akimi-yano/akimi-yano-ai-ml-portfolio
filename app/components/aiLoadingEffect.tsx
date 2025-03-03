"use client"; // Ensures animation works in Next.js App Router
import Image from 'next/image'
import { useState, useEffect } from "react";

export default function AILoadingEffect() {
    const [dots, setDots] = useState([".", "..", "..."]);

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prevDots) => prevDots.map((dot) => dot.split("").reverse().join("")));
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
            <div className="relative flex items-center justify-center">
                <div className="absolute animate-pulse w-32 h-32 rounded-full bg-blue-500 blur-xl"></div>
                <div className="absolute animate-ping w-28 h-28 rounded-full bg-blue-400 opacity-75"></div>
                <div className="w-24 h-24 rounded-full bg-blue-300 flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold"><Image className='rounded-full items-center m-auto' width={180} height={180} src={'assets/profile_img.jpg'} alt="Profile Image" />
                    </span>
                </div>
            </div>

            {/* Text Animation
      <h2 className="mt-8 text-xl font-semibold tracking-wide">
        AI Model Training{dots[0]}
      </h2> */}
        </div>
    );
}
