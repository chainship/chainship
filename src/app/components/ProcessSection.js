"use client";

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
      <div className="text-center mb-16">
        <h3 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-black dark:text-white mb-6">
          How We Work
        </h3>
        <p className="text-xl text-black/50 dark:text-white/50 font-light">
          From quote to launch in 4 simple steps
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative group"
          >
            {/* Connecting Line */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-black/20 dark:bg-white/20 origin-left"></div>
            )}
            
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-black dark:bg-white flex items-center justify-center transition-colors">
                <step.icon className="w-8 h-8 text-white dark:text-black" />
              </div>
              
              <div className="text-xs font-bold text-black/40 dark:text-white/40 mb-2 tracking-wider transition-colors">
                STEP {step.number}
              </div>
              
              <h4 className="text-xl font-bold text-black dark:text-white mb-2 transition-colors">
                {step.title}
              </h4>
              
              <p className="text-sm text-black/60 dark:text-white/60 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
