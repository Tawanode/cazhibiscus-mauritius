"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Storytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={containerRef} className="pt-8 pb-16 md:py-32 bg-ocean-white relative overflow-hidden">
      <div className="container mx-auto px-5 min-[390px]:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          
          <div className="order-2 md:order-1 relative h-[320px] sm:h-[400px] md:h-[600px] w-full rounded-[24px] overflow-hidden">
            <motion.div style={{ y: y1 }} className="absolute inset-0 h-[120%] -top-[10%]">
              <img
                src="/images/about_sanctuary.jpg"
                alt="Exterior of Scenic View – Ella guesthouse surrounded by green hills"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <div className="order-1 md:order-2 space-y-5 md:space-y-8 pr-1 sm:pr-0">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-[32px] min-[360px]:text-[36px] min-[390px]:text-[40px] md:text-5xl text-deep-ocean leading-[1.15] text-balance max-w-xl"
            >
              A Peaceful Stay Above the Clouds
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="space-y-4 md:space-y-6 font-sans text-[15.5px] min-[360px]:text-[16.5px] md:text-lg text-dark-text/80 leading-[1.65]"
            >
              <p>
                Scenic View – Ella is a welcoming, family-run boutique guesthouse nestled in the tranquil hills surrounding Ella, Sri Lanka. Located approximately 2.1 km from the town centre, our property offers a relaxing retreat away from the busy streets, with sweeping views of the mist-covered mountains and surrounding greenery.
              </p>
              <p>
                Our four thoughtfully appointed rooms combine modern comforts with the natural beauty of the highlands. Wake up to fresh mountain air, unwind on your private balcony or terrace, and enjoy the genuine hospitality of a family dedicated to making your stay comfortable and memorable.
              </p>
              <p className="hidden md:block">
                Whether you are visiting Ella for its famous hiking trails, scenic train journeys, iconic bridges, or simply a few days of relaxation, Scenic View – Ella provides a welcoming base for your Sri Lankan adventure.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
