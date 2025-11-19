"use client";

import { useState } from "react";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";

export default function NewsletterSignup({ variant = "default" }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      // In a real implementation, this would call your newsletter API
      // For now, we'll simulate a successful subscription
      await new Promise(resolve => setTimeout(resolve, 1000));

      setStatus({
        type: "success",
        message: "Successfully subscribed! Check your email for confirmation.",
      });
      setEmail("");
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to subscribe. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  if (variant === "inline") {
    return (
      <div className="p-8 border border-black/[0.08] dark:border-white/[0.08] rounded-2xl bg-white dark:bg-black">
        <div className="flex items-center gap-3 mb-4">
          <Mail className="w-6 h-6 text-black dark:text-white" />
          <h3 className="text-xl font-bold text-black dark:text-white">
            Get Web3 Dev Tips
          </h3>
        </div>
        <p className="text-black/60 dark:text-white/60 mb-4">
          Weekly insights on blockchain development, smart contracts, and DeFi protocols.
        </p>
        <form onSubmit={handleSubmit} className="space-y-3">
          {status.message && (
            <div className={`p-3 rounded-lg border flex items-center gap-2 text-sm ${
              status.type === "success" 
                ? "border-green-500/20 bg-green-500/10 text-green-600 dark:text-green-400" 
                : "border-red-500/20 bg-red-500/10 text-red-600 dark:text-red-400"
            }`}>
              {status.type === "success" ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
              <span>{status.message}</span>
            </div>
          )}
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 border border-black/[0.08] dark:border-white/[0.08] rounded-lg bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:border-black/20 dark:focus:border-white/20 transition-all"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "..." : "Subscribe"}
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="w-full p-12 border border-black/[0.08] dark:border-white/[0.08] rounded-3xl bg-gradient-to-br from-black/[0.02] to-transparent dark:from-white/[0.02]">
      <div className="text-center mb-8">
        <Mail className="w-12 h-12 text-black dark:text-white mx-auto mb-4" />
        <h2 className="text-3xl sm:text-4xl font-black text-black dark:text-white mb-4">
          Stay Updated on Web3
        </h2>
        <p className="text-lg text-black/60 dark:text-white/60 max-w-2xl mx-auto">
          Get weekly insights on blockchain development, smart contract security, DeFi protocols, and industry trends.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        {status.message && (
          <div className={`p-4 rounded-lg border flex items-center gap-2 ${
            status.type === "success" 
              ? "border-green-500/20 bg-green-500/10 text-green-600 dark:text-green-400" 
              : "border-red-500/20 bg-red-500/10 text-red-600 dark:text-red-400"
          }`}>
            {status.type === "success" ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
            <span>{status.message}</span>
          </div>
        )}
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-6 py-4 border border-black/[0.08] dark:border-white/[0.08] rounded-full bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:border-black/20 dark:focus:border-white/20 transition-all"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {loading ? "Subscribing..." : "Subscribe Now"}
          </button>
        </div>
        <p className="text-sm text-black/50 dark:text-white/50 text-center">
          No spam. Unsubscribe anytime.
        </p>
      </form>
    </div>
  );
}
