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
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-6">
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
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 10px 30px rgba(236, 72, 153, 0.2)",
              borderColor: "rgba(236, 72, 153, 0.5)"
            }}
            className="group flex gap-4 p-6 border border-black/10 dark:border-white/10 rounded-2xl backdrop-blur-sm bg-white/50 dark:bg-black/50 transition-all cursor-pointer"
          >
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-2xl bg-black dark:bg-white group-hover:bg-pink-500 transition-colors flex items-center justify-center">
                <reason.icon className="w-7 h-7 text-white dark:text-black group-hover:text-white transition-colors" />
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold text-black dark:text-white mb-2 group-hover:text-pink-500 transition-colors">
                {reason.title}
              </h4>
              <p className="text-black/60 dark:text-white/60 leading-relaxed">
                {reason.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}
