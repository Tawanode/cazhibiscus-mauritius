'use client';

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-deep-ocean">
      <div className="relative z-10 px-6 md:px-12 text-center max-w-4xl mx-auto text-white">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 italic">
          Ready to write your story?
        </h2>
        <p className="font-sans text-base md:text-lg mb-12 opacity-80 max-w-2xl mx-auto">
          Our friendly local hosts are here to help you personalize every detail of your Ella mountain escape.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-booking'))}
            className="bg-[#82B1B7] text-deep-ocean px-10 py-4 rounded-full font-sans text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform"
          >
            Inquire Now
          </button>
        </div>
      </div>
    </section>
  );
}
