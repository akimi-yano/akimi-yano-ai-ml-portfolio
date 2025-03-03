"use client";

import React, { useEffect, useState } from "react";

const SpriteAnimator = () => {
    // const [frame, setFrame] = useState(0);
    // const totalFrames = 4;
    // const frameWidth = 1111; // Adjust based on sprite frame width

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setFrame((prevFrame) => (prevFrame + 1) % totalFrames);
    //     }, 200); // Adjust speed of animation

    //     return () => clearInterval(interval);
    // }, []);

    return (
        <div className="overflow-hidden relative">
            <div
                className="absolute h-full bg-cover"
                style={{
                    backgroundImage: "url('assets/coin.png')",
                }}
            />
        </div>
    );
};

export default SpriteAnimator;
