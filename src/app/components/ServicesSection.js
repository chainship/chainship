"use client";

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
      <div className="text-center mb-16">
        <h3 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-black dark:text-white mb-6">
          What We Build
        </h3>
        <p className="text-xl text-black/50 dark:text-white/50 font-light">
          End-to-end blockchain solutions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="group p-8 border border-black/[0.08] dark:border-white/[0.08] rounded-2xl backdrop-blur-sm bg-white dark:bg-black hover:border-black/20 dark:hover:border-white/20 transition-all cursor-pointer"
          >
            <service.icon className="w-10 h-10 mb-4 text-black dark:text-white transition-colors" />
            <h4 className="text-lg font-bold text-black dark:text-white mb-2 transition-colors">
              {service.title}
            </h4>
            <p className="text-sm text-black/60 dark:text-white/60 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
