'use client';

export default function LocationExplorer() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto">
      <div className="container mx-auto px-6 max-w-6xl text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl text-deep-ocean mb-4">Find Us in the Hills of Ella</h2>
        <p className="font-sans text-dark-text/70 max-w-2xl mx-auto">
          Scenic View – Ella is located in Kumbalwela, approximately 2.1 km from Ella town centre. Enjoy a quieter mountainside setting while remaining within reach of Ella's attractions.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[480px]">
        <div className="lg:col-span-8 relative rounded-[32px] overflow-hidden shadow-lg border border-[#bfc8ca]/30 h-[400px] lg:h-auto">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31688.49979848383!2d80.99702596664432!3d6.88311978717644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae4656b701161e5%3A0xa66aef8fbeacc870!2sScenic%20View%20-%20Ella!5e0!3m2!1sen!2sin!4v1792211646696!5m2!1sen!2sin" 
            className="w-full h-full border-0" 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
          <div className="absolute bottom-6 left-6 bg-white/70 backdrop-blur-xl border border-white/40 p-4 rounded-2xl flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 bg-deep-ocean rounded-xl flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
            </div>
            <div>
              <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#40484a]">FROM ELLA TOWN CENTRE</p>
              <p className="font-sans text-base font-bold text-deep-ocean">Approx. 2.1 km</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 flex flex-col justify-between gap-5">
          <div className="bg-white/70 backdrop-blur-xl border border-white/40 p-8 rounded-[32px] flex flex-col justify-center shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-deep-ocean mb-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <h4 className="font-display text-2xl text-deep-ocean mb-2">Address</h4>
            <address className="font-sans text-sm text-dark-text/70 leading-relaxed not-italic mb-4">
              No. 12/A Mahamewanawa Road,<br />
              Kumbalwela, Ella 90000<br />
              Sri Lanka
            </address>
            <p className="font-sans text-xs text-dark-text/60">
              Quiet mountainside setting overlooking Ella's central highlands.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-xl border border-white/40 p-6 rounded-[24px] shadow-sm flex flex-col gap-3">
            <a
              href="https://www.google.com/maps/place/Scenic+View+-+Ella/@6.8831198,80.997026,13z/data=!4m2!3m1!1s0x3ae4656b701161e5:0xa66aef8fbeacc870"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-deep-ocean text-white py-3 rounded-full font-sans text-xs font-bold uppercase tracking-widest hover:bg-deep-ocean/90 transition-all"
            >
              Get Directions
            </a>
            <a
              href="tel:+94716300888"
              className="w-full text-center border border-deep-ocean text-deep-ocean py-3 rounded-full font-sans text-xs font-bold uppercase tracking-widest hover:bg-deep-ocean/5 transition-all"
            >
              Call Us (+94 71 630 0888)
            </a>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-booking'))}
              className="w-full text-center bg-[#82B1B7] text-deep-ocean py-3 rounded-full font-sans text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all"
            >
              Check Availability
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
