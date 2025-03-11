import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        pressStart: ["var(--font-pressStart2P)"],
        londrinaShadow: ["var(--font-londrinaShadow)"],
        delaGothic: ["var(--font-delaGothicOne)"],
        dotGothic16: ["var(--font-dotGothic16)"],
      },
      inset: {
        '17': '68px',
        '26': '104px'
      },
      animation: {
        equalize: "equalize 4s infinite linear",
      },
      keyframes: {
        equalize: {
          "0%, 36%, 92%": { height: "60px" },
          "4%, 88%": { height: "50px" },
          "8%, 84%": { height: "40px" },
          "12%": { height: "30px" },
          "16%, 20%": { height: "20px" },
          "24%, 32%, 44%": { height: "40px" },
          "28%, 56%": { height: "10px" },
          "40%": { height: "20px" },
          "48%": { height: "70px" },
          "52%, 60%": { height: "30px" },
          "64%": { height: "50px" },
          "68%, 80%": { height: "60px" },
          "72%": { height: "70px" },
          "76%": { height: "80px" },
          "96%": { height: "70px" },
          "100%": { height: "80px" },
        },
      },
    },
  },
  plugins: [],
  safelist: [
    "px-4",
    "py-2",
    "rounded-lg",
    "focus:outline-none",
    "transition",
    "duration-300",
    "ease-in-out",
    "bg-slate-600",
    "text-white",
    "border",
    "border-slate-600",
    "text-slate-600",
    "bg-transparent",
    "flex",
    "items-center",
    "mr-2",
    "font-semibold",
    "hover:bg-slate-900",
    "mt-6",
    "hover:bg-slate-600",
    "hover:text-white",
    "disabled:bg-gray-300",
    "pointer-events-none",
    "text-gray-500",
  ],
} satisfies Config;
