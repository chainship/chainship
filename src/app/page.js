"use client";
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
      
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/3 w-[350px] h-[350px] bg-accent/10 rounded-full blur-[100px]"></div>
      
      <main className="relative z-10 flex w-full flex-col items-center">
        {/* Hero Container */}
        <div className="flex w-full max-w-6xl flex-col items-center px-6 pt-28 sm:pt-32 md:pt-40 pb-20 sm:pb-24 md:pb-32 text-center">
          {/* Hero Section */}
          <div className="flex flex-col items-center gap-8 max-w-4xl relative mb-12">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-2.5 border border-black/10 dark:border-white/10 rounded-full bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white animate-pulse"></span>
              <span className="text-sm font-medium text-black/60 dark:text-white/60 tracking-wide">
              Shipping Web3 Projects Worldwide
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] tracking-[-0.02em] text-black dark:text-white">
              <span className="inline-block">
                Remote-First
              </span>
              <br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-black/80 via-black to-black/80 dark:from-white/80 dark:via-white dark:to-white/80 bg-clip-text text-transparent">Web3 Builders</span>
              </span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black/40 dark:text-white/40 leading-snug max-w-4xl font-light tracking-tight">
              We build your <span className="text-black dark:text-white font-normal">Web3 vision</span> across EVM, Solana, Sui & beyond.
            </p>
            {/* Feature Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="px-6 py-2.5 text-sm font-medium border border-black/[0.08] dark:border-white/[0.08] rounded-full bg-black/[0.02] dark:bg-white/[0.02] text-black/70 dark:text-white/70 backdrop-blur-sm">
                2-4 Week Sprints
              </span>
              <span className="px-6 py-2.5 text-sm font-medium border border-black/[0.08] dark:border-white/[0.08] rounded-full bg-black/[0.02] dark:bg-white/[0.02] text-black/70 dark:text-white/70 backdrop-blur-sm">
                Global Team
              </span>
              <span className="px-6 py-2.5 text-sm font-medium border border-black/[0.08] dark:border-white/[0.08] rounded-full bg-black/[0.02] dark:bg-white/[0.02] text-black/70 dark:text-white/70 backdrop-blur-sm">
                Security First
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto max-w-lg">
            <Link href="/quote" className="flex-1">
              <button className="relative w-full h-14 px-12 bg-black dark:bg-white text-white dark:text-black text-sm font-semibold tracking-wide rounded-full hover:scale-[1.02] transition-transform flex items-center justify-center gap-3 shadow-lg shadow-black/10 dark:shadow-white/10 whitespace-nowrap">
                Get Quote
                <ChevronsLeftRight size={18} />
              </button>
            </Link>
            <Link href="/work" className="flex-1">
              <button className="w-full h-14 px-12 border border-black/20 dark:border-white/20 text-black dark:text-white text-sm font-semibold tracking-wide rounded-full hover:scale-[1.02] hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-all flex items-center justify-center gap-3 whitespace-nowrap">
                View Work
                <ChevronRight size={18} />
              </button>
            </Link>
          </div>
        </div>

        {/* Services Section */}
        <div className="w-full">
          <ServicesSection />
        </div>

        
        {/* Tech Stack Section */}
        <div className="w-full">
          <TechStackSection />
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

        {/* Testimonials Section */}
        <div className="w-full">
          <TestimonialsSection />
        </div>

        {/* FAQ Section */}
        <div className="w-full">
          <FAQSection />
        </div>

        {/* Final CTA */}
        <div className="w-full py-24 border-t border-black/[0.06] dark:border-white/[0.06]">
          <div className="text-center px-6 max-w-5xl mx-auto">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-black dark:text-white mb-8 leading-tight">
              Ready to Ship Your Web3 Project?
            </h3>
            <p className="text-xl sm:text-2xl text-black/50 dark:text-white/50 mb-12 max-w-3xl mx-auto font-light">
              Join the growing list of successful Web3 projects we've helped launch
            </p>
            <Link href="/quote">
              <button className="px-14 py-6 bg-black dark:bg-white text-white dark:text-black text-sm font-semibold tracking-wide rounded-full hover:scale-[1.02] transition-transform shadow-xl shadow-black/10 dark:shadow-white/10">
                Get Your Quote Today
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}
