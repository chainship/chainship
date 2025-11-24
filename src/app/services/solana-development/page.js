"use client";

import { Zap, Shield, Code, CheckCircle, ArrowRight, Github } from "lucide-react";
import Link from "next/link";
import NewsletterSignup from "../../components/NewsletterSignup";

const features = [
  "Custom Solana Programs in Rust/Anchor",
  "DEX & AMM Development",
  "NFT Marketplace & Minting Platforms",
  "DeFi Protocols (Lending, Staking, Yield)",
  "SPL Token Creation & Management",
  "Wallet Integration (Phantom, Solflare)",
  "Real-time Data Feeds & WebSocket Integration",
  "Program Testing & Security Audits"
];

const benefits = [
  {
    icon: Zap,
    title: "Lightning-Fast Performance",
    description: "Solana's 65,000 TPS capability means your dApp can handle massive user activity without congestion or high fees."
  },
  {
    icon: Shield,
    title: "Security-First Development",
    description: "We follow Solana security best practices, implement comprehensive testing, and conduct thorough code reviews."
  },
  {
    icon: Code,
    title: "Production-Ready Code",
    description: "Clean, well-documented Rust code that's maintainable, scalable, and ready for mainnet deployment."
  }
];

const caseStudy = {
  title: "Photon DEX",
  description: "A production constant product AMM on Solana",
  metrics: [
    { value: "$2.4B", label: "24h Volume (Simulated)" },
    { value: "$850M", label: "Total Value Locked" },
    { value: "1.2M+", label: "Total Swaps" },
    { value: "400ms", label: "Avg Swap Time" }
  ],
  tech: ["Rust", "Anchor", "Next.js", "TypeScript", "WebSocket"],
  link: "https://photon-six-flame.vercel.app/"
};

export default function SolanaDevelopmentPage() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black overflow-hidden transition-colors duration-300">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <main className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Hero */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-black/[0.08] dark:border-white/[0.08] rounded-full bg-white dark:bg-black mb-6">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
            <span className="text-sm font-semibold text-black/70 dark:text-white/70">
              Solana Development
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-black dark:text-white mb-8 leading-tight">
            Build Lightning-Fast <br />Solana dApps
          </h1>
          <p className="text-xl sm:text-2xl text-black/50 dark:text-white/50 max-w-3xl mx-auto font-light leading-relaxed mb-12">
            Expert Rust and Anchor developers building high-performance Solana programs. From concept to mainnet in 2-4 weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/hire-us">
              <button className="px-12 h-14 bg-black dark:bg-white text-white dark:text-black text-sm font-semibold tracking-wide rounded-full hover:scale-[1.02] transition-transform shadow-lg">
                Hire Us
              </button>
            </Link>
            <Link href="/work">
              <button className="px-12 h-14 border border-black/20 dark:border-white/20 text-black dark:text-white text-sm font-semibold tracking-wide rounded-full hover:scale-[1.02] hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-all flex items-center justify-center gap-2">
                View Solana Projects
                <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </div>

        {/* What We Build */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-black text-black dark:text-white mb-8 text-center">
            What We Build on Solana
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 border border-black/[0.08] dark:border-white/[0.08] rounded-xl bg-white dark:bg-black hover:border-black/20 dark:hover:border-white/20 transition-all"
              >
                <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
                <span className="text-black dark:text-white font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-black text-black dark:text-white mb-12 text-center">
            Why Choose Solana?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="p-8 border border-black/[0.08] dark:border-white/[0.08] rounded-2xl bg-white dark:bg-black hover:border-black/20 dark:hover:border-white/20 transition-all"
                >
                  <Icon className="w-10 h-10 text-purple-500 mb-4" />
                  <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-black/70 dark:text-white/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Case Study */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-black text-black dark:text-white mb-8 text-center">
            Featured Solana Project
          </h2>
          <div className="p-8 border-2 border-black/[0.12] dark:border-white/[0.12] rounded-3xl bg-gradient-to-br from-purple-500/5 to-transparent">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500"></div>
              <div>
                <h3 className="text-2xl font-black text-black dark:text-white">
                  {caseStudy.title}
                </h3>
                <p className="text-black/60 dark:text-white/60">{caseStudy.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {caseStudy.metrics.map((metric, index) => (
                <div key={index} className="text-center p-4 bg-white dark:bg-black rounded-xl border border-black/[0.08] dark:border-white/[0.08]">
                  <div className="text-2xl font-black text-black dark:text-white mb-1">
                    {metric.value}
                  </div>
                  <div className="text-xs text-black/60 dark:text-white/60">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {caseStudy.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm border border-black/[0.08] dark:border-white/[0.08] rounded-full text-black/70 dark:text-white/70"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={caseStudy.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:scale-[1.02] transition-transform flex items-center gap-2"
              >
                View Live dApp
                <ArrowRight size={18} />
              </a>
              <a
                href="https://github.com/chainship/photon-cp-swap"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-black/[0.08] dark:border-white/[0.08] text-black dark:text-white rounded-lg font-semibold hover:border-black/20 dark:hover:border-white/20 transition-all flex items-center gap-2"
              >
                <Github size={18} />
                View Code
              </a>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-black text-black dark:text-white mb-12 text-center">
            Our Solana Development Process
          </h2>
          <div className="space-y-6">
            {[
              { step: "1", title: "Discovery & Planning", desc: "We analyze your requirements and design the optimal Solana program architecture." },
              { step: "2", title: "Development Sprint", desc: "Build your Solana programs in Rust/Anchor with comprehensive testing and documentation." },
              { step: "3", title: "Security Audit", desc: "Thorough code review, vulnerability testing, and security hardening before deployment." },
              { step: "4", title: "Deployment & Support", desc: "Deploy to devnet/mainnet and provide ongoing support and optimization." }
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-6 p-6 border border-black/[0.08] dark:border-white/[0.08] rounded-2xl bg-white dark:bg-black hover:border-black/20 dark:hover:border-white/20 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-xl flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-black/70 dark:text-white/70">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="mb-20">
          <NewsletterSignup variant="inline" />
        </div>

        {/* Final CTA */}
        <div className="text-center p-12 border border-black/[0.08] dark:border-white/[0.08] rounded-3xl bg-gradient-to-br from-black/[0.02] to-transparent dark:from-white/[0.02]">
          <h2 className="text-3xl sm:text-4xl font-black text-black dark:text-white mb-6">
            Ready to Build on Solana?
          </h2>
          <p className="text-xl text-black/60 dark:text-white/60 mb-8 max-w-2xl mx-auto">
            Hire our expert Rust developers for your Solana project. 2-4 week sprints, get started in 24 hours.
          </p>
          <Link href="/hire-us">
            <button className="px-12 h-14 bg-black dark:bg-white text-white dark:text-black text-sm font-semibold tracking-wide rounded-full hover:scale-[1.02] transition-transform shadow-lg">
              Hire Us Now
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
