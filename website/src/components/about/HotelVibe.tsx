export default function HotelVibe() {
  return (
    <section className="py-24 md:py-32 container mx-auto px-6 lg:px-12">
      <div className="grid md:grid-cols-12 gap-12 lg:gap-24 items-center">
        {/* Text Content */}
        <div className="md:col-span-5">
          <h2 className="font-display text-4xl md:text-5xl text-deep-ocean mb-8">
            A Peaceful Stay Above the Clouds
          </h2>
          <p className="font-sans text-base lg:text-lg text-dark-text/80 mb-6 leading-relaxed">
            Scenic View – Ella is a welcoming, family-run boutique guesthouse nestled in the tranquil hills surrounding Ella, Sri Lanka. Located approximately 2.1 km from the town centre, our property offers a relaxing retreat away from the busy streets, with sweeping views of the mist-covered mountains and surrounding greenery.
          </p>
          <p className="font-sans text-base lg:text-lg text-dark-text/80 mb-6 leading-relaxed">
            Our four thoughtfully appointed rooms combine modern comforts with the natural beauty of the highlands. Wake up to fresh mountain air, unwind on your private balcony or terrace, and enjoy the genuine hospitality of a family dedicated to making your stay comfortable and memorable.
          </p>
          <p className="font-sans text-base lg:text-lg text-dark-text/80 mb-8 leading-relaxed">
            Whether you are visiting Ella for its famous hiking trails, scenic train journeys, iconic bridges, or simply a few days of relaxation, Scenic View – Ella provides a welcoming base for your Sri Lankan adventure.
          </p>
          <div className="italic font-display text-3xl text-[#82B1B7]">
            <span>Highland Hospitality</span>
          </div>
        </div>

        {/* Image Content */}
        <div className="md:col-span-5 md:col-start-8 relative">
          <div className="aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl relative">
            <img 
              src="/images/about_sanctuary.jpg" 
              alt="Exterior of Scenic View – Ella guesthouse surrounded by green hills" 
              className="w-full h-full object-cover" 
            />
          </div>
          
          {/* Glass Panel Quote */}
          <div className="absolute -bottom-8 -left-8 bg-white/75 backdrop-blur-xl border border-white/30 p-8 rounded-[24px] max-w-[280px] hidden lg:block shadow-lg">
            <p className="font-sans text-sm md:text-base text-deep-ocean italic">
              &ldquo;Wake up to fresh mountain air, panoramic highland views, and the genuine hospitality of a family dedicated to your stay.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
