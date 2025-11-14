"use client";

import Link from "next/link";
import { Twitter, Github, Linkedin, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-white dark:bg-black border-t border-black/10 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Chainship Logo" 
                className="w-8 h-8 dark:invert"
              />
              <h3 className="text-2xl font-bold text-black dark:text-white">
                CHAINSHIP
              </h3>
            </div>
            <p className="text-black/60 dark:text-white/60 mb-6 max-w-sm">
              Remote-first Web3 development team. We build blockchain applications across EVM, Solana, Sui and emerging chains — smart contracts, dApps, and full-stack integrations.
            </p>
            <div className="flex gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-black/[0.08] dark:border-white/[0.08] hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-all text-black dark:text-white"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-black/[0.08] dark:border-white/[0.08] hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-all text-black dark:text-white"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-black/[0.08] dark:border-white/[0.08] hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-all text-black dark:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-black/[0.08] dark:border-white/[0.08] hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-all text-black dark:text-white"
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
                <Link href="/pricing" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors text-sm">
                  Pricing
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
                <Link href="/faq" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/quote" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors text-sm">
                  Get Quote
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors text-sm">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors text-sm">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-black/5 dark:border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-black/40 dark:text-white/40">
              © {new Date().getFullYear()} Chainship. All rights reserved. Registered in India.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/legal" className="text-sm text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors">
                Legal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
