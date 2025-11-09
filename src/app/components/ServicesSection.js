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
            whileHover={{ 
              y: -8,
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(236, 72, 153, 0.2)",
              borderColor: "rgba(236, 72, 153, 0.5)"
            }}
            className="group p-6 border border-black/10 dark:border-white/10 rounded-2xl backdrop-blur-sm bg-white/50 dark:bg-black/50 transition-all cursor-pointer"
          >
            <service.icon className="w-10 h-10 mb-4 text-black dark:text-white group-hover:text-pink-500 transition-colors" />
            <h4 className="text-lg font-bold text-black dark:text-white mb-2 group-hover:text-pink-500 transition-colors">
              {service.title}
            </h4>
            <p className="text-sm text-black/60 dark:text-white/60 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}
