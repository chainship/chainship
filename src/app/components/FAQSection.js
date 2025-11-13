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
    answer: "We work across all major ecosystems: EVM chains (Ethereum, Polygon, BSC, Arbitrum, Optimism, Base), Solana, Sui, Avalanche, and emerging networks. Multi-chain and cross-chain solutions are our specialty."
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
    <section className="w-full py-24">
      <div className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-20">
        <h3 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-black dark:text-white mb-8">
          Frequently Asked Questions
        </h3>
        <p className="text-xl sm:text-2xl text-black/40 dark:text-white/40 font-light">
          Everything you need to know
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="group border border-black/[0.08] dark:border-white/[0.08] rounded-2xl overflow-hidden bg-white dark:bg-black hover:border-black/20 dark:hover:border-white/20 transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-all duration-200"
            >
              <span className="text-lg font-bold text-black dark:text-white pr-6 transition-colors">
                {faq.question}
              </span>
              <div className="flex-shrink-0">
                {openIndex === index ? (
                  <Minus className="w-6 h-6 text-black dark:text-white transition-transform" />
                ) : (
                  <Plus className="w-6 h-6 text-black/30 dark:text-white/30 group-hover:text-black/50 dark:group-hover:text-white/50 transition-all" />
                )}
              </div>
            </button>
            
            {openIndex === index && (
              <div className="px-8 pb-6 text-base text-black/60 dark:text-white/60 leading-relaxed font-light transition-all">
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
