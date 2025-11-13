"use client";

import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Chen",
    role: "Founder, PHOTON",
    image: "AC",
    content: "Chainship delivered our dApp in record time. Their remote team was incredibly responsive and the quality exceeded our expectations.",
    rating: 5
  },
  {
    name: "Sarah Martinez",
    role: "CTO, NFT Marketplace",
    image: "SM",
    content: "Working with a remote team has never been easier. They understood our vision and brought it to life with cutting-edge Web3 technology.",
    rating: 5
  },
  {
    name: "Michael Park",
    role: "Product Lead, DAO Platform",
    image: "MP",
    content: "Fast, professional, and blockchain-savvy. The perfect combination for launching our governance platform on time and on budget.",
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h3 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-black dark:text-white mb-6">
          What Clients Say
        </h3>
        <p className="text-xl text-black/50 dark:text-white/50 font-light">
          Real feedback from real projects
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="group relative p-8 border border-black/[0.08] dark:border-white/[0.08] rounded-2xl backdrop-blur-sm bg-white dark:bg-black hover:border-black/20 dark:hover:border-white/20 cursor-pointer transition-all"
          >
            <Quote className="absolute top-4 right-4 w-8 h-8 text-black/10 dark:text-white/10" />
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black font-bold transition-colors">
                {testimonial.image}
              </div>
              <div>
                <h4 className="font-bold text-black dark:text-white transition-colors">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-black/60 dark:text-white/60">
                  {testimonial.role}
                </p>
              </div>
            </div>

            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-black dark:fill-white text-black dark:text-white" />
              ))}
            </div>

            <p className="text-black/70 dark:text-white/70 text-sm leading-relaxed">
              "{testimonial.content}"
            </p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
