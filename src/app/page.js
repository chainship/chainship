"use client";

import { motion } from "framer-motion";
import { ChevronRight, ChevronsLeftRight } from "lucide-react";
import Link from "next/link";
import ServicesSection from "./components/ServicesSection";
import WhyChooseSection from "./components/WhyChooseSection";
import ProcessSection from "./components/ProcessSection";
import StatsSection from "./components/StatsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import TechStackSection from "./components/TechStackSection";
import FAQSection from "./components/FAQSection";
import FloatingParticles from "./components/FloatingParticles";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-white dark:bg-black overflow-hidden transition-colors duration-300">

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Grid Background */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div> */}
      
      {/* Glow Effects */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-black/5 dark:bg-white/5 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-black/3 dark:bg-white/3 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <main className="relative z-10 flex w-full flex-col items-center">
        {/* Hero Container */}
        <div className="flex w-full max-w-6xl flex-col items-center gap-12 sm:gap-20 px-4 sm:px-6 py-24 sm:py-32 text-center">
          {/* Hero Section */}
          <motion.div 
            className="flex flex-col items-center gap-6 sm:gap-8 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-4xl sm:text-6xl md:text-8xl font-bold leading-[0.95] tracking-tighter text-black dark:text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Remote-First<br />
              <span className="text-black/30 dark:text-white/30">Web3 Builders</span>
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-black/50 dark:text-white/50 leading-relaxed max-w-2xl font-light tracking-wide px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We build your Web3 vision — fast, global, done.
            </motion.p>
          </motion.div>

          {/* CTA */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 sm:mt-12 w-full sm:w-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/quote">
              <motion.button 
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 border-2 border-accent text-black dark:text-white text-xs sm:text-sm font-bold uppercase tracking-[0.2em] rounded-full hover:shadow-accent transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Quote
                <ChevronsLeftRight size={16} className="sm:w-[18px] sm:h-[18px]" />
              </motion.button>
            </Link>
            <Link href="/work">
              <motion.button 
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 border-2 border-accent text-black dark:text-white text-xs sm:text-sm font-bold uppercase tracking-[0.2em] rounded-full hover:shadow-accent transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Work
                <ChevronRight size={16} className="sm:w-[18px] sm:h-[18px]" />
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Services Section */}
        <div className="w-full">
          <ServicesSection />
        </div>

        {/* Stats Section */}
        <div className="w-full">
          <StatsSection />
        </div>

        {/* Why Choose Section */}
        <div className="w-full">
          <WhyChooseSection />
        </div>

        {/* Process Section */}
        <div className="w-full">
          <ProcessSection />
        </div>

        {/* Tech Stack Section */}
        <div className="w-full">
          <TechStackSection />
        </div>

        {/* Testimonials Section */}
        <div className="w-full">
          <TestimonialsSection />
        </div>

        {/* FAQ Section */}
        <div className="w-full">
          <FAQSection />
        </div>

        {/* Final CTA */}
        <div className="w-full py-16 sm:py-20 bg-gradient-to-b from-transparent to-black/5 dark:to-white/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center px-4 sm:px-6"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white mb-4 sm:mb-6">
              Ready to Ship Your Web3 Project?
            </h3>
            <p className="text-lg text-black/60 dark:text-white/60 mb-8 max-w-2xl mx-auto">
              Join the growing list of successful Web3 projects we've helped launch
            </p>
            <Link href="/quote">
              <motion.button
                className="px-8 sm:px-12 py-4 sm:py-5 border-2 border-accent text-black dark:text-white text-xs sm:text-sm font-bold uppercase tracking-[0.2em] rounded-full hover:shadow-accent transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Your Quote Today
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
