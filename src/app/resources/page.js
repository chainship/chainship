"use client";

import { Download, FileText, Shield, CheckSquare, Code, Book, Mail } from "lucide-react";
import { useState } from "react";
import NewsletterSignup from "../components/NewsletterSignup";

const resources = [
  {
    icon: CheckSquare,
    title: "Blockchain Project Planning Checklist",
    description: "A comprehensive 50-point checklist covering everything from ideation to mainnet launch. Includes technical requirements, security considerations, and go-to-market strategy.",
    format: "PDF",
    pages: "12 pages",
    downloadUrl: "#",
    featured: true
  },
  {
    icon: Shield,
    title: "Smart Contract Security Audit Template",
    description: "Professional security audit template used by our team. Includes vulnerability checklists, testing procedures, and reporting formats for Solidity and Rust contracts.",
    format: "DOCX + PDF",
    pages: "24 pages",
    downloadUrl: "#",
    featured: true
  },
  {
    icon: Code,
    title: "DeFi Protocol Starter Kit",
    description: "Boilerplate smart contracts for common DeFi patterns: lending pools, staking, liquidity mining, and governance. Includes Hardhat setup and comprehensive tests.",
    format: "GitHub Repo",
    pages: "Full Project",
    downloadUrl: "https://github.com/chainship/defi-starter-kit",
    featured: true
  },
  {
    icon: FileText,
    title: "Gas Optimization Best Practices",
    description: "100+ proven techniques to reduce smart contract gas costs. Real examples showing before/after comparisons with savings calculations.",
    format: "PDF",
    pages: "18 pages",
    downloadUrl: "#"
  },
  {
    icon: Book,
    title: "NFT Marketplace Development Guide",
    description: "Step-by-step guide to building NFT marketplaces. Covers smart contracts (ERC-721/1155), IPFS integration, frontend development, and deployment strategies.",
    format: "PDF + Code Samples",
    pages: "32 pages",
    downloadUrl: "#"
  },
  {
    icon: Shield,
    title: "Web3 Security Incident Response Playbook",
    description: "Crisis management guide for smart contract exploits. Includes response procedures, communication templates, and post-mortem frameworks.",
    format: "PDF",
    pages: "15 pages",
    downloadUrl: "#"
  },
  {
    icon: Code,
    title: "Solana Program Examples Collection",
    description: "10 production-ready Solana programs in Rust/Anchor: token vesting, escrow, voting, multisig, and more. Each with full tests and deployment scripts.",
    format: "GitHub Repo",
    pages: "Full Project",
    downloadUrl: "https://github.com/chainship/solana-examples"
  },
  {
    icon: CheckSquare,
    title: "DAO Governance Framework Template",
    description: "Complete governance framework for decentralized organizations. Includes proposal templates, voting mechanisms, treasury management, and role definitions.",
    format: "PDF + DOCX",
    pages: "28 pages",
    downloadUrl: "#"
  },
  {
    icon: FileText,
    title: "Token Economics Design Canvas",
    description: "Visual framework for designing tokenomics. Covers supply models, distribution strategies, utility mechanisms, and incentive alignment.",
    format: "PDF + Figma",
    pages: "8 pages",
    downloadUrl: "#"
  }
];

export default function ResourcesPage() {
  const [email, setEmail] = useState("");
  const [selectedResource, setSelectedResource] = useState(null);
  const [showDownloadForm, setShowDownloadForm] = useState(false);

  const handleDownload = (resource) => {
    if (resource.downloadUrl.startsWith('http')) {
      // External link (like GitHub)
      window.open(resource.downloadUrl, '_blank');
    } else {
      // Gated resource - show email form
      setSelectedResource(resource);
      setShowDownloadForm(true);
    }
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!selectedResource) return;
    
    // In production, this would:
    // 1. Submit email to your mailing list
    // 2. Send download link via email
    // 3. Track the conversion
    alert(`Download link for "${selectedResource.title}" has been sent to ${email}!`);
    setEmail("");
    setShowDownloadForm(false);
    setSelectedResource(null);
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-black overflow-hidden transition-colors duration-300">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <main className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-black dark:text-white mb-8">
            Free Web3 Resources
          </h1>
          <p className="text-xl sm:text-2xl text-black/50 dark:text-white/50 max-w-3xl mx-auto font-light leading-relaxed">
            Guides, templates, and tools to help you build better blockchain applications. All free, no strings attached.
          </p>
        </div>

        {/* Featured Resources */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
            Featured Downloads
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {resources.filter(r => r.featured).map((resource, index) => {
              const Icon = resource.icon;
              return (
                <div
                  key={index}
                  className="group p-8 border-2 border-black/[0.12] dark:border-white/[0.12] rounded-2xl bg-gradient-to-br from-black/[0.02] to-transparent dark:from-white/[0.02] hover:border-black/20 dark:hover:border-white/20 transition-all"
                >
                  <Icon className="w-10 h-10 text-black dark:text-white mb-4" />
                  <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-black/60 dark:text-white/60 text-sm mb-4 leading-relaxed">
                    {resource.description}
                  </p>
                  <div className="flex items-center gap-3 mb-4 text-sm text-black/50 dark:text-white/50">
                    <span className="px-3 py-1 border border-black/[0.08] dark:border-white/[0.08] rounded-full">
                      {resource.format}
                    </span>
                    <span>{resource.pages}</span>
                  </div>
                  <button
                    onClick={() => handleDownload(resource)}
                    className="w-full px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
                  >
                    <Download size={18} />
                    Download Free
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* All Resources */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
            All Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {resources.filter(r => !r.featured).map((resource, index) => {
              const Icon = resource.icon;
              return (
                <div
                  key={index}
                  className="group p-6 border border-black/[0.08] dark:border-white/[0.08] rounded-2xl bg-white dark:bg-black hover:border-black/20 dark:hover:border-white/20 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <Icon className="w-8 h-8 text-black dark:text-white flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-black dark:text-white mb-2">
                        {resource.title}
                      </h3>
                      <p className="text-black/60 dark:text-white/60 text-sm mb-3 leading-relaxed">
                        {resource.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-black/50 dark:text-white/50">
                          <span className="px-2 py-1 border border-black/[0.08] dark:border-white/[0.08] rounded">
                            {resource.format}
                          </span>
                          <span>{resource.pages}</span>
                        </div>
                        <button
                          onClick={() => handleDownload(resource)}
                          className="px-4 py-2 text-sm bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:scale-[1.02] transition-transform flex items-center gap-2"
                        >
                          <Download size={14} />
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Newsletter Section */}
        <NewsletterSignup />

        {/* Download Modal */}
        {showDownloadForm && selectedResource && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
            <div className="bg-white dark:bg-black border border-black/[0.08] dark:border-white/[0.08] rounded-2xl p-8 max-w-md w-full">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                Get Your Free Download
              </h3>
              <p className="text-black/60 dark:text-white/60 mb-6">
                Enter your email to receive "{selectedResource.title}" instantly.
              </p>
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-black/[0.08] dark:border-white/[0.08] rounded-lg bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:border-black/20 dark:focus:border-white/20 transition-all"
                />
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setShowDownloadForm(false)}
                    className="flex-1 px-6 py-3 border border-black/[0.08] dark:border-white/[0.08] rounded-lg text-black dark:text-white font-semibold hover:border-black/20 dark:hover:border-white/20 transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
                  >
                    <Mail size={18} />
                    Send Link
                  </button>
                </div>
              </form>
              <p className="text-xs text-black/50 dark:text-white/50 mt-4 text-center">
                We'll also send you weekly Web3 dev tips. Unsubscribe anytime.
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
