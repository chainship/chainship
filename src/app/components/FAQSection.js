"use client";

import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How long does a typical Web3 project take?",
    answer: "Most projects take 2-6 weeks depending on complexity. Simple landing pages and MVPs can be completed in 1-2 weeks, while full dApps with smart contracts typically take 4-6 weeks. We provide detailed timelines during the quote phase."
  },
  {
    question: "Do you work with startups or only established companies?",
    answer: "We work with both! Whether you're a solo founder with an idea or an established company expanding into Web3, we tailor our approach to your needs and budget. We've helped launch dozens of successful Web3 startups."
  },
  {
    question: "What blockchain networks do you support?",
    answer: "We primarily work with Ethereum, Polygon, BSC, Arbitrum, and Optimism. We're also experienced with Solana, Avalanche, and other major chains. If you have a specific network requirement, just ask!"
  },
  {
    question: "How does remote collaboration work?",
    answer: "We use modern tools like Slack, Discord, and GitHub for seamless communication. You'll receive daily updates, have access to our project management dashboard, and can schedule calls anytime. Being remote means we're available across time zones."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Absolutely! We offer post-launch support packages including bug fixes, feature updates, smart contract maintenance, and infrastructure monitoring. Your project's success is our success."
  },
  {
    question: "What makes you different from other Web3 agencies?",
    answer: "We're remote-first, which means lower costs and access to global talent. We specialize exclusively in Web3, so we understand the ecosystem deeply. Plus, we move fast—most agencies take months, we deliver in weeks."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20">
      <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-16">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 px-4">
          Frequently Asked Questions
        </h3>
        <p className="text-base sm:text-lg text-black/50 dark:text-white/50 px-4">
          Everything you need to know
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="group border border-accent hover:shadow-accent rounded-lg overflow-hidden backdrop-blur-sm bg-white/50 dark:bg-black/50 transition-all"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              <span className="font-semibold text-black dark:text-white pr-4 transition-colors">
                {faq.question}
              </span>
              <div className="flex-shrink-0">
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-black dark:text-white" />
                ) : (
                  <Plus className="w-5 h-5 text-black/40 dark:text-white/40 transition-colors" />
                )}
              </div>
            </button>
            
            {openIndex === index && (
              <div className="px-6 pb-5 text-black/70 dark:text-white/70 leading-relaxed transition-all">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
