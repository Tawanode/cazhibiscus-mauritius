export default function Itinerary() {
  return (
    <section className="bg-ocean-white/50 py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 md:mb-24">
          <span className="font-sans text-xs font-bold text-deep-ocean/80 tracking-widest uppercase block mb-4">
            Discover Ella
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-deep-ocean mb-6">
            Craft Your Escape
          </h2>
          <p className="font-sans text-base md:text-lg text-dark-text/70 max-w-2xl mx-auto">
            While Scenic View – Ella provides a quiet mountainside retreat, the best of Ella's attractions are just a short distance away.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* 2 Day Escape */}
          <div className="bg-white rounded-[32px] p-8 lg:p-10 shadow-sm border border-warm-sand/20 transition-all hover:-translate-y-2">
            <div className="flex justify-between items-start mb-8">
              <span className="font-display text-5xl text-deep-ocean/20">02</span>
              <div className="text-right">
                <h4 className="font-display text-2xl text-deep-ocean">The Weekender</h4>
                <p className="font-sans text-[10px] font-bold tracking-widest text-deep-ocean/50 uppercase mt-1">Essentials</p>
              </div>
            </div>
            <ul className="space-y-6 mb-12">
              <li className="flex gap-4 items-start">
                <span className="font-sans font-bold text-deep-ocean mt-0.5">01</span>
                <p className="font-sans text-sm text-dark-text/80">Hike Little Adam's Peak</p>
              </li>
              <li className="flex gap-4 items-start">
                <span className="font-sans font-bold text-deep-ocean mt-0.5">02</span>
                <p className="font-sans text-sm text-dark-text/80">Visit Nine Arch Bridge</p>
              </li>
            </ul>
            <button className="w-full border border-deep-ocean/30 text-deep-ocean py-4 rounded-full font-sans text-xs font-bold uppercase tracking-widest hover:bg-deep-ocean hover:text-white transition-all">
              Explore Path
            </button>
          </div>

          {/* 4 Day Escape (Highlighted) */}
          <div className="bg-deep-ocean text-white rounded-[32px] p-8 lg:p-10 shadow-2xl md:-mt-8 transition-all hover:-translate-y-2">
            <div className="flex justify-between items-start mb-8">
              <span className="font-display text-5xl text-white/20">04</span>
              <div className="text-right">
                <h4 className="font-display text-2xl text-white">Deep Immersion</h4>
                <p className="font-sans text-[10px] font-bold tracking-widest text-warm-sand uppercase mt-1">Most Loved</p>
              </div>
            </div>
            <ul className="space-y-6 mb-12">
              <li className="flex gap-4 items-start">
                <span className="font-sans font-bold text-white mt-0.5">01</span>
                <p className="font-sans text-sm text-white/80">Conquer Ella Rock</p>
              </li>
              <li className="flex gap-4 items-start">
                <span className="font-sans font-bold text-white mt-0.5">02</span>
                <p className="font-sans text-sm text-white/80">Explore Ravana Falls</p>
              </li>
              <li className="flex gap-4 items-start">
                <span className="font-sans font-bold text-white mt-0.5">03</span>
                <p className="font-sans text-sm text-white/80">Tea Factory Tours</p>
              </li>
              <li className="flex gap-4 items-start">
                <span className="font-sans font-bold text-white mt-0.5">04</span>
                <p className="font-sans text-sm text-white/80">Ella Town Cafes & Restaurants</p>
              </li>
            </ul>
            <button className="w-full bg-[#82B1B7] text-deep-ocean py-4 rounded-full font-sans text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all">
              Select Journey
            </button>
          </div>

          {/* 7 Day Escape */}
          <div className="bg-white rounded-[32px] p-8 lg:p-10 shadow-sm border border-warm-sand/20 transition-all hover:-translate-y-2">
            <div className="flex justify-between items-start mb-8">
              <span className="font-display text-5xl text-deep-ocean/20">07</span>
              <div className="text-right">
                <h4 className="font-display text-2xl text-deep-ocean">Island Soul</h4>
                <p className="font-sans text-[10px] font-bold tracking-widest text-deep-ocean/50 uppercase mt-1">Complete Luxury</p>
              </div>
            </div>
            <ul className="space-y-6 mb-12">
              <li className="flex gap-4 items-start">
                <span className="font-sans font-bold text-deep-ocean mt-0.5">01-03</span>
                <p className="font-sans text-sm text-dark-text/80">All Ella Hikes & Attractions</p>
              </li>
              <li className="flex gap-4 items-start">
                <span className="font-sans font-bold text-deep-ocean mt-0.5">04-05</span>
                <p className="font-sans text-sm text-dark-text/80">Sri Lankan Cooking Classes</p>
              </li>
              <li className="flex gap-4 items-start">
                <span className="font-sans font-bold text-deep-ocean mt-0.5">06-07</span>
                <p className="font-sans text-sm text-dark-text/80">Relaxation & Local Life</p>
              </li>
            </ul>
            <button className="w-full border border-deep-ocean/30 text-deep-ocean py-4 rounded-full font-sans text-xs font-bold uppercase tracking-widest hover:bg-deep-ocean hover:text-white transition-all">
              Explore Path
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
