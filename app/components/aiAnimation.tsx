"use client"; // Ensures animation works in Next.js App Router

import { useEffect, useState } from "react";

export default function AIAnimation() {
  const [glow, setGlow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlow((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      {/* Neural Network SVG */}
      <div className="relative">
        <svg
          viewBox="0 0 500 300"
          className={`w-72 h-48 transition-all duration-500 ${
            glow ? "opacity-100 scale-105" : "opacity-80 scale-95"
          }`}
        >
          {/* Background Lines */}
          <g stroke="rgba(0, 162, 255, 0.5)" strokeWidth="2">
            <line x1="50" y1="50" x2="250" y2="150" />
            <line x1="250" y1="150" x2="450" y2="50" />
            <line x1="250" y1="150" x2="250" y2="250" />
            <line x1="50" y1="250" x2="250" y2="150" />
            <line x1="450" y1="250" x2="250" y2="150" />
          </g>

          {/* Glowing Nodes */}
          <g fill="rgba(0, 162, 255, 1)">
            <circle cx="50" cy="50" r="10" className="animate-pulse" />
            <circle cx="450" cy="50" r="10" className="animate-ping" />
            <circle cx="250" cy="150" r="14" className="animate-glow" />
            <circle cx="50" cy="250" r="10" className="animate-ping" />
            <circle cx="450" cy="250" r="10" className="animate-pulse" />
          </g>
        </svg>
      </div>

      {/* AI Processing Text Animation */}
      <h2 className="mt-8 text-xl font-semibold tracking-wide animate-fade">
        Training Neural Network...
      </h2>
    </div>
  );
}
