"use client";

import { useState } from "react";
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
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-black dark:text-white mb-8">
            Get in Touch
          </h1>
          <p className="text-xl sm:text-2xl text-black/50 dark:text-white/50 max-w-3xl mx-auto font-light">
            Ready to start your Web3 project? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {status.message && (
                <div className="p-4 rounded-lg border border-accent bg-white dark:bg-black text-black dark:text-white flex items-center gap-2">
                  {status.type === "success" ? (
                    <CheckCircle size={20} className="text-accent flex-shrink-0" />
                  ) : (
                    <AlertCircle size={20} className="text-accent flex-shrink-0" />
                  )}
                  <span>{status.message}</span>
                </div>
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

              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-black/10 dark:shadow-white/10"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="border border-accent rounded-lg p-8">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-6">
                Other Ways to Reach Us
              </h3>
              
              <div className="space-y-6">
                <a
                  href="mailto:chainship@yahoo.com"
                  className="flex items-center gap-4 text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
                >
                  <div className="w-12 h-12 rounded-full border border-accent flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-black/40 dark:text-white/40">Email</div>
                    <div className="font-medium">chainship@yahoo.com</div>
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
          </div>
        </div>
      </main>
    </div>
  );
}
