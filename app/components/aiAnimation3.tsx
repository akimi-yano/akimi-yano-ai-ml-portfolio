"use client";

import React, { useEffect, useState } from "react";

const AnimatedBoxes = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-10">
      <div className="text-white text-3xl font-bold mb-6">Animated Boxes</div>
      <div className="grid grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((box) => (
          <div
            key={box}
            className={`w-40 h-40 bg-blue-500 flex items-center justify-center text-white text-lg font-semibold rounded-xl shadow-lg transition-transform duration-700 ease-in-out transform ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
          >
            Box {box}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedBoxes;
