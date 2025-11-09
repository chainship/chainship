"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Chen",
    role: "Founder, DeFi Protocol",
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h3 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
          What Our Clients Say
        </h3>
        <p className="text-lg text-black/50 dark:text-white/50">
          Real feedback from real Web3 builders
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ 
              y: -8, 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(236, 72, 153, 0.2)",
              borderColor: "rgba(236, 72, 153, 0.5)"
            }}
            className="group relative p-6 border border-black/10 dark:border-white/10 rounded-xl backdrop-blur-sm bg-white/50 dark:bg-black/50 cursor-pointer transition-all"
          >
            <Quote className="absolute top-4 right-4 w-8 h-8 text-black/10 dark:text-white/10 group-hover:text-pink-500/30 transition-colors" />
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-black dark:bg-white group-hover:bg-pink-500 transition-colors flex items-center justify-center text-white dark:text-black group-hover:text-white font-bold">
                {testimonial.image}
              </div>
              <div>
                <h4 className="font-bold text-black dark:text-white group-hover:text-pink-500 transition-colors">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-black/60 dark:text-white/60">
                  {testimonial.role}
                </p>
              </div>
            </div>

            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-black dark:fill-white text-black dark:text-white group-hover:fill-pink-500 group-hover:text-pink-500 transition-colors" />
              ))}
            </div>

            <p className="text-black/70 dark:text-white/70 text-sm leading-relaxed">
              "{testimonial.content}"
            </p>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}
