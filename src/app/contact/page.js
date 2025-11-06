"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Twitter, Github, Send } from "lucide-react";

export default function ContactPage() {
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
          <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-black/60 dark:text-white/60 max-w-2xl mx-auto">
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
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black dark:text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-black/10 dark:border-white/10 rounded-lg bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:border-black/30 dark:focus:border-white/30 transition-colors"
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
                  className="w-full px-4 py-3 border border-black/10 dark:border-white/10 rounded-lg bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:border-black/30 dark:focus:border-white/30 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-black dark:text-white mb-2">
                  Company (optional)
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
                <label htmlFor="message" className="block text-sm font-medium text-black dark:text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-black/10 dark:border-white/10 rounded-lg bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:border-black/30 dark:focus:border-white/30 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
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
            <div className="border border-black/10 dark:border-white/10 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-6">
                Other Ways to Reach Us
              </h3>
              
              <div className="space-y-6">
                <a
                  href="mailto:hello@chainship.dev"
                  className="flex items-center gap-4 text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
                >
                  <div className="w-12 h-12 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-black/40 dark:text-white/40">Email</div>
                    <div className="font-medium">hello@chainship.dev</div>
                  </div>
                </a>

                <a
                  href="https://discord.gg/chainship"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
                >
                  <div className="w-12 h-12 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center">
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
                  <div className="w-12 h-12 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center">
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
                  <div className="w-12 h-12 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center">
                    <Github size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-black/40 dark:text-white/40">GitHub</div>
                    <div className="font-medium">@chainship</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="border border-black/10 dark:border-white/10 rounded-lg p-8">
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
