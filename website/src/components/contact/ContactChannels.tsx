export default function ContactChannels() {
  return (
    <section className="px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto mb-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* WhatsApp */}
        <a
          href="https://wa.me/94716300888?text=Hello%20Scenic%20View%20Ella%2C%20I%20would%20like%20to%20inquire%20about%20room%20availability."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/70 backdrop-blur-xl border border-white/40 p-8 rounded-[24px] shadow-sm hover:shadow-md transition-shadow group cursor-pointer block"
        >
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-[#8aebfd] rounded-xl text-[#006b78] group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 11.996c0 2.29.98 4.346 2.582 5.824L4.5 21l3.327-1.428A9.324 9.324 0 0012 20.25z" />
              </svg>
            </div>
            <span className="flex items-center gap-2 font-sans text-[10px] font-bold uppercase tracking-widest text-[#006875] py-1 px-3 bg-[#9cefff]/30 rounded-full">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              LIVE NOW
            </span>
          </div>
          <h3 className="font-display text-3xl text-deep-ocean mb-2">WhatsApp</h3>
          <p className="font-sans text-base text-dark-text/80 mb-6">Quick responses for availability and local tips.</p>
          <span className="font-sans text-sm font-bold tracking-wide text-deep-ocean group-hover:underline">+94 71 630 0888</span>
        </a>

        {/* Location / Address */}
        <a
          href="https://www.google.com/maps/place/Scenic+View+-+Ella/@6.8831198,80.997026,13z/data=!4m2!3m1!1s0x3ae4656b701161e5:0xa66aef8fbeacc870"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/70 backdrop-blur-xl border border-white/40 p-8 rounded-[24px] shadow-sm hover:shadow-md transition-shadow group cursor-pointer block"
        >
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-[#ede1cb] rounded-xl text-[#201b0e] group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
          </div>
          <h3 className="font-display text-3xl text-deep-ocean mb-2">Our Location</h3>
          <p className="font-sans text-base text-dark-text/80 mb-6">Quiet mountainside setting 2.1 km from Ella town.</p>
          <span className="font-sans text-sm font-bold tracking-wide text-deep-ocean group-hover:underline">No. 12/A Mahamewanawa Rd, Kumbalwela</span>
        </a>

        {/* Phone */}
        <a
          href="tel:+94716300888"
          className="bg-white/70 backdrop-blur-xl border border-white/40 p-8 rounded-[24px] shadow-sm hover:shadow-md transition-shadow group cursor-pointer block"
        >
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-[#b3ecfa] rounded-xl text-[#001f25] group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
          </div>
          <h3 className="font-display text-3xl text-deep-ocean mb-2">Direct Line</h3>
          <p className="font-sans text-base text-dark-text/80 mb-6">Speak with our family hosts directly.</p>
          <span className="font-sans text-sm font-bold tracking-wide text-deep-ocean group-hover:underline">+94 71 630 0888</span>
        </a>
      </div>
    </section>
  );
}
