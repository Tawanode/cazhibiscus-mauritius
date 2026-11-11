import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto mb-32 overflow-hidden pt-32">
      <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-6 z-10">
          <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-deep-ocean/70 mb-4 block">
            COME STAY IN ELLA
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-deep-ocean leading-tight mb-8">
            Get in Touch
          </h1>
          <p className="font-sans text-lg text-dark-text/80 max-w-lg">
            Whether you're seeking a quiet mountainside escape or have specific requirements for your stay at Scenic View – Ella, our family is here to ensure your journey is seamless.
          </p>
        </div>
        <div className="md:col-span-6 relative h-[400px] md:h-[500px] rounded-[32px] overflow-hidden mt-8 md:mt-0 shadow-lg">
          <Image
            src="/images/contact_hero.jpg"
            alt="Scenic mountain setting at Scenic View – Ella in Kumbalwela"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
