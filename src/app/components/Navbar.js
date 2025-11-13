"use client";

import { Moon, Sun, Menu, X, Palette } from "lucide-react";
import { useTheme } from "./ClientLayout";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const colorSchemes = [
  { name: 'Fuchsia', value: '217 70 239' },
  { name: 'Lime', value: '132 204 22' },
  { name: 'Violet', value: '139 92 246' },
  { name: 'Orange', value: '249 115 22' },
  { name: 'Cyan', value: '6 182 212' },
  { name: 'Blue', value: '59 130 246' },
  { name: 'Emerald', value: '16 185 129' }
];

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const cycleColor = () => {
    const nextIndex = (currentColorIndex + 1) % colorSchemes.length;
    setCurrentColorIndex(nextIndex);
    const nextColor = colorSchemes[nextIndex];
    
    // Update CSS variables
    document.documentElement.style.setProperty('--color-primary', nextColor.value);
    document.documentElement.style.setProperty('--color-secondary', `${nextColor.value} / 0.1`);
    document.documentElement.style.setProperty('--color-light', `${nextColor.value} / 0.05`);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md dark:border-white/5 dark:bg-black/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12">
            <Image 
              src="/logo-transparent-bg.png" 
              alt="Chainship Logo" 
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-lg sm:text-xl font-bold tracking-tight text-black dark:text-white">
            CHAINSHIP
          </span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-black/60 dark:text-white/60">
          <Link href="/" className="hover:text-black dark:hover:text-white transition-colors">Home</Link>
          <Link href="/services" className="hover:text-black dark:hover:text-white transition-colors">Services</Link>
          <Link href="/work" className="hover:text-black dark:hover:text-white transition-colors">Work</Link>
          <Link href="/contact" className="hover:text-black dark:hover:text-white transition-colors">Contact</Link>
          <Link href="/quote" className="px-4 lg:px-6 py-2 border-2 border-accent text-black dark:text-white rounded-full hover:shadow-accent transition-all text-sm">Get Quote</Link>
          {/* <button
            onClick={cycleColor}
            className="p-2 rounded-full border border-accent hover:shadow-accent transition-all text-black dark:text-white"
            aria-label="Change color scheme"
            title={`Current: ${colorSchemes[currentColorIndex].name}`}
          >
            <Palette size={18} />
          </button> */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-accent hover:shadow-accent transition-all text-black dark:text-white"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          {/* <button
            onClick={cycleColor}
            className="p-2 rounded-full border border-accent hover:shadow-accent transition-all text-black dark:text-white"
            aria-label="Change color scheme"
            title={`Current: ${colorSchemes[currentColorIndex].name}`}
          >
            <Palette size={18} />
          </button> */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-accent hover:shadow-accent transition-all text-black dark:text-white"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-black dark:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-black/5 dark:border-white/5 bg-white dark:bg-black">
          <div className="px-4 py-4 space-y-3">
            <Link 
              href="/" 
              className="block py-2 text-base font-medium text-black dark:text-white hover:text-black/60 dark:hover:text-white/60 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className="block py-2 text-base font-medium text-black dark:text-white hover:text-black/60 dark:hover:text-white/60 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/work" 
              className="block py-2 text-base font-medium text-black dark:text-white hover:text-black/60 dark:hover:text-white/60 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Work
            </Link>
            <Link 
              href="/contact" 
              className="block py-2 text-base font-medium text-black dark:text-white hover:text-black/60 dark:hover:text-white/60 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="/quote" 
              className="block w-full text-center py-3 mt-2 border-2 border-accent text-black dark:text-white rounded-full hover:shadow-accent transition-all font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
