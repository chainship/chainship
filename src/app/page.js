"use client";

import { motion } from "framer-motion";
import { ChevronRight, ChevronsLeftRight } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
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
    <>
      {/* SEO Schema Markup for Homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Chainship",
            "url": "https://chainship.in",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://chainship.in/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
      <div className="relative flex flex-col min-h-screen bg-white dark:bg-black overflow-hidden transition-colors duration-300">

        {/* Floating Particles */}
        <FloatingParticles />

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <motion.div 
        className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[120px]"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/3 w-[350px] h-[350px] bg-accent/10 rounded-full blur-[100px]"
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <main className="relative z-10 flex w-full flex-col items-center">
        {/* Hero Container */}
        <div className="flex w-full max-w-6xl flex-col items-center gap-12 sm:gap-20 px-4 sm:px-6 py-24 sm:py-32 text-center">
          {/* Hero Section */}
          <motion.div 
            className="flex flex-col items-center gap-6 sm:gap-8 max-w-4xl relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 border border-accent/50 rounded-full bg-accent/5 backdrop-blur-sm"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-accent"
              />
              <span className="text-xs sm:text-sm font-medium text-black dark:text-white">
              Shipping Web3 Projects Worldwide
              </span>
            </motion.div>

            <motion.h2 
              className="text-4xl sm:text-6xl md:text-8xl font-bold leading-[0.95] tracking-tighter text-black dark:text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block">
                Remote-First
              </span>
              <br />
              <span className="relative inline-block">
                <span className="text-black/30 dark:text-white/30">Web3 Builders</span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </span>
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-black/50 dark:text-white/50 leading-relaxed max-w-2xl font-light tracking-wide px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We build your <span className="text-accent font-semibold">Web3 vision</span> — fast, global, done.
            </motion.p>
            {/* Feature Pills */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-3 px-4 mt-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="px-4 py-1.5 text-xs sm:text-sm border border-accent/30 rounded-full bg-accent/5 text-black/60 dark:text-white/60 backdrop-blur-sm">
                2-4 Week Sprints
              </span>
              <span className="px-4 py-1.5 text-xs sm:text-sm border border-accent/30 rounded-full bg-accent/5 text-black/60 dark:text-white/60 backdrop-blur-sm">
                Global Team
              </span>
              <span className="px-4 py-1.5 text-xs sm:text-sm border border-accent/30 rounded-full bg-accent/5 text-black/60 dark:text-white/60 backdrop-blur-sm">
                Security First
              </span>
            </motion.div>
          </motion.div>

          {/* CTA */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 sm:mt-6 w-full sm:w-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/quote">
              <motion.button 
                className="relative w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 border-2 border-accent text-black dark:text-white text-xs sm:text-sm font-bold uppercase tracking-[0.2em] rounded-full hover:shadow-accent transition-all flex items-center justify-center gap-2 overflow-hidden group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-accent/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10">Get a Quote</span>
                <ChevronsLeftRight size={16} className="sm:w-[18px] sm:h-[18px] relative z-10" />
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
    </>
  );
}
