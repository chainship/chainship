"use client";

import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./ClientLayout";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md dark:border-white/5 dark:bg-black/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link href="/" className="text-lg sm:text-xl font-bold tracking-tight text-black dark:text-white hover:opacity-80 transition-opacity">
          CHAINSHIP
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-black/60 dark:text-white/60">
          <Link href="/services" className="hover:text-black dark:hover:text-white transition-colors">Services</Link>
          <Link href="/work" className="hover:text-black dark:hover:text-white transition-colors">Work</Link>
          <Link href="/contact" className="hover:text-black dark:hover:text-white transition-colors">Contact</Link>
          <Link href="/quote" className="px-4 lg:px-6 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full hover:opacity-90 transition-opacity text-sm">Get Quote</Link>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-black dark:text-white"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-black dark:text-white"
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
              className="block w-full text-center py-3 mt-2 bg-black text-white dark:bg-white dark:text-black rounded-full hover:opacity-90 transition-opacity font-medium"
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
