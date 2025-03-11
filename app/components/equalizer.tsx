"use client";

export default function Equalizer() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      className="w-[100px] h-[100px] rotate-180"
    >
      <g>
        <title>Audio Equalizer</title>
        <rect className="bar animate-equalize fill-pink-500 w-[18px]" x="0" y="15" />
        <rect
          className="bar animate-equalize fill-pink-500 w-[18px]"
          x="25"
          y="15"
          style={{ animationDelay: "-1.9s" }}
        />
        <rect
          className="bar animate-equalize fill-pink-500 w-[18px]"
          x="50"
          y="15"
          style={{ animationDelay: "-2s" }}
        />
        <rect
          className="bar animate-equalize fill-pink-500 w-[18px]"
          x="75"
          y="15"
          style={{ animationDelay: "-2.3s" }}
        />
        <rect
          className="bar animate-equalize fill-pink-500 w-[18px]"
          x="100"
          y="15"
          style={{ animationDelay: "-2.1s" }}
        />
      </g>
    </svg>
  );
}
