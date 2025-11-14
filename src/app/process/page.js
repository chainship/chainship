"use client";

import { MessageCircle, FileCode, Rocket, HeadphonesIcon } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Discovery & Planning",
    description: "We start with a deep dive into your project. Understanding your goals, target users, and technical requirements. You'll get a detailed proposal with timeline and cost breakdown.",
    duration: "1-2 days"
  },
  {
    icon: FileCode,
    number: "02",
    title: "Development",
    description: "Our team builds your product with daily updates. You'll have access to staging environments and regular demos. We work in sprints with clear milestones and deliverables.",
    duration: "2-6 weeks"
  },
  {
    icon: Rocket,
    number: "03",
    title: "Testing & Launch",
    description: "Comprehensive testing including smart contract audits (if applicable), security reviews, and performance optimization. We handle deployment and provide launch support.",
    duration: "3-5 days"
  },
  {
    icon: HeadphonesIcon,
    number: "04",
    title: "Support & Maintenance",
    description: "Post-launch support included. Bug fixes, updates, and maintenance packages available. We're here for the long term as your Web3 development partner.",
    duration: "Ongoing"
  }
];

export default function ProcessPage() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black overflow-hidden transition-colors duration-300">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <main className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-black dark:text-white mb-8">
            Our Process
          </h1>
          <p className="text-xl sm:text-2xl text-black/50 dark:text-white/50 max-w-3xl mx-auto font-light">
            From idea to launch in 4 simple steps
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group border border-black/[0.08] dark:border-white/[0.08] rounded-2xl p-6 sm:p-8 md:p-12 hover:border-black/20 dark:hover:border-white/20 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-8">
                {/* Left side - Number & Icon */}
                <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-6">
                  <div className="text-6xl md:text-7xl font-black text-black/5 dark:text-white/5">
                    {step.number}
                  </div>
                  <div className="p-4 border border-black/[0.08] dark:border-white/[0.08] rounded-xl">
                    <step.icon className="w-8 h-8 text-black dark:text-white" />
                  </div>
                </div>

                {/* Right side - Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <h3 className="text-3xl font-black tracking-tight text-black dark:text-white">
                      {step.title}
                    </h3>
                    <span className="px-4 py-2 text-sm border border-black/[0.08] dark:border-white/[0.08] rounded-full text-black/60 dark:text-white/60 font-medium">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-lg text-black/70 dark:text-white/70 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20 p-12 border border-black/[0.08] dark:border-white/[0.08] rounded-2xl">
          <h3 className="text-3xl sm:text-4xl font-black text-black dark:text-white mb-6">
            Ready to Start?
          </h3>
          <p className="text-lg text-black/60 dark:text-white/60 mb-8 font-light max-w-2xl mx-auto">
            Get a detailed proposal and timeline for your project. No obligations, just clarity.
          </p>
          <a
            href="/quote"
            className="inline-block px-14 h-14 bg-black dark:bg-white text-white dark:text-black text-sm font-semibold tracking-wide rounded-full hover:scale-[1.02] transition-transform shadow-xl shadow-black/10 dark:shadow-white/10 leading-[3.5rem]"
          >
            Get a Quote
          </a>
        </div>
      </main>
    </div>
  );
}
