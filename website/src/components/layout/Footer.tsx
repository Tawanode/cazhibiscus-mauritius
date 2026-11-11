import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-deep-ocean text-ocean-white py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-display text-4xl mb-6">Scenic View – Ella</h2>
            <p className="font-sans text-ocean-white/80 max-w-sm mb-8 leading-relaxed">
              A peaceful mountain-view guesthouse in Ella, Sri Lanka.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="font-sans hover:text-golden-sunset transition-colors">Instagram</a>
              <span className="text-ocean-white/30">•</span>
              <a href="#" className="font-sans hover:text-golden-sunset transition-colors">Facebook</a>
              <span className="text-ocean-white/30">•</span>
              <a href="#" className="font-sans hover:text-golden-sunset transition-colors">Twitter</a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-xl mb-6 text-golden-sunset">Explore</h3>
            <ul className="space-y-4 font-sans text-ocean-white/80">
              <li>
                <Link href="/" className="hover:text-ocean-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/rooms" className="hover:text-ocean-white transition-colors">Rooms</Link>
              </li>
              <li>
                <Link href="/experiences" className="hover:text-ocean-white transition-colors">Experiences</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-ocean-white transition-colors">Gallery</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-ocean-white transition-colors">Location</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-ocean-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-xl mb-6 text-golden-sunset">Contact</h3>
            <ul className="space-y-4 font-sans text-ocean-white/80">
              <li>No. 12/A Mahamewanawa Road, Kumbalwela, Ella 90000, Sri Lanka</li>
              <li>
                <a href="tel:+94716300888" className="hover:text-ocean-white transition-colors">Tel / WhatsApp: +94 71 630 0888</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ocean-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between font-sans text-sm text-ocean-white/60">
          <p>&copy; {new Date().getFullYear()} Scenic View – Ella. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-ocean-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-ocean-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
