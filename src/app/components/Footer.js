"use client";

import Link from "next/link";
import { Twitter, Github, Linkedin, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-black/[0.03] dark:bg-black border-t border-black/5 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
              CHAINSHIP
            </h3>
            <p className="text-black/60 dark:text-white/60 mb-6 max-w-sm">
              Remote-first Web3 development team. We build blockchain applications, dApps, and smart contract integrations at lightning speed.
            </p>
            <div className="flex gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-accent hover:shadow-accent transition-all text-black dark:text-white"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-accent hover:shadow-accent transition-all text-black dark:text-white"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-accent hover:shadow-accent transition-all text-black dark:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-accent hover:shadow-accent transition-all text-black dark:text-white"
                aria-label="Discord"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-black dark:text-white mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors text-sm">
                  Web3 Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors text-sm">
                  Smart Contracts
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors text-sm">
                  dApp Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors text-sm">
                  Token Integration
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors text-sm">
                  NFT Platforms
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors text-sm">
                  Blockchain Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-black dark:text-white mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/quote" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors text-sm">
                  Get Quote
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors text-sm">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-black dark:text-white mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/docs" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors text-sm">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors text-sm">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors text-sm">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors text-sm">
                  Terms & Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-black/5 dark:border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-black/40 dark:text-white/40">
              © {new Date().getFullYear()} Chainship. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-sm text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
