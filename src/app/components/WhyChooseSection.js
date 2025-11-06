"use client";

import { motion } from "framer-motion";
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
    <section className="w-full max-w-6xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h3 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
          Why Chainship?
        </h3>
        <p className="text-lg text-black/50 dark:text-white/50">
          Your remote Web3 dev squad
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex gap-4 p-6 border border-black/10 dark:border-white/10 rounded-lg backdrop-blur-sm"
          >
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center">
                <reason.icon className="w-6 h-6 text-black dark:text-white" />
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold text-black dark:text-white mb-2">
                {reason.title}
              </h4>
              <p className="text-black/60 dark:text-white/60">
                {reason.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
