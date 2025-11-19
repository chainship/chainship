"use client";

import { Users, Globe, Zap, Shield, Github, Award, Rocket, Target } from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Zap,
    title: "Speed & Quality",
    description: "We ship production-ready code in 2-4 week sprints without compromising on quality or security."
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Every smart contract, every integration undergoes rigorous testing and follows industry best practices."
  },
  {
    icon: Globe,
    title: "Remote-First",
    description: "Our distributed team works across time zones, ensuring continuous progress on your project."
  },
  {
    icon: Target,
    title: "Client Success",
    description: "Your vision is our mission. We don't just build – we partner with you to ensure your project succeeds."
  }
];

const stats = [
  { value: "50+", label: "Projects Shipped" },
  { value: "15+", label: "Blockchain Networks" },
  { value: "2-4", label: "Week Sprints" },
  { value: "100%", label: "Client Satisfaction" }
];

const expertise = [
  "Smart Contract Development (Solidity, Rust, Move)",
  "DeFi Protocol Architecture",
  "NFT Marketplaces & Gaming",
  "Cross-chain Bridges",
  "DAO Governance Systems",
  "Wallet Integration (MetaMask, WalletConnect, Phantom)",
  "Web3 Frontend (React, Next.js, ethers.js)",
  "Backend Infrastructure (Node.js, PostgreSQL, Redis)",
  "Security Auditing & Testing",
  "DevOps & Cloud Deployment"
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black overflow-hidden transition-colors duration-300">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <main className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-black dark:text-white mb-8">
            Building the Future of Web3
          </h1>
          <p className="text-xl sm:text-2xl text-black/50 dark:text-white/50 max-w-3xl mx-auto font-light leading-relaxed">
            We're a remote-first team of blockchain developers, smart contract engineers, and Web3 specialists who ship production-ready dApps for clients worldwide.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 border border-black/[0.08] dark:border-white/[0.08] rounded-2xl bg-white dark:bg-black"
            >
              <div className="text-4xl font-black text-black dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-black/60 dark:text-white/60">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Our Story */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-black text-black dark:text-white mb-8">
            Our Story
          </h2>
          <div className="space-y-6 text-lg text-black/70 dark:text-white/70 leading-relaxed">
            <p>
              Chainship was born from a simple observation: building blockchain applications shouldn't take months or cost a fortune. Too many great Web3 ideas never see the light of day because traditional development is slow, expensive, and complicated.
            </p>
            <p>
              We built Chainship to change that. Our remote-first model means we can assemble the perfect team for your project without geographic constraints. Our sprint-based approach means you see working code every 2-4 weeks, not vague promises about "Q3 delivery."
            </p>
            <p>
              Since our founding, we've shipped production dApps across Ethereum, Solana, Sui, and other leading blockchain networks. From DeFi protocols handling millions in TVL to NFT marketplaces with thousands of users, we've proven that speed and quality aren't mutually exclusive.
            </p>
            <p>
              Today, we're the go-to development partner for Web3 founders who want to move fast without breaking things. Our clients range from early-stage startups to established crypto companies – all united by the need for reliable, security-focused blockchain development.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-black text-black dark:text-white mb-12 text-center">
            What Drives Us
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="p-8 border border-black/[0.08] dark:border-white/[0.08] rounded-2xl bg-white dark:bg-black hover:border-black/20 dark:hover:border-white/20 transition-all"
                >
                  <Icon className="w-10 h-10 text-black dark:text-white mb-4" />
                  <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-black/70 dark:text-white/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Expertise */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-black text-black dark:text-white mb-12 text-center">
            Our Expertise
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 border border-black/[0.08] dark:border-white/[0.08] rounded-xl bg-white dark:bg-black"
              >
                <div className="w-2 h-2 rounded-full bg-black dark:bg-white flex-shrink-0"></div>
                <span className="text-black/80 dark:text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Open Source & Trust */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-black text-black dark:text-white mb-8">
            Open Source & Transparency
          </h2>
          <div className="p-8 border border-black/[0.08] dark:border-white/[0.08] rounded-2xl bg-white dark:bg-black">
            <div className="flex items-start gap-6 mb-6">
              <Github className="w-12 h-12 text-black dark:text-white flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                  We Build in the Open
                </h3>
                <p className="text-black/70 dark:text-white/70 leading-relaxed mb-4">
                  Many of our projects are open-source, and we actively contribute to the Web3 ecosystem. Check out our GitHub to see real code, not just marketing promises.
                </p>
                <a
                  href="https://github.com/chainship"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-black dark:text-white font-semibold hover:underline"
                >
                  View our GitHub
                  <Github size={18} />
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="px-4 py-2 border border-black/[0.08] dark:border-white/[0.08] rounded-full text-sm text-black/70 dark:text-white/70">
                <Award className="inline w-4 h-4 mr-2" />
                Hackathon Winners
              </span>
              <span className="px-4 py-2 border border-black/[0.08] dark:border-white/[0.08] rounded-full text-sm text-black/70 dark:text-white/70">
                <Shield className="inline w-4 h-4 mr-2" />
                Security-First Development
              </span>
              <span className="px-4 py-2 border border-black/[0.08] dark:border-white/[0.08] rounded-full text-sm text-black/70 dark:text-white/70">
                <Rocket className="inline w-4 h-4 mr-2" />
                Production-Ready Code
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-12 border border-black/[0.08] dark:border-white/[0.08] rounded-3xl bg-gradient-to-br from-black/[0.02] to-transparent dark:from-white/[0.02]">
          <h2 className="text-3xl sm:text-4xl font-black text-black dark:text-white mb-6">
            Ready to Ship Your Web3 Project?
          </h2>
          <p className="text-xl text-black/60 dark:text-white/60 mb-8 max-w-2xl mx-auto">
            Let's talk about your vision. Get a free quote and timeline for your blockchain project.
          </p>
          <Link href="/quote">
            <button className="px-12 h-14 bg-black dark:bg-white text-white dark:text-black text-sm font-semibold tracking-wide rounded-full hover:scale-[1.02] transition-transform shadow-lg">
              Get Free Quote
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
