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
    <section className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-12 sm:mb-16 lg:mb-20">
        <h3 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-black dark:text-white mb-8">
          What We Build
        </h3>
        <p className="text-xl sm:text-2xl text-black/40 dark:text-white/40 font-light">
          End-to-end blockchain solutions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="group p-8 sm:p-10 border border-black/[0.08] dark:border-white/[0.08] rounded-2xl bg-white dark:bg-black hover:border-black/20 dark:hover:border-white/20 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
          >
            <service.icon className="w-12 h-12 mb-6 text-black dark:text-white transition-colors" />
            <h4 className="text-xl font-black text-black dark:text-white mb-3 transition-colors">
              {service.title}
            </h4>
            <p className="text-base text-black/50 dark:text-white/50 leading-relaxed font-light">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
