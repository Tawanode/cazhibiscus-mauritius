"use client";

import { motion } from "framer-motion";
import { MapPin, Car, Utensils } from "lucide-react";

export default function Location() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Column - Graphic/Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative aspect-square w-full max-w-[500px] mx-auto overflow-hidden rounded-[40px] shadow-2xl">
              <img
                src="/images/ella_rock.jpg"
                alt="Lush green mountains in Ella, Sri Lanka"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <span className="text-[10px] font-sans font-bold tracking-widest text-deep-ocean uppercase mb-4 block">
              Location & Setting
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-deep-ocean mb-6 leading-tight">
              Find Us in the Hills of Ella
            </h2>
            <div className="font-sans text-sm md:text-base text-dark-text/80 leading-relaxed mb-6 max-w-md space-y-3">
              <p>
                Scenic View – Ella is located in Kumbalwela, approximately 2.1 km from Ella town centre. Enjoy a quieter mountainside setting while remaining within reach of Ella&apos;s restaurants, railway connections, hiking routes, and popular attractions.
              </p>
              <p className="font-semibold text-deep-ocean pt-2">
                No. 12/A Mahamewanawa Road, Kumbalwela, Ella 90000, Sri Lanka
              </p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <MapPin className="text-deep-ocean shrink-0" size={18} />
                <span className="font-sans text-sm text-dark-text">Ella Town Centre — ~2.1 km</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="text-deep-ocean shrink-0" size={18} />
                <span className="font-sans text-sm text-dark-text">Demodara Nine Arch Bridge</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="text-deep-ocean shrink-0" size={18} />
                <span className="font-sans text-sm text-dark-text">Ella Rock & Little Adam&apos;s Peak</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="text-deep-ocean shrink-0" size={18} />
                <span className="font-sans text-sm text-dark-text">Ravana Falls</span>
              </li>
            </ul>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://www.google.com/maps/place/Scenic+View+-+Ella/@6.8831198,80.997026,13z/data=!4m2!3m1!1s0x3ae4656b701161e5:0xa66aef8fbeacc870"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-deep-ocean text-white font-sans text-xs font-bold tracking-widest uppercase rounded-full hover:bg-deep-ocean/90 transition-all hover:scale-105 shadow-sm"
              >
                Get Directions
              </a>
              <a
                href="tel:+94716300888"
                className="px-5 py-3 border border-deep-ocean/30 text-deep-ocean font-sans text-xs font-bold tracking-widest uppercase rounded-full hover:bg-deep-ocean/5 transition-all"
              >
                Call Us
              </a>
              <button
                onClick={() => window.dispatchEvent(new Event('open-booking'))}
                className="px-5 py-3 bg-golden-sunset text-white font-sans text-xs font-bold tracking-widest uppercase rounded-full hover:bg-coral-accent transition-all hover:scale-105 shadow-sm cursor-pointer"
              >
                Check Availability
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
