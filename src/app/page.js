"use client";

import { motion } from "framer-motion";
import { ChevronRight, ChevronsLeftRight } from "lucide-react";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-white dark:bg-black overflow-hidden transition-colors duration-300">

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,white,transparent)]"></div>
      
      {/* Glow Effects */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/5 dark:bg-pink-500/10 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-400/8 dark:bg-pink-400/10 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <main className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-20 px-6 py-32 text-center">

        {/* Hero Section */}
        <motion.div 
          className="flex flex-col items-center gap-8 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-6xl md:text-8xl font-bold leading-[0.95] tracking-tighter text-black dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Remote-First<br />
            <span className="text-black/30 dark:text-white/30">Web3 Builders</span>
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-black/50 dark:text-white/50 leading-relaxed max-w-2xl font-light tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We build your Web3 vision — fast, global, done.
          </motion.p>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button 
            className="px-10 py-4 bg-black dark:bg-white text-white dark:text-black text-sm font-bold uppercase tracking-[0.2em] rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Quote
            <ChevronsLeftRight size={18} />
          </motion.button>
          <motion.button 
            className="px-10 py-4 border border-black/30 dark:border-white/30 text-black dark:text-white text-sm font-bold uppercase tracking-[0.2em] rounded-full hover:border-black/50 dark:hover:border-white/50 transition-colors flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Work
            <ChevronRight size={18} />
          </motion.button>
        </motion.div>
      </main>
    </div>
  );
}
