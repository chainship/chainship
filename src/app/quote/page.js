"use client";

import { motion } from "framer-motion";
import { Zap, Send } from "lucide-react";

export default function QuotePage() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black overflow-hidden transition-colors duration-300">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <main className="relative z-10 w-full max-w-4xl mx-auto px-6 pt-32 pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 dark:bg-white/5 rounded-full mb-6">
            <Zap size={16} className="text-black dark:text-white" />
            <span className="text-sm font-medium text-black dark:text-white">Fast turnaround guaranteed</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-6">
            Get Your Quote
          </h1>
          <p className="text-xl text-black/60 dark:text-white/60 max-w-2xl mx-auto">
            Tell us about your Web3 project and we'll get back to you within 24 hours with a detailed quote.
          </p>
        </motion.div>

        {/* Quote Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border border-black/10 dark:border-white/10 rounded-lg p-8 md:p-12 backdrop-blur-sm"
        >
          <form className="space-y-8">
            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black dark:text-white mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-black/10 dark:border-white/10 rounded-lg bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:border-black/30 dark:focus:border-white/30 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black dark:text-white mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-black/10 dark:border-white/10 rounded-lg bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:border-black/30 dark:focus:border-white/30 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-black dark:text-white mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 border border-black/10 dark:border-white/10 rounded-lg bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:border-black/30 dark:focus:border-white/30 transition-colors"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label htmlFor="telegram" className="block text-sm font-medium text-black dark:text-white mb-2">
                  Telegram (optional)
                </label>
                <input
                  type="text"
                  id="telegram"
                  name="telegram"
                  className="w-full px-4 py-3 border border-black/10 dark:border-white/10 rounded-lg bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:border-black/30 dark:focus:border-white/30 transition-colors"
                  placeholder="@yourusername"
                />
              </div>
            </div>

            {/* Project Type */}
            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-black dark:text-white mb-2">
                Project Type *
              </label>
              <select
                id="projectType"
                name="projectType"
                required
                className="w-full px-4 py-3 border border-black/10 dark:border-white/10 rounded-lg bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:border-black/30 dark:focus:border-white/30 transition-colors"
              >
                <option value="">Select project type</option>
                <option value="web3-app">Web3 Application</option>
                <option value="smart-contract">Smart Contract Development</option>
                <option value="dapp">dApp Development</option>
                <option value="nft">NFT Platform/Marketplace</option>
                <option value="token">Token Launch & Integration</option>
                <option value="landing">Landing Page/Website</option>
                <option value="dao">DAO Platform</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Budget Range */}
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-black dark:text-white mb-2">
                Budget Range *
              </label>
              <select
                id="budget"
                name="budget"
                required
                className="w-full px-4 py-3 border border-black/10 dark:border-white/10 rounded-lg bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:border-black/30 dark:focus:border-white/30 transition-colors"
              >
                <option value="">Select budget range</option>
                <option value="5k-10k">$5K - $10K</option>
                <option value="10k-25k">$10K - $25K</option>
                <option value="25k-50k">$25K - $50K</option>
                <option value="50k-100k">$50K - $100K</option>
                <option value="100k+">$100K+</option>
                <option value="not-sure">Not sure yet</option>
              </select>
            </div>

            {/* Timeline */}
            <div>
              <label htmlFor="timeline" className="block text-sm font-medium text-black dark:text-white mb-2">
                Timeline *
              </label>
              <select
                id="timeline"
                name="timeline"
                required
                className="w-full px-4 py-3 border border-black/10 dark:border-white/10 rounded-lg bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:border-black/30 dark:focus:border-white/30 transition-colors"
              >
                <option value="">Select timeline</option>
                <option value="urgent">ASAP (1-2 weeks)</option>
                <option value="1-month">1 Month</option>
                <option value="2-3-months">2-3 Months</option>
                <option value="3-6-months">3-6 Months</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>

            {/* Project Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-black dark:text-white mb-2">
                Project Description *
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={6}
                className="w-full px-4 py-3 border border-black/10 dark:border-white/10 rounded-lg bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:border-black/30 dark:focus:border-white/30 transition-colors resize-none"
                placeholder="Tell us about your project: What are you building? What's the main goal? Any specific features or requirements?"
              />
            </div>

            {/* Blockchain */}
            <div>
              <label className="block text-sm font-medium text-black dark:text-white mb-3">
                Blockchain/Network (select all that apply)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {['Ethereum', 'Polygon', 'BSC', 'Solana', 'Arbitrum', 'Optimism', 'Base', 'Other'].map((chain) => (
                  <label key={chain} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="blockchain"
                      value={chain.toLowerCase()}
                      className="w-4 h-4 rounded border-black/20 dark:border-white/20"
                    />
                    <span className="text-sm text-black dark:text-white">{chain}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div>
              <label htmlFor="additional" className="block text-sm font-medium text-black dark:text-white mb-2">
                Additional Information
              </label>
              <textarea
                id="additional"
                name="additional"
                rows={4}
                className="w-full px-4 py-3 border border-black/10 dark:border-white/10 rounded-lg bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:border-black/30 dark:focus:border-white/30 transition-colors resize-none"
                placeholder="Any other details we should know? Existing codebase? Design assets? Team size?"
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              className="w-full px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Your Free Quote
              <Send size={20} />
            </motion.button>

            <p className="text-sm text-center text-black/40 dark:text-white/40">
              We'll review your submission and get back to you within 24 hours with a detailed quote.
            </p>
          </form>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid md:grid-cols-3 gap-6 text-center"
        >
          <div className="p-6">
            <div className="text-3xl font-bold text-black dark:text-white mb-2">24h</div>
            <div className="text-sm text-black/60 dark:text-white/60">Response Time</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-black dark:text-white mb-2">50+</div>
            <div className="text-sm text-black/60 dark:text-white/60">Projects Shipped</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-black dark:text-white mb-2">100%</div>
            <div className="text-sm text-black/60 dark:text-white/60">Remote Team</div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
