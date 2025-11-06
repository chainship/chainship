"use client";

import { motion } from "framer-motion";
import { Code2, Blocks, Coins, Zap } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Blockchain Web Apps",
    description: "Landing pages and full products for Web3 projects"
  },
  {
    icon: Blocks,
    title: "Smart Contracts",
    description: "Secure contract development and auditing"
  },
  {
    icon: Coins,
    title: "Token Integration",
    description: "Seamless token and wallet connectivity"
  },
  {
    icon: Zap,
    title: "Rapid MVP",
    description: "From concept to launch in record time"
  }
];

export default function ServicesSection() {
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
          What We Build
        </h3>
        <p className="text-lg text-black/50 dark:text-white/50">
          End-to-end blockchain solutions
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="p-6 border border-black/10 dark:border-white/10 rounded-lg backdrop-blur-sm hover:border-black/20 dark:hover:border-white/20 transition-all"
          >
            <service.icon className="w-8 h-8 mb-4 text-black dark:text-white" />
            <h4 className="text-lg font-bold text-black dark:text-white mb-2">
              {service.title}
            </h4>
            <p className="text-sm text-black/60 dark:text-white/60">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
