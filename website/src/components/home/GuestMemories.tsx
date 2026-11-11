"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const verifiedRatings = [
  { platform: "Google Reviews", rating: "4.9 / 5", count: "30 reviews", color: "#4285F4" },
  { platform: "Booking.com", rating: "9.6 / 10", count: "13 reviews", color: "#003580" },
];

const reviewThemes = [
  "Warm Family Hospitality",
  "Panoramic Mountain Views & Sunrises",
  "Clean, Comfortable Rooms",
  "Freshly Prepared Food",
  "Peaceful Setting Away from Town",
  "Local Transport & Travel Assistance"
];

export default function GuestMemories() {
  return (
    <section className="py-12 md:py-24 bg-[#EAECEE]">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12"
        >
          <span className="text-[11px] font-sans font-semibold tracking-widest text-deep-ocean uppercase mb-3 block">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-deep-ocean mb-3">
            Loved by Our Guests
          </h2>
          <p className="font-sans text-sm md:text-base text-deep-ocean/70 max-w-xl mx-auto">
            Discover what travelers appreciate about staying at Scenic View – Ella.
          </p>
        </motion.div>

        <div className="relative">
          <div className="bg-white rounded-[24px] md:rounded-[32px] px-6 py-10 sm:px-10 md:p-14 shadow-sm mx-auto flex flex-col justify-center items-center">
            {/* Verified Scores by Platform */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg mb-8">
              {verifiedRatings.map((item, idx) => (
                <div key={idx} className="bg-ocean-white rounded-2xl p-4 border border-deep-ocean/10 flex flex-col items-center">
                  <span className="font-sans text-[11px] font-bold tracking-wider uppercase text-deep-ocean/60 mb-1">
                    {item.platform}
                  </span>
                  <span className="font-display text-3xl text-deep-ocean font-bold mb-1">
                    {item.rating}
                  </span>
                  <span className="font-sans text-[10px] text-deep-ocean/50 uppercase tracking-widest">
                    Based on {item.count}
                  </span>
                </div>
              ))}
            </div>

            <p className="font-display text-[17px] md:text-2xl text-deep-ocean leading-snug md:leading-relaxed mb-8 max-w-2xl italic">
              &ldquo;Guests consistently highlight Scenic View – Ella&apos;s warm personal hospitality, breathtaking mountain views, spotless comfortable rooms, and peaceful atmosphere.&rdquo;
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {reviewThemes.map((theme, idx) => (
                <span key={idx} className="bg-ocean-white text-deep-ocean px-3.5 py-1.5 md:px-4 md:py-2 rounded-full text-[11px] md:text-xs font-sans font-medium border border-deep-ocean/10">
                  {theme}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
