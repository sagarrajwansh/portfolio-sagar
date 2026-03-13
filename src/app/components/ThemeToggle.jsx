"use client";

import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <button
      onClick={toggle}
      className={`fixed top-6 right-6 z-[1000] w-12 h-12 rounded-full backdrop-blur-md border flex items-center justify-center hover:scale-110 transition-all ${
        theme === "dark"
          ? "bg-slate-800/80 border-slate-600 shadow-lg"
          : "bg-gray-800/90 border-gray-700 shadow-lg"
      }`}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
