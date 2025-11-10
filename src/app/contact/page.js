"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Twitter, Github, Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
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
          message: "Message sent successfully! We'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
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

      <main className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-black dark:text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-lg sm:text-xl text-black/60 dark:text-white/60 max-w-2xl mx-auto px-4">
            Ready to start your Web3 project? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
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

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black dark:text-white mb-2">
                  Name
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
                  Email
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

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black dark:text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-accent rounded-lg bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:shadow-accent transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 border-2 border-accent text-black dark:text-white rounded-lg font-medium hover:shadow-accent transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
              >
                {loading ? "Sending..." : "Send Message"}
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="border border-accent rounded-lg p-8">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-6">
                Other Ways to Reach Us
              </h3>
              
              <div className="space-y-6">
                <a
                  href="mailto:hello@chainship.in"
                  className="flex items-center gap-4 text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
                >
                  <div className="w-12 h-12 rounded-full border border-accent flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-black/40 dark:text-white/40">Email</div>
                    <div className="font-medium">hello@chainship.in</div>
                  </div>
                </a>

                <a
                  href="https://discord.gg/chainship"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
                >
                  <div className="w-12 h-12 rounded-full border border-accent flex items-center justify-center">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-black/40 dark:text-white/40">Discord</div>
                    <div className="font-medium">Join our community</div>
                  </div>
                </a>

                <a
                  href="https://twitter.com/chainship"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
                >
                  <div className="w-12 h-12 rounded-full border border-accent flex items-center justify-center">
                    <Twitter size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-black/40 dark:text-white/40">Twitter</div>
                    <div className="font-medium">@chainship</div>
                  </div>
                </a>

                <a
                  href="https://github.com/chainship"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
                >
                  <div className="w-12 h-12 rounded-full border border-accent flex items-center justify-center">
                    <Github size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-black/40 dark:text-white/40">GitHub</div>
                    <div className="font-medium">@chainship</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="border border-accent rounded-lg p-8">
              <h3 className="text-xl font-bold text-black dark:text-white mb-4">
                Response Time
              </h3>
              <p className="text-black/60 dark:text-white/60 mb-4">
                We typically respond within 24 hours during business days.
              </p>
              <p className="text-sm text-black/40 dark:text-white/40">
                For urgent inquiries, please mention "URGENT" in your subject line.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
