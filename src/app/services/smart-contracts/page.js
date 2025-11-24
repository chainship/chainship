"use client";

import { Shield, Zap, Code, CheckCircle, FileCheck, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";
import NewsletterSignup from "../../components/NewsletterSignup";

const contractTypes = [
  "ERC-20/SPL Token Contracts",
  "NFT Standards (ERC-721, ERC-1155, Metaplex)",
  "DeFi Protocols (Lending, Staking, AMMs)",
  "DAO Governance Systems",
  "Multisig Wallets",
  "Vesting & Token Distribution",
  "Bridges & Cross-chain Logic",
  "Custom Business Logic Contracts"
];

const features = [
  {
    icon: Shield,
    title: "Security-First Approach",
    description: "Every contract undergoes rigorous testing, follows industry best practices, and includes comprehensive security measures against common vulnerabilities."
  },
  {
    icon: Zap,
    title: "Gas Optimization",
    description: "We optimize every operation to minimize gas costs without compromising security or functionality. Your users pay less per transaction."
  },
  {
    icon: FileCheck,
    title: "Comprehensive Testing",
    description: "Unit tests, integration tests, and mainnet fork testing ensure your contracts work perfectly under all conditions."
  },
  {
    icon: Code,
    title: "Clean, Auditable Code",
    description: "Well-documented, readable code that follows standards. Easy to audit, maintain, and extend as your project grows."
  },
  {
    icon: Lock,
    title: "Upgrade Patterns",
    description: "Implement proxy patterns and upgradeable contracts when needed, with proper governance and security controls."
  }
];

const languages = [
  { name: "Solidity", desc: "Ethereum, Polygon, BSC, Avalanche", color: "from-blue-500 to-indigo-500" },
  { name: "Rust", desc: "Solana (Anchor framework)", color: "from-orange-500 to-red-500" },
  { name: "Move", desc: "Sui, Aptos blockchains", color: "from-cyan-500 to-blue-500" }
];

const securityChecks = [
  "Reentrancy Protection",
  "Integer Overflow/Underflow Guards",
  "Access Control Implementation",
  "Front-running Prevention",
  "Oracle Manipulation Safeguards",
  "Flash Loan Attack Prevention",
  "Gas Limit DoS Protection",
  "Proper Event Emission",
  "Input Validation",
  "State Machine Logic Verification"
];

export default function SmartContractsPage() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black overflow-hidden transition-colors duration-300">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <main className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Hero */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-black/[0.08] dark:border-white/[0.08] rounded-full bg-white dark:bg-black mb-6">
            <Shield className="w-4 h-4 text-green-500" />
            <span className="text-sm font-semibold text-black/70 dark:text-white/70">
              Smart Contract Development
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-black dark:text-white mb-8 leading-tight">
            Secure, Audited <br />Smart Contracts
          </h1>
          <p className="text-xl sm:text-2xl text-black/50 dark:text-white/50 max-w-3xl mx-auto font-light leading-relaxed mb-12">
            Expert blockchain developers building production-ready smart contracts in Solidity, Rust, and Move. Security-first, gas-optimized, fully tested.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/hire-us">
              <button className="px-12 h-14 bg-black dark:bg-white text-white dark:text-black text-sm font-semibold tracking-wide rounded-full hover:scale-[1.02] transition-transform shadow-lg">
                Hire Us
              </button>
            </Link>
            <Link href="/resources">
              <button className="px-12 h-14 border border-black/20 dark:border-white/20 text-black dark:text-white text-sm font-semibold tracking-wide rounded-full hover:scale-[1.02] hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-all flex items-center justify-center gap-2">
                Free Security Checklist
                <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </div>

        {/* Contract Types */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-black text-black dark:text-white mb-8 text-center">
            Smart Contracts We Build
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {contractTypes.map((type, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 border border-black/[0.08] dark:border-white/[0.08] rounded-xl bg-white dark:bg-black hover:border-black/20 dark:hover:border-white/20 transition-all"
              >
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-black dark:text-white font-medium">{type}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-black text-black dark:text-white mb-12 text-center">
            Multi-Chain Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {languages.map((lang, index) => (
              <div
                key={index}
                className="p-8 border border-black/[0.08] dark:border-white/[0.08] rounded-2xl bg-white dark:bg-black hover:border-black/20 dark:hover:border-white/20 transition-all"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${lang.color} mb-4`}></div>
                <h3 className="text-2xl font-black text-black dark:text-white mb-2">
                  {lang.name}
                </h3>
                <p className="text-black/60 dark:text-white/60">
                  {lang.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-black text-black dark:text-white mb-12 text-center">
            Why Our Smart Contracts Stand Out
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="p-6 border border-black/[0.08] dark:border-white/[0.08] rounded-2xl bg-white dark:bg-black hover:border-black/20 dark:hover:border-white/20 transition-all"
                >
                  <Icon className="w-8 h-8 text-green-500 mb-4" />
                  <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-black/70 dark:text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Security Checklist */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-black text-black dark:text-white mb-8 text-center">
            Our Security Checklist
          </h2>
          <p className="text-center text-black/60 dark:text-white/60 mb-8 max-w-2xl mx-auto">
            Every smart contract we build is checked against these critical security measures:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {securityChecks.map((check, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-3 border border-black/[0.08] dark:border-white/[0.08] rounded-lg bg-white dark:bg-black"
              >
                <Shield className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-sm text-black/80 dark:text-white/80">{check}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-black text-black dark:text-white mb-12 text-center">
            Development Process
          </h2>
          <div className="space-y-6">
            {[
              { step: "1", title: "Requirements & Design", desc: "We analyze your needs and design contract architecture with security in mind from day one." },
              { step: "2", title: "Development & Testing", desc: "Write clean, efficient code with comprehensive unit and integration tests." },
              { step: "3", title: "Security Audit", desc: "Internal code review checking for vulnerabilities, gas optimization, and best practices." },
              { step: "4", title: "Deployment & Verification", desc: "Deploy to testnet/mainnet, verify on block explorers, and provide complete documentation." }
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-6 p-6 border border-black/[0.08] dark:border-white/[0.08] rounded-2xl bg-white dark:bg-black hover:border-black/20 dark:hover:border-white/20 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-xl flex-shrink-0">
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
            Need Smart Contract Development?
          </h2>
          <p className="text-xl text-black/60 dark:text-white/60 mb-8 max-w-2xl mx-auto">
            Get secure, audited smart contracts from experienced blockchain developers. 2-4 week delivery.
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
