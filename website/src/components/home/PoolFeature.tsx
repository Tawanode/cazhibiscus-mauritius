"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PoolFeature() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/experiences_hero.jpg"
          alt="Peaceful hillside guesthouse surroundings at Scenic View – Ella"
          className="w-full h-full object-cover"
        />
        {/* Soft overlay to ensure contrast */}
        <div className="absolute inset-0 bg-deep-ocean/20 z-10" />
      </div>

      {/* Floating Card */}
      <div className="container mx-auto px-6 max-w-7xl relative z-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#EAECEE]/95 backdrop-blur-sm rounded-[32px] p-10 md:p-14 max-w-lg shadow-2xl"
        >
          <span className="text-[10px] font-sans font-bold tracking-widest text-deep-ocean uppercase mb-4 block">
            On-Site Dining & Hospitality
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-deep-ocean mb-6">
            Fresh Flavours, Warm Hospitality
          </h2>
          <p className="font-sans text-sm text-deep-ocean/80 leading-relaxed mb-8">
            Enjoy freshly prepared meals in a relaxed, family-friendly setting at Scenic View – Ella. Our on-site restaurant offers Asian and international cuisine, with breakfast choices to suit different tastes—from continental to traditional Sri Lankan à la carte and full English/Irish breakfast.
          </p>
          <Link
            href="/rooms"
            className="inline-block px-8 py-3.5 bg-deep-ocean text-white font-sans text-xs font-semibold tracking-widest uppercase rounded-full hover:bg-deep-ocean/90 transition-colors shadow-sm"
          >
            Discover Our Dining
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
