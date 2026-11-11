import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-deep-ocean text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl italic mb-4">Why the Heart Returns</h2>
          <p className="font-sans text-base md:text-lg text-white/70">Reflections from our cherished guests.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-12">
            <blockquote className="border-l-4 border-[#82B1B7] pl-8">
              <p className="font-display text-2xl md:text-3xl italic mb-4 leading-snug">
                &ldquo;We look forward to welcoming you to Scenic View – Ella and helping you experience the natural beauty and warmth of Sri Lanka&apos;s hill country.&rdquo;
              </p>
              <cite className="font-sans text-[10px] uppercase font-bold tracking-widest text-white/60 block not-italic">
                — Scenic View – Ella Family & Hosts
              </cite>
            </blockquote>

            <blockquote className="border-l-4 border-[#82B1B7] pl-8">
              <p className="font-display text-2xl md:text-3xl italic mb-4 leading-snug">
                &ldquo;Experience the warmth of Sri Lankan family hospitality and the tranquility of Ella&apos;s mist-covered countryside.&rdquo;
              </p>
              <cite className="font-sans text-[10px] uppercase font-bold tracking-widest text-white/60 block not-italic">
                — Your Hosts at Scenic View
              </cite>
            </blockquote>
          </div>

          <div className="relative">
            <div className="aspect-[16/10] rounded-[32px] overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-2">
              <Image 
                src="/images/testimonials.jpg"
                alt="Scenic View – Ella guesthouse in evening mountain light"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
