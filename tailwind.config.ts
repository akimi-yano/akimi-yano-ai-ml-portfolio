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
      }
      // animation: {
      //   customAnim: "anim 250s infinite",
      // },
      // keyframes: {
      //   anim: {
      //     "0%, 12%, 24%, 36%, 52%, 62%, 74%, 88%, 100%": {
      //       transformOrigin: "600% 50%",
      //       transform: "rotate(0)",
      //     },
      //     "2%, 20%, 32%, 44%, 58%, 66%, 78%, 86%, 96%": {
      //       transformOrigin: "-600% 150%",
      //       transform: "rotate(360deg)",
      //     },
      //     "4%, 18%, 30%, 42%, 56%, 64%, 80%, 94%": {
      //       transformOrigin: "-500% 100%",
      //       transform: "rotate(-50deg)",
      //     },
      //     "6%, 14%, 34%, 46%, 48%, 60%, 76%, 90%": {
      //       transformOrigin: "700% -50%",
      //       transform: "rotate(-60deg)",
      //     },
      //     "8%, 16%, 26%, 38%, 50%, 70%, 82%, 92%": {
      //       transformOrigin: "500% -100%",
      //       transform: "rotate(50deg)",
      //     },
      //     "10%, 22%, 28%, 40%, 54%, 68%, 72%, 84%, 98%": {
      //       transformOrigin: "500% 10%",
      //       transform: "rotate(-360deg) scale(3.0)",
      //     },
      //   },
      // },
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
