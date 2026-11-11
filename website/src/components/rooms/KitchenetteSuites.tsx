"use client";

import { motion } from "framer-motion";
import { Coffee, Utensils, Wifi } from "lucide-react";

export default function KitchenetteSuites() {
  return (
    <section className="py-24 bg-ocean-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-deep-ocean/10 pb-6 mb-16">
          <div>
            <span className="font-sans text-[10px] font-bold tracking-widest text-deep-ocean/60 uppercase block mb-2">
              On-Site Dining
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-deep-ocean">Fresh Flavours, Warm Hospitality</h2>
          </div>
          <span className="font-sans text-[10px] font-bold tracking-widest text-deep-ocean/60 uppercase mt-4 md:mt-0">
            Scenic View – Ella Restaurant
          </span>
        </div>

        {/* Feature Layout */}
        <div className="relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">

            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-[65%] relative"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-[24px] shadow-lg relative group">
                <img
                  src="/images/experiences_hero.jpg"
                  alt="On-site dining and hospitality at Scenic View – Ella"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                  <span className="hidden md:block font-sans text-xs tracking-widest text-white/80 uppercase mb-2">On-Site Restaurant</span>
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <h3 className="hidden md:block font-display text-3xl md:text-4xl text-white">Fresh Flavours, Warm Hospitality</h3>
                    <div className="flex items-center gap-3 text-white/80 text-xs tracking-widest uppercase">
                      <span>ASIAN & INTERNATIONAL BREAKFAST</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Amenities Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-[35%] lg:-ml-24 relative z-10"
            >
              <div className="bg-white rounded-[32px] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-deep-ocean/5">
                <span className="font-sans text-[10px] font-bold tracking-widest text-deep-ocean/60 uppercase mb-4 block">
                  Fresh Flavours, Warm Hospitality
                </span>
                <div className="space-y-4 font-sans text-sm text-dark-text/80 leading-relaxed mb-8">
                  <p>
                    Enjoy freshly prepared meals in a relaxed, family-friendly setting at Scenic View – Ella. Our on-site restaurant offers Asian and international cuisine, with breakfast choices to suit different tastes.
                  </p>

                </div>

                <ul className="space-y-6 mb-10">
                  <li className="flex gap-4">
                    <div className="mt-1">
                      <Coffee className="text-deep-ocean/70" size={20} />
                    </div>
                    <div>
                      <h4 className="font-sans text-xs font-bold tracking-wider text-deep-ocean uppercase mb-1">Continental & Full English/Irish</h4>
                      <p className="font-sans text-sm text-dark-text/70 leading-relaxed">Classic breakfast favorites to prepare for mountain treks.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="mt-1">
                      <Utensils className="text-deep-ocean/70" size={20} />
                    </div>
                    <div>
                      <h4 className="font-sans text-xs font-bold tracking-wider text-deep-ocean uppercase mb-1">Sri Lankan & Asian À La Carte</h4>
                      <p className="font-sans text-sm text-dark-text/70 leading-relaxed">Freshly prepared regional specialties with authentic spices.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="mt-1">
                      <Wifi className="text-deep-ocean/70" size={20} />
                    </div>
                    <div>
                      <h4 className="font-sans text-xs font-bold tracking-wider text-deep-ocean uppercase mb-1">International Dishes</h4>
                      <p className="font-sans text-sm text-dark-text/70 leading-relaxed">Fresh dishes tailored to international travelers and families.</p>
                    </div>
                  </li>
                </ul>

                <button
                  onClick={() => window.dispatchEvent(new Event('open-booking'))}
                  className="w-full py-4 rounded-full border border-deep-ocean/20 font-sans text-xs font-bold tracking-widest text-deep-ocean uppercase hover:bg-deep-ocean hover:text-white transition-all duration-300 cursor-pointer"
                >
                  Discover Our Dining
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
