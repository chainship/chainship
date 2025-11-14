"use client";

import { useState } from "react";
import { Zap, Send, CheckCircle, AlertCircle, ChevronDown, Check } from "lucide-react";
import * as Select from "@radix-ui/react-select";

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

  const handleSelectChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
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
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 dark:bg-white/5 rounded-full mb-6">
            <Zap size={16} className="text-black dark:text-white" />
            <span className="text-sm font-medium text-black dark:text-white">Fast turnaround guaranteed</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-black dark:text-white mb-8">
            Get Your Quote
          </h1>
          <p className="text-xl sm:text-2xl text-black/50 dark:text-white/50 max-w-3xl mx-auto font-light">
            Tell us about your Web3 project and we'll get back to you within 24 hours with a detailed quote.
          </p>
        </div>

        {/* Quote Form */}
        <div className="border border-black/[0.08] dark:border-white/[0.08] rounded-2xl p-6 sm:p-8 md:p-12 backdrop-blur-sm">
          <form className="space-y-8" onSubmit={handleSubmit}>
            {status.message && (
              <div className="p-4 rounded-lg border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] text-black dark:text-white flex items-center gap-2">
                {status.type === "success" ? (
                  <CheckCircle size={20} className="text-accent flex-shrink-0" />
                ) : (
                  <AlertCircle size={20} className="text-accent flex-shrink-0" />
                )}
                <span>{status.message}</span>
              </div>
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
                  className="w-full px-4 py-3 border border-black/[0.08] dark:border-white/[0.08] rounded-lg bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:border-black/20 dark:focus:border-white/20 transition-all"
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
                  className="w-full px-4 py-3 border border-black/[0.08] dark:border-white/[0.08] rounded-lg bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:border-black/20 dark:focus:border-white/20 transition-all"
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
                  className="w-full px-4 py-3 border border-black/[0.08] dark:border-white/[0.08] rounded-lg bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:border-black/20 dark:focus:border-white/20 transition-all"
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
                  className="w-full px-4 py-3 border border-black/[0.08] dark:border-white/[0.08] rounded-lg bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:border-black/20 dark:focus:border-white/20 transition-all"
                  placeholder="@yourusername"
                />
              </div>
            </div>

            {/* Project Type */}
            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-black dark:text-white mb-2">
                Project Type *
              </label>
              <Select.Root value={formData.projectType} onValueChange={(value) => handleSelectChange('projectType', value)} required>
                <Select.Trigger className="w-full px-4 py-3 border border-black/[0.08] dark:border-white/[0.08] rounded-lg bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:border-black/20 dark:focus:border-white/20 transition-all flex items-center justify-between hover:border-black/20 dark:hover:border-white/20">
                  <Select.Value placeholder="Select project type" />
                  <Select.Icon>
                    <ChevronDown className="w-4 h-4" />
                  </Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                  <Select.Content className="overflow-hidden bg-white dark:bg-black border border-black/[0.08] dark:border-white/[0.08] rounded-lg shadow-lg z-50">
                    <Select.Viewport className="p-1">
                      <Select.Item value="dex" className="relative flex items-center px-8 py-2.5 text-sm text-black dark:text-white rounded cursor-pointer hover:bg-black/[0.05] dark:hover:bg-white/[0.05] focus:bg-black/[0.05] dark:focus:bg-white/[0.05] outline-none">
                        <Select.ItemIndicator className="absolute left-2">
                          <Check className="w-4 h-4" />
                        </Select.ItemIndicator>
                        <Select.ItemText>DEX / AMM Platform</Select.ItemText>
                      </Select.Item>
                      <Select.Item value="dapp" className="relative flex items-center px-8 py-2.5 text-sm text-black dark:text-white rounded cursor-pointer hover:bg-black/[0.05] dark:hover:bg-white/[0.05] focus:bg-black/[0.05] dark:focus:bg-white/[0.05] outline-none">
                        <Select.ItemIndicator className="absolute left-2">
                          <Check className="w-4 h-4" />
                        </Select.ItemIndicator>
                        <Select.ItemText>dApp Development</Select.ItemText>
                      </Select.Item>
                      <Select.Item value="nft-analytics" className="relative flex items-center px-8 py-2.5 text-sm text-black dark:text-white rounded cursor-pointer hover:bg-black/[0.05] dark:hover:bg-white/[0.05] focus:bg-black/[0.05] dark:focus:bg-white/[0.05] outline-none">
                        <Select.ItemIndicator className="absolute left-2">
                          <Check className="w-4 h-4" />
                        </Select.ItemIndicator>
                        <Select.ItemText>NFT Analytics Platform</Select.ItemText>
                      </Select.Item>
                      <Select.Item value="nft-marketplace" className="relative flex items-center px-8 py-2.5 text-sm text-black dark:text-white rounded cursor-pointer hover:bg-black/[0.05] dark:hover:bg-white/[0.05] focus:bg-black/[0.05] dark:focus:bg-white/[0.05] outline-none">
                        <Select.ItemIndicator className="absolute left-2">
                          <Check className="w-4 h-4" />
                        </Select.ItemIndicator>
                        <Select.ItemText>NFT Marketplace</Select.ItemText>
                      </Select.Item>
                      <Select.Item value="smart-contract" className="relative flex items-center px-8 py-2.5 text-sm text-black dark:text-white rounded cursor-pointer hover:bg-black/[0.05] dark:hover:bg-white/[0.05] focus:bg-black/[0.05] dark:focus:bg-white/[0.05] outline-none">
                        <Select.ItemIndicator className="absolute left-2">
                          <Check className="w-4 h-4" />
                        </Select.ItemIndicator>
                        <Select.ItemText>Smart Contract Development</Select.ItemText>
                      </Select.Item>
                      <Select.Item value="token" className="relative flex items-center px-8 py-2.5 text-sm text-black dark:text-white rounded cursor-pointer hover:bg-black/[0.05] dark:hover:bg-white/[0.05] focus:bg-black/[0.05] dark:focus:bg-white/[0.05] outline-none">
                        <Select.ItemIndicator className="absolute left-2">
                          <Check className="w-4 h-4" />
                        </Select.ItemIndicator>
                        <Select.ItemText>Token Launch & Integration</Select.ItemText>
                      </Select.Item>
                      <Select.Item value="dao" className="relative flex items-center px-8 py-2.5 text-sm text-black dark:text-white rounded cursor-pointer hover:bg-black/[0.05] dark:hover:bg-white/[0.05] focus:bg-black/[0.05] dark:focus:bg-white/[0.05] outline-none">
                        <Select.ItemIndicator className="absolute left-2">
                          <Check className="w-4 h-4" />
                        </Select.ItemIndicator>
                        <Select.ItemText>DAO Platform</Select.ItemText>
                      </Select.Item>
                      <Select.Item value="landing" className="relative flex items-center px-8 py-2.5 text-sm text-black dark:text-white rounded cursor-pointer hover:bg-black/[0.05] dark:hover:bg-white/[0.05] focus:bg-black/[0.05] dark:focus:bg-white/[0.05] outline-none">
                        <Select.ItemIndicator className="absolute left-2">
                          <Check className="w-4 h-4" />
                        </Select.ItemIndicator>
                        <Select.ItemText>Landing Page/Website</Select.ItemText>
                      </Select.Item>
                      <Select.Item value="other" className="relative flex items-center px-8 py-2.5 text-sm text-black dark:text-white rounded cursor-pointer hover:bg-black/[0.05] dark:hover:bg-white/[0.05] focus:bg-black/[0.05] dark:focus:bg-white/[0.05] outline-none">
                        <Select.ItemIndicator className="absolute left-2">
                          <Check className="w-4 h-4" />
                        </Select.ItemIndicator>
                        <Select.ItemText>Other</Select.ItemText>
                      </Select.Item>
                    </Select.Viewport>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>
            </div>

            {/* Budget Range */}
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-black dark:text-white mb-2">
                Budget Range *
              </label>
              <Select.Root value={formData.budget} onValueChange={(value) => handleSelectChange('budget', value)} required>
                <Select.Trigger className="w-full px-4 py-3 border border-black/[0.08] dark:border-white/[0.08] rounded-lg bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:border-black/20 dark:focus:border-white/20 transition-all flex items-center justify-between hover:border-black/20 dark:hover:border-white/20">
                  <Select.Value placeholder="Select budget range" />
                  <Select.Icon>
                    <ChevronDown className="w-4 h-4" />
                  </Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                  <Select.Content className="overflow-hidden bg-white dark:bg-black border border-black/[0.08] dark:border-white/[0.08] rounded-lg shadow-lg z-50">
                    <Select.Viewport className="p-1">
                      <Select.Item value="mvp-99" className="relative flex items-center px-8 py-2.5 text-sm text-black dark:text-white rounded cursor-pointer hover:bg-black/[0.05] dark:hover:bg-white/[0.05] focus:bg-black/[0.05] dark:focus:bg-white/[0.05] outline-none">
                        <Select.ItemIndicator className="absolute left-2">
                          <Check className="w-4 h-4" />
                        </Select.ItemIndicator>
                        <Select.ItemText>MVP Launch — $99</Select.ItemText>
                      </Select.Item>
                      <Select.Item value="full-500" className="relative flex items-center px-8 py-2.5 text-sm text-black dark:text-white rounded cursor-pointer hover:bg-black/[0.05] dark:hover:bg-white/[0.05] focus:bg-black/[0.05] dark:focus:bg-white/[0.05] outline-none">
                        <Select.ItemIndicator className="absolute left-2">
                          <Check className="w-4 h-4" />
                        </Select.ItemIndicator>
                        <Select.ItemText>Full Product — $500+</Select.ItemText>
                      </Select.Item>
                      <Select.Item value="custom-1000" className="relative flex items-center px-8 py-2.5 text-sm text-black dark:text-white rounded cursor-pointer hover:bg-black/[0.05] dark:hover:bg-white/[0.05] focus:bg-black/[0.05] dark:focus:bg-white/[0.05] outline-none">
                        <Select.ItemIndicator className="absolute left-2">
                          <Check className="w-4 h-4" />
                        </Select.ItemIndicator>
                        <Select.ItemText>Custom Support — $1,000+</Select.ItemText>
                      </Select.Item>
                      <Select.Item value="enterprise" className="relative flex items-center px-8 py-2.5 text-sm text-black dark:text-white rounded cursor-pointer hover:bg-black/[0.05] dark:hover:bg-white/[0.05] focus:bg-black/[0.05] dark:focus:bg-white/[0.05] outline-none">
                        <Select.ItemIndicator className="absolute left-2">
                          <Check className="w-4 h-4" />
                        </Select.ItemIndicator>
                        <Select.ItemText>Enterprise (Custom Quote)</Select.ItemText>
                      </Select.Item>
                      <Select.Item value="not-sure" className="relative flex items-center px-8 py-2.5 text-sm text-black dark:text-white rounded cursor-pointer hover:bg-black/[0.05] dark:hover:bg-white/[0.05] focus:bg-black/[0.05] dark:focus:bg-white/[0.05] outline-none">
                        <Select.ItemIndicator className="absolute left-2">
                          <Check className="w-4 h-4" />
                        </Select.ItemIndicator>
                        <Select.ItemText>Not sure yet</Select.ItemText>
                      </Select.Item>
                    </Select.Viewport>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>
            </div>

            {/* Timeline */}
            <div>
              <label htmlFor="timeline" className="block text-sm font-medium text-black dark:text-white mb-2">
                Timeline *
              </label>
              <Select.Root value={formData.timeline} onValueChange={(value) => handleSelectChange('timeline', value)} required>
                <Select.Trigger className="w-full px-4 py-3 border border-black/[0.08] dark:border-white/[0.08] rounded-lg bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:border-black/20 dark:focus:border-white/20 transition-all flex items-center justify-between hover:border-black/20 dark:hover:border-white/20">
                  <Select.Value placeholder="Select timeline" />
                  <Select.Icon>
                    <ChevronDown className="w-4 h-4" />
                  </Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                  <Select.Content className="overflow-hidden bg-white dark:bg-black border border-black/[0.08] dark:border-white/[0.08] rounded-lg shadow-lg z-50">
                    <Select.Viewport className="p-1">
                      <Select.Item value="2-3-weeks" className="relative flex items-center px-8 py-2.5 text-sm text-black dark:text-white rounded cursor-pointer hover:bg-black/[0.05] dark:hover:bg-white/[0.05] focus:bg-black/[0.05] dark:focus:bg-white/[0.05] outline-none">
                        <Select.ItemIndicator className="absolute left-2">
                          <Check className="w-4 h-4" />
                        </Select.ItemIndicator>
                        <Select.ItemText>2-3 weeks (MVP Launch)</Select.ItemText>
                      </Select.Item>
                      <Select.Item value="4-6-weeks" className="relative flex items-center px-8 py-2.5 text-sm text-black dark:text-white rounded cursor-pointer hover:bg-black/[0.05] dark:hover:bg-white/[0.05] focus:bg-black/[0.05] dark:focus:bg-white/[0.05] outline-none">
                        <Select.ItemIndicator className="absolute left-2">
                          <Check className="w-4 h-4" />
                        </Select.ItemIndicator>
                        <Select.ItemText>4-6 weeks (Full Product)</Select.ItemText>
                      </Select.Item>
                      <Select.Item value="2-3-months" className="relative flex items-center px-8 py-2.5 text-sm text-black dark:text-white rounded cursor-pointer hover:bg-black/[0.05] dark:hover:bg-white/[0.05] focus:bg-black/[0.05] dark:focus:bg-white/[0.05] outline-none">
                        <Select.ItemIndicator className="absolute left-2">
                          <Check className="w-4 h-4" />
                        </Select.ItemIndicator>
                        <Select.ItemText>2-3 Months</Select.ItemText>
                      </Select.Item>
                      <Select.Item value="3-6-months" className="relative flex items-center px-8 py-2.5 text-sm text-black dark:text-white rounded cursor-pointer hover:bg-black/[0.05] dark:hover:bg-white/[0.05] focus:bg-black/[0.05] dark:focus:bg-white/[0.05] outline-none">
                        <Select.ItemIndicator className="absolute left-2">
                          <Check className="w-4 h-4" />
                        </Select.ItemIndicator>
                        <Select.ItemText>3-6 Months</Select.ItemText>
                      </Select.Item>
                      <Select.Item value="flexible" className="relative flex items-center px-8 py-2.5 text-sm text-black dark:text-white rounded cursor-pointer hover:bg-black/[0.05] dark:hover:bg-white/[0.05] focus:bg-black/[0.05] dark:focus:bg-white/[0.05] outline-none">
                        <Select.ItemIndicator className="absolute left-2">
                          <Check className="w-4 h-4" />
                        </Select.ItemIndicator>
                        <Select.ItemText>Flexible</Select.ItemText>
                      </Select.Item>
                    </Select.Viewport>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>
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
                className="w-full px-4 py-3 border border-black/[0.08] dark:border-white/[0.08] rounded-lg bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:border-black/20 dark:focus:border-white/20 transition-all resize-none"
                placeholder="Tell us about your project: What are you building? What's the main goal? Any specific features or requirements?"
              />
            </div>

            {/* Blockchain */}
            <div>
              <label className="block text-sm font-medium text-black dark:text-white mb-3">
                Blockchain/Network (select all that apply)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {['Solana', 'Sui', 'Ethereum', 'Polygon', 'BSC', 'Arbitrum', 'Base', 'Avalanche', 'Other'].map((chain) => (
                  <label key={chain} className="flex items-center gap-2.5 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="blockchain"
                      value={chain.toLowerCase()}
                      checked={formData.blockchain.includes(chain.toLowerCase())}
                      onChange={handleChange}
                      className="w-4 h-4 rounded border-2 border-black/[0.08] dark:border-white/[0.08] checked:bg-black dark:checked:bg-white checked:border-black dark:checked:border-white transition-all cursor-pointer"
                    />
                    <span className="text-sm text-black/70 dark:text-white/70 group-hover:text-black dark:group-hover:text-white transition-colors">{chain}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Additional Info - removed to simplify */}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold text-base hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-black/10 dark:shadow-white/10"
            >
              {loading ? "Submitting..." : "Get Your Free Quote"}
            </button>

            <p className="text-sm text-center text-black/40 dark:text-white/40">
              We'll review your submission and get back to you within 24 hours with a detailed quote.
            </p>
          </form>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6">
            <div className="text-3xl font-bold text-black dark:text-white mb-2">24h</div>
            <div className="text-sm text-black/60 dark:text-white/60">Response Time</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-black dark:text-white mb-2">10+</div>
            <div className="text-sm text-black/60 dark:text-white/60">Projects Shipped</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-black dark:text-white mb-2">100%</div>
            <div className="text-sm text-black/60 dark:text-white/60">Remote Team</div>
          </div>
        </div>
      </main>
    </div>
  );
}
