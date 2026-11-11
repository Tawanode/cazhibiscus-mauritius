export default function CorePhilosophy() {
  return (
    <section className="py-24 md:py-32 bg-ocean-white/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-display text-4xl md:text-5xl text-deep-ocean mb-6">Our Core Philosophy</h2>
          <div className="w-16 h-px bg-warm-sand/50 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Column 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-deep-ocean/5 flex items-center justify-center text-[#82B1B7] mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.118l-6.5.5a48.667 48.667 0 0 1-6.5 0l-6.5-.5a2.25 2.25 0 0 1-1.872-2.118v-4.25m16.5-1.65L12 8.75l-8.25 3.75m16.5 0v-4.25c0-1.094-.787-2.036-1.872-2.118l-6.5-.5a48.667 48.667 0 0 0-6.5 0l-6.5.5A2.25 2.25 0 0 0 1.5 8.25v4.25" />
              </svg>
            </div>
            <h3 className="font-display text-2xl md:text-3xl text-deep-ocean mb-4">Mountain Hospitality</h3>
            <p className="font-sans text-sm md:text-base text-dark-text/80 leading-relaxed">
              As a family-run boutique guesthouse with four well-appointed rooms, we ensure personalized hospitality and a genuine Sri Lankan welcome that makes every guest feel at home.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-deep-ocean/5 flex items-center justify-center text-[#82B1B7] mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2ZM9 9h6v6H9V9Z" />
              </svg>
            </div>
            <h3 className="font-display text-2xl md:text-3xl text-deep-ocean mb-4">Fresh Local Flavours</h3>
            <p className="font-sans text-sm md:text-base text-dark-text/80 leading-relaxed">
              Our on-site restaurant prepares fresh Asian and international dishes, with continental, authentic Sri Lankan à la carte, and full English/Irish breakfast options to start your adventure.
            </p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-deep-ocean/5 flex items-center justify-center text-[#82B1B7] mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
            </div>
            <h3 className="font-display text-2xl md:text-3xl text-deep-ocean mb-4">Highland Serenity</h3>
            <p className="font-sans text-sm md:text-base text-dark-text/80 leading-relaxed">
              Nestled in Kumbalwela away from the crowded town centre, our property offers panoramic views of mist-covered peaks, quiet garden spaces, and peaceful mountain sunrises.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
