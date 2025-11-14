"use client";

import { Globe, Rocket, Shield, Users } from "lucide-react";

const reasons = [
  {
    icon: Globe,
    title: "Remote-First",
    description: "Global talent, local delivery. Work with the best from anywhere."
  },
  {
    icon: Shield,
    title: "Blockchain Specialists",
    description: "Deep Web3 expertise. We speak smart contracts, tokens, and dApps."
  },
  {
    icon: Rocket,
    title: "Fast Turnaround",
    description: "Quote today, live tomorrow. We ship at blockchain speed."
  },
  {
    icon: Users,
    title: "Transparent Process",
    description: "Clear communication, no surprises. You're in the loop every step."
  }
];

export default function WhyChooseSection() {
  return (
    <section className="w-full py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-12 sm:mb-16">
        <h3 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-black dark:text-white mb-6">
          Why Chainship?
        </h3>
        <p className="text-xl text-black/50 dark:text-white/50 font-light">
          Your remote Web3 dev squad
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="group flex gap-4 sm:gap-6 p-6 sm:p-8 border border-black/[0.08] dark:border-white/[0.08] rounded-2xl backdrop-blur-sm bg-white dark:bg-black hover:border-black/20 dark:hover:border-white/20 transition-all cursor-pointer"
          >
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-2xl bg-black dark:bg-white flex items-center justify-center transition-colors">
                <reason.icon className="w-7 h-7 text-white dark:text-black" />
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold text-black dark:text-white mb-2 transition-colors">
                {reason.title}
              </h4>
              <p className="text-black/60 dark:text-white/60 leading-relaxed">
                {reason.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
