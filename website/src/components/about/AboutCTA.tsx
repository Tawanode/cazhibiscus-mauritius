"use client";

import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="py-24 md:py-32 text-center px-6 bg-ocean-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl text-deep-ocean mb-6">
          Ready to Experience Ella?
        </h2>
        <p className="font-sans text-base md:text-lg text-dark-text/80 mb-12 leading-relaxed">
          Join us in the tranquil hills of Kumbalwela and discover genuine family hospitality, comfortable rooms, and unforgettable mountain sunrises.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Link 
            href="/rooms"
            className="px-10 py-4 bg-deep-ocean text-white font-sans text-xs font-bold uppercase tracking-widest rounded-full hover:bg-deep-ocean/90 transition-all shadow-md hover:shadow-lg hover:-translate-y-1 inline-block"
          >
            Explore Our Rooms
          </Link>
          <button 
            onClick={() => window.dispatchEvent(new Event('open-booking'))}
            className="px-10 py-4 border border-deep-ocean/30 text-deep-ocean font-sans text-xs font-bold uppercase tracking-widest rounded-full hover:bg-deep-ocean/5 transition-all cursor-pointer"
          >
            Check Availability
          </button>
        </div>
      </div>
    </section>
  );
}
