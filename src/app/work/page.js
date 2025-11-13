"use client";

import { ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "DeFi Token Launch",
    client: "CryptoVentures Inc",
    challenge: "Launch a new DeFi token with a professional website and wallet integration in 2 weeks",
    solution: "Built a responsive landing page with live token stats, wallet connectivity, and smart contract integration",
    impact: "$2M raised in first week, 10K+ wallet connections",
    tech: ["Next.js", "ethers.js", "WalletConnect", "Vercel"],
    image: "/placeholder-project1.jpg" // You'll replace with actual images
  },
  {
    title: "NFT Marketplace dApp",
    client: "ArtChain Studios",
    challenge: "Create a full-featured NFT marketplace with minting, trading, and royalties",
    solution: "Developed a complete dApp with IPFS storage, OpenSea integration, and custom smart contracts",
    impact: "5000+ NFTs minted, $500K trading volume in first month",
    tech: ["React", "Solidity", "IPFS", "The Graph", "Hardhat"],
    image: "/placeholder-project2.jpg"
  },
  {
    title: "DAO Governance Platform",
    client: "BlockGov DAO",
    challenge: "Build a governance platform for community voting and proposal management",
    solution: "Full-stack dApp with proposal creation, voting mechanism, and treasury management",
    impact: "200+ active voters, 50+ proposals executed",
    tech: ["Next.js", "Snapshot", "Gnosis Safe", "Aragon"],
    image: "/placeholder-project3.jpg"
  },
  {
    title: "DEX Interface Redesign",
    client: "SwapProtocol",
    challenge: "Modern UI/UX for existing DEX smart contracts with multi-chain support",
    solution: "Clean, intuitive interface with real-time price feeds and cross-chain swaps",
    impact: "300% increase in daily active users, $10M+ daily volume",
    tech: ["React", "Web3-React", "1inch API", "TailwindCSS"],
    image: "/placeholder-project4.jpg"
  }
];

export default function WorkPage() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black overflow-hidden transition-colors duration-300">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <main className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-black dark:text-white mb-6">
            Our Work
          </h1>
          <p className="text-lg sm:text-xl text-black/60 dark:text-white/60 max-w-2xl mx-auto px-4">
            Real Web3 projects. Real results. See what we've shipped.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-accent rounded-lg overflow-hidden backdrop-blur-sm hover:shadow-accent transition-all"
            >
              {/* Project Image Placeholder */}
              <div className="w-full h-64 md:h-96 bg-gradient-to-br from-black/5 to-black/10 dark:from-white/5 dark:to-white/10 flex items-center justify-center">
                <span className="text-black/20 dark:text-white/20 text-4xl font-bold">
                  {project.title}
                </span>
              </div>

              <div className="p-8">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-black dark:text-white">
                    {project.title}
                  </h3>
                  <span className="text-sm text-black/50 dark:text-white/50">
                    {project.client}
                  </span>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-black/40 dark:text-white/40 mb-2">
                      Challenge
                    </h4>
                    <p className="text-sm text-black/70 dark:text-white/70">
                      {project.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-black/40 dark:text-white/40 mb-2">
                      Solution
                    </h4>
                    <p className="text-sm text-black/70 dark:text-white/70">
                      {project.solution}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-black/40 dark:text-white/40 mb-2">
                      Impact
                    </h4>
                    <p className="text-sm font-bold text-black dark:text-white">
                      {project.impact}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs border border-accent rounded-full text-black/70 dark:text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-sm font-bold text-black dark:text-white hover:gap-3 transition-all">
                  View Case Study <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-6 px-4">
            Your Project Could Be Next
          </h3>
          <button className="px-8 sm:px-12 py-4 sm:py-5 border-2 border-accent text-black dark:text-white text-xs sm:text-sm font-bold uppercase tracking-[0.2em] rounded-full hover:shadow-accent transition-all">
            Start Your Project
          </button>
        </div>
      </main>
    </div>
  );
}
