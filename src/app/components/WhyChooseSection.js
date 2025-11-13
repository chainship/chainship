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
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 px-4">
          Why Chainship?
        </h3>
        <p className="text-base sm:text-lg text-black/50 dark:text-white/50 px-4">
          Your remote Web3 dev squad
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="group flex gap-4 p-6 border border-accent hover:shadow-accent rounded-2xl backdrop-blur-sm bg-white/50 dark:bg-black/50 transition-all cursor-pointer"
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
