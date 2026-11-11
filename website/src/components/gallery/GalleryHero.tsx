"use client";

import { motion } from "framer-motion";

export default function GalleryHero() {
  return (
    <section className="pt-32 pb-12 bg-ocean-white">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display text-5xl md:text-7xl text-deep-ocean mb-6">
            A Visual Sanctuary
          </h1>
          <p className="font-sans italic text-dark-text/80 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Journey through the quiet corners and panoramic mountain vistas of Scenic View – Ella in Kumbalwela. Every image captures the natural beauty and warm hospitality of our highland retreat.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
