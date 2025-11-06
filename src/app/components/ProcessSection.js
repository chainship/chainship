"use client";

import { motion } from "framer-motion";
import { MessageSquare, Handshake, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Quote",
    description: "Tell us your vision. We'll provide a clear quote and timeline."
  },
  {
    icon: Handshake,
    number: "02",
    title: "Kickoff",
    description: "Align on tech stack, deliverables, and milestones."
  },
  {
    icon: Code,
    number: "03",
    title: "Build",
    description: "Daily updates. Fast iterations. Transparent progress."
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch",
    description: "QA, deployment, and ongoing support. You're live."
  }
];

export default function ProcessSection() {
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
          How We Work
        </h3>
        <p className="text-lg text-black/50 dark:text-white/50">
          From quote to launch in 4 simple steps
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative"
          >
            {/* Connecting Line */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-black/20 to-transparent dark:from-white/20" />
            )}
            
            <div className="relative z-10 text-center">
              <motion.div
                className="w-16 h-16 mx-auto mb-4 rounded-full bg-black dark:bg-white flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <step.icon className="w-8 h-8 text-white dark:text-black" />
              </motion.div>
              
              <div className="text-xs font-bold text-black/40 dark:text-white/40 mb-2">
                {step.number}
              </div>
              
              <h4 className="text-xl font-bold text-black dark:text-white mb-2">
                {step.title}
              </h4>
              
              <p className="text-sm text-black/60 dark:text-white/60">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
