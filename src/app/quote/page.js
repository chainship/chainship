"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Send, CheckCircle, AlertCircle } from "lucide-react";

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
    blockchain: [],
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        blockchain: checked
          ? [...prev.blockchain, value]
          : prev.blockchain.filter((item) => item !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: data.message || "Quote request submitted successfully!",
        });
        setFormData({
          name: "",
          email: "",
          company: "",
          projectType: "",
          budget: "",
          timeline: "",
          description: "",
          blockchain: [],
        });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Failed to submit quote request. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setLoading(false);
    }
  };
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
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-black dark:text-white mb-6 px-4">
            Get Your Quote
          </h1>
          <p className="text-lg sm:text-xl text-black/60 dark:text-white/60 max-w-2xl mx-auto px-4">
            Tell us about your Web3 project and we'll get back to you within 24 hours with a detailed quote.
          </p>
        </motion.div>

        {/* Quote Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border border-accent rounded-lg p-8 md:p-12 backdrop-blur-sm"
        >
          <form className="space-y-8" onSubmit={handleSubmit}>
            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg border ${
                  status.type === "success"
                    ? "border-green-500 bg-green-50 dark:bg-green-950/20 text-green-700 dark:text-green-400"
                    : "border-red-500 bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-400"
                } flex items-center gap-2`}
              >
                {status.type === "success" ? (
                  <CheckCircle size={20} />
                ) : (
                  <AlertCircle size={20} />
                )}
                <span>{status.message}</span>
              </motion.div>
            )}

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
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-accent rounded-lg bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:shadow-accent transition-all"
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
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-accent rounded-lg bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:shadow-accent transition-all"
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
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-accent rounded-lg bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:shadow-accent transition-all"
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
                  className="w-full px-4 py-3 border border-accent rounded-lg bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:shadow-accent transition-all"
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
                value={formData.projectType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-accent rounded-lg bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:shadow-accent transition-all"
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
                value={formData.budget}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-accent rounded-lg bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:shadow-accent transition-all"
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
                value={formData.timeline}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-accent rounded-lg bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:shadow-accent transition-all"
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
                value={formData.description}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-accent rounded-lg bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:shadow-accent transition-all resize-none"
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
                      checked={formData.blockchain.includes(chain.toLowerCase())}
                      onChange={handleChange}
                      className="w-4 h-4 rounded border-black/20 dark:border-white/20"
                    />
                    <span className="text-sm text-black dark:text-white">{chain}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Additional Info - removed to simplify */}

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={loading}
              className="w-full px-8 py-4 border-2 border-accent text-black dark:text-white rounded-lg font-bold text-lg hover:shadow-accent transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
            >
              {loading ? "Submitting..." : "Get Your Free Quote"}
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
