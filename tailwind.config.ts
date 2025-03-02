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
      }
    },
  },
  // keyFrames: {
  //   'open-menu': {
  //     '0%': { transform: 'scaleY(0)' },
  //     '80%': { transform: 'scaleY(1.2)' },
  //     '100%': { transform: 'scaleY(1)' },
  //   },
  // },
  // animation: {
  //   'open-menu': 'open-menu 0.5s ease-in-out forwards',
  // },
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
