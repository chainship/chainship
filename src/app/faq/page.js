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
  },
  {
    question: "What's included in the pricing?",
    answer: "All packages include source code, deployment, basic documentation, and initial support period. Design, smart contracts, frontend/backend development, and testing are all covered. Additional services like audits and extended support are available as add-ons."
  },
  {
    question: "Do you sign NDAs?",
    answer: "Yes, we're happy to sign NDAs before discussing your project. We take confidentiality seriously and have worked with numerous clients under NDA agreements."
  },
  {
    question: "What's your tech stack?",
    answer: "For blockchain: Solidity (EVM), Rust (Solana/Sui), Anchor, Hardhat. For frontend: React, Next.js, TypeScript, Tailwind CSS. For backend: Node.js, PostgreSQL, Supabase. We adapt our stack based on project requirements."
  },
  {
    question: "Can you help with tokenomics and smart contract audits?",
    answer: "Yes! We offer tokenomics consulting to help design sustainable token economies. For audits, we partner with leading security firms and can arrange third-party smart contract audits as part of your project."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-black overflow-hidden transition-colors duration-300">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <main className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-black dark:text-white mb-8">
            Frequently Asked Questions
          </h1>
          <p className="text-xl sm:text-2xl text-black/40 dark:text-white/40 font-light">
            Everything you need to know about working with us
          </p>
        </div>

        <div className="space-y-3 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group border border-black/[0.08] dark:border-white/[0.08] rounded-2xl overflow-hidden bg-white dark:bg-black hover:border-black/20 dark:hover:border-white/20 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between text-left hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-all duration-200"
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

        {/* CTA */}
        <div className="text-center border border-black/[0.08] dark:border-white/[0.08] rounded-2xl p-12">
          <h3 className="text-3xl font-black text-black dark:text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-lg text-black/60 dark:text-white/60 mb-8 font-light">
            Get in touch and we'll answer them all
          </p>
          <a
            href="/contact"
            className="inline-block px-14 h-14 bg-black dark:bg-white text-white dark:text-black text-sm font-semibold tracking-wide rounded-full hover:scale-[1.02] transition-transform shadow-xl shadow-black/10 dark:shadow-white/10 leading-[3.5rem]"
          >
            Contact Us
          </a>
        </div>
      </main>
    </div>
  );
}
