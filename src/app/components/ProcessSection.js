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
            className="relative group"
          >
            {/* Connecting Line */}
            {index < steps.length - 1 && (
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-black/20 dark:bg-white/20 origin-left"
              />
            )}
            
            <div className="relative z-10 text-center">
              <motion.div
                className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-black dark:bg-white group-hover:bg-pink-500 transition-colors flex items-center justify-center"
                whileHover={{ 
                  scale: 1.15,
                  boxShadow: "0 10px 30px rgba(236, 72, 153, 0.4)"
                }}
                transition={{ duration: 0.3 }}
              >
                <step.icon className="w-8 h-8 text-white dark:text-black group-hover:text-white transition-colors" />
              </motion.div>
              
              <div className="text-xs font-bold text-black/40 dark:text-white/40 group-hover:text-pink-500 mb-2 tracking-wider transition-colors">
                STEP {step.number}
              </div>
              
              <h4 className="text-xl font-bold text-black dark:text-white mb-2 group-hover:text-pink-500 transition-colors">
                {step.title}
              </h4>
              
              <p className="text-sm text-black/60 dark:text-white/60 leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}
