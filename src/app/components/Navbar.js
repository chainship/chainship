"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ClientLayout";

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();

  const handleToggle = () => {
    console.log("Toggle clicked, current isDark:", isDark);
    toggleTheme();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md dark:border-white/5 dark:bg-black/80">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tight text-black dark:text-white">CHAINSHIP</div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-black/60 dark:text-white/60">
          <a href="#services" className="hover:text-black dark:hover:text-white transition-colors">Services</a>
          <a href="#work" className="hover:text-black dark:hover:text-white transition-colors">Work</a>
          <a href="#about" className="hover:text-black dark:hover:text-white transition-colors">About</a>
          <a href="#contact" className="px-6 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full hover:opacity-90 transition-opacity">Contact</a>
          <button
            onClick={handleToggle}
            className="p-2 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-black dark:text-white"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
