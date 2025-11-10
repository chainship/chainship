import { Outfit } from "next/font/google";
import "./globals.css";
import ClientLayout from "./components/ClientLayout";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://chainship.in'),
  title: {
    default: "Chainship - Remote-First Web3 Development Team | Blockchain Developers",
    template: "%s | Chainship - Web3 Development"
  },
  description: "Chainship is a remote-first Web3 development team specializing in dApps, smart contracts, NFT platforms, and DeFi protocols. Ship your blockchain project in 2-4 weeks with our expert developers.",
  keywords: [
    "Chainship",
    "Web3 development",
    "blockchain developers",
    "remote Web3 team",
    "dApp development",
    "smart contract development",
    "NFT platform development",
    "DeFi development",
    "Ethereum developers",
    "Solidity developers",
    "blockchain consulting",
    "crypto development agency",
    "Web3 agency",
    "decentralized app developers",
    "remote blockchain team"
  ],
  authors: [{ name: "Chainship Team" }],
  creator: "Chainship",
  publisher: "Chainship",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chainship.in',
    title: 'Chainship - Remote-First Web3 Development Team',
    description: 'Expert blockchain developers building dApps, smart contracts, and DeFi protocols. Remote-first team, 2-4 week sprints, production-ready code.',
    siteName: 'Chainship',
    images: [
      {
        url: '/logo-transparent-bg.png',
        width: 1200,
        height: 630,
        alt: 'Chainship - Web3 Development Team',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chainship - Remote-First Web3 Development Team',
    description: 'Expert blockchain developers building dApps, smart contracts, and DeFi protocols. Remote-first team, 2-4 week sprints.',
    creator: '@chainship',
    images: ['/logo-transparent-bg.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/favicon/android-chrome-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/favicon/android-chrome-512x512.png' }
    ]
  },
  manifest: '/favicon/site.webmanifest',
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: 'https://chainship.in',
  },
  category: 'technology',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://chainship.in" />
        <meta name="theme-color" content="#ffffff" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Chainship",
              "url": "https://chainship.in",
              "logo": "https://chainship.in/logo-transparent-bg.png",
              "description": "Remote-first Web3 development team specializing in blockchain solutions, dApps, smart contracts, and DeFi protocols.",
              "sameAs": [
                "https://twitter.com/chainship",
                "https://github.com/chainship",
                "https://linkedin.com/company/chainship"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "hello@chainship.in",
                "contactType": "Customer Service"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "50"
              },
              "offers": {
                "@type": "Offer",
                "description": "Web3 development services including dApps, smart contracts, NFT platforms, and DeFi protocols"
              }
            })
          }}
        />
      </head>
      <body
        className={`${outfit.variable} antialiased font-sans`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
