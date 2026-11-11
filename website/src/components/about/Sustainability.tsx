import Image from "next/image";

export default function Sustainability() {
  return (
    <section className="py-24 md:py-32 overflow-hidden bg-ocean-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Image */}
          <div className="order-2 md:order-1 relative">
            <div className="rounded-[32px] overflow-hidden aspect-square relative z-10 shadow-2xl">
              <Image 
                src="/images/sustainability_about.jpg" 
                alt="Scenic mountain landscape in Ella, Sri Lanka" 
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Blur */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#82B1B7]/20 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Text Content */}
          <div className="order-1 md:order-2">
            <span className="font-sans text-xs font-bold text-[#82B1B7] uppercase tracking-widest mb-6 block">
              Our Setting
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-deep-ocean mb-12">
              Harmony with Ella&apos;s Hills
            </h2>
            <div className="space-y-10">
              {/* Peaceful Garden Setting */}
              <div className="flex gap-6">
                <div className="text-[#82B1B7] pt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-deep-ocean mb-2">
                    Peaceful Garden Setting
                  </h4>
                  <p className="font-sans text-sm md:text-base text-dark-text/80 leading-relaxed">
                    Unwind in a quiet natural environment overlooking Ella&apos;s misty central highlands, lush greenery, and peaceful rural surroundings.
                  </p>
                </div>
              </div>

              {/* Fresh Local Flavours */}
              <div className="flex gap-6">
                <div className="text-[#82B1B7] pt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-deep-ocean mb-2">
                    Fresh Local Flavours
                  </h4>
                  <p className="font-sans text-sm md:text-base text-dark-text/80 leading-relaxed">
                    Our on-site restaurant prepares honest Asian and international dishes, sourcing fresh ingredients from regional highland markets.
                  </p>
                </div>
              </div>

              {/* Quiet Mountain Sanctuary */}
              <div className="flex gap-6">
                <div className="text-[#82B1B7] pt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-deep-ocean mb-2">
                    Highland Mountain Serenity
                  </h4>
                  <p className="font-sans text-sm md:text-base text-dark-text/80 leading-relaxed">
                    Located in Kumbalwela, approximately 2.1 km from town, we offer a tranquil retreat away from the crowds while keeping Ella&apos;s landmarks within easy reach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
