"use client";

import { ArrowRight } from "lucide-react";

export default function ComingSoonPage({ title = "Coming Soon", description = "We're working on something awesome" }) {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black overflow-hidden transition-colors duration-300 flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <main className="relative z-10 w-full max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight text-black dark:text-white mb-8">
          {title}
        </h1>
        <p className="text-2xl sm:text-3xl text-black/40 dark:text-white/40 mb-12 font-light">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 px-10 h-14 bg-black dark:bg-white text-white dark:text-black text-sm font-semibold tracking-wide rounded-full hover:scale-[1.02] transition-transform shadow-xl shadow-black/10 dark:shadow-white/10"
          >
            Back to Home
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-10 h-14 border border-black/[0.08] dark:border-white/[0.08] text-black dark:text-white text-sm font-semibold tracking-wide rounded-full hover:border-black/20 dark:hover:border-white/20 transition-all"
          >
            Contact Us <ArrowRight size={16} />
          </a>
        </div>
      </main>
    </div>
  );
}
