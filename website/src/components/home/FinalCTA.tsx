"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hillora_ella_hero.jpg" 
          alt="Scenic View – Ella guesthouse nestled in mountain landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-deep-ocean/60 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-4xl text-center text-ocean-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-5xl md:text-7xl mb-8 leading-tight">
            Plan Your Mountain Escape
          </h2>
          <p className="font-sans text-lg md:text-xl text-ocean-white/90 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Discover the warmth of genuine family hospitality and breathtaking highland sunrises. Book your stay at Scenic View – Ella today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/rooms"
              className="px-8 py-4 bg-golden-sunset text-white font-button rounded-full hover:bg-coral-accent transition-all hover:scale-105 flex items-center gap-2 group shadow-lg"
            >
              Reserve Your Stay
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-ocean-white/10 backdrop-blur-md text-white font-button rounded-full border border-ocean-white/30 hover:bg-ocean-white/20 transition-all flex items-center gap-2"
            >
              Contact Us
              <Mail size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
