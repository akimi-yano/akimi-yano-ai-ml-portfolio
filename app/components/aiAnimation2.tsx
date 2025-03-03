"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AIAnimation2() {
  const [pulsingNode, setPulsingNode] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulsingNode((prev) => (prev + 1) % 5);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white overflow-hidden">
      {/* Futuristic Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Neural Network SVG */}
      <motion.svg
        viewBox="0 0 500 300"
        className="w-96 h-56"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: [0.95, 1.05, 1] }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        {/* Connecting Lines */}
        <g stroke="rgba(0, 255, 200, 0.6)" strokeWidth="2">
          <motion.line x1="100" y1="50" x2="250" y2="150" animate={{ opacity: [0, 1] }} transition={{ delay: 0.2 }} />
          <motion.line x1="250" y1="150" x2="400" y2="50" animate={{ opacity: [0, 1] }} transition={{ delay: 0.4 }} />
          <motion.line x1="250" y1="150" x2="250" y2="250" animate={{ opacity: [0, 1] }} transition={{ delay: 0.6 }} />
          <motion.line x1="100" y1="250" x2="250" y2="150" animate={{ opacity: [0, 1] }} transition={{ delay: 0.8 }} />
          <motion.line x1="400" y1="250" x2="250" y2="150" animate={{ opacity: [0, 1] }} transition={{ delay: 1 }} />
        </g>

        {/* Nodes with Pulsing Animation */}
        {[{ x: 100, y: 50 }, { x: 400, y: 50 }, { x: 250, y: 150 }, { x: 100, y: 250 }, { x: 400, y: 250 }].map(
          (node, index) => (
            <motion.circle
              key={index}
              cx={node.x}
              cy={node.y}
              r={index === pulsingNode ? 14 : 10}
              fill={index === pulsingNode ? "rgba(0, 255, 200, 1)" : "rgba(0, 255, 200, 0.6)"}
              animate={{ scale: index === pulsingNode ? [1, 1.3, 1] : 1 }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            />
          )
        )}
      </motion.svg>

      {/* AI Processing Text Animation */}
      <motion.h2
        className="mt-8 text-xl font-semibold tracking-wide text-green-300"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Processing Data...
      </motion.h2>

      {/* Scanning Effect Overlay */}
      <div className="absolute top-0 left-0 w-full h-full">
        <motion.div
          className="absolute w-full h-1 bg-green-400 opacity-50"
          animate={{ y: ["-100%", "100%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
}
