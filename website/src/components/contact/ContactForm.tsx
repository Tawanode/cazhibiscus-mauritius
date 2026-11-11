"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "94716300888";
    const text = `*New Inquiry for Scenic View – Ella*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Subject:* ${formData.subject}%0A%0A*Message:*%0A${formData.message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <section className="bg-[#ede1cb]/30 py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
        <div>
          <h2 className="font-display text-4xl md:text-5xl text-deep-ocean mb-6">Send a Message</h2>
          <p className="font-sans text-lg text-dark-text/80 mb-12 max-w-md">
            Drop us a note using the form below. Our family usually responds within a few hours during local daylight times.
          </p>
          <div className="space-y-8">
            <div className="flex gap-4 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-deep-ocean">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="font-sans text-xs font-bold uppercase tracking-widest text-deep-ocean mb-1">OFFICE HOURS</p>
                <p className="font-sans text-base text-dark-text">08:00 — 20:00 (SLST / UTC+5:30)</p>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 md:p-12 rounded-[32px] shadow-xl shadow-[#0e4f5b]/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group">
              <input 
                className="peer w-full bg-transparent border-0 border-b border-[#bfc8ca] py-2 focus:ring-0 focus:border-deep-ocean transition-all font-sans text-base text-dark-text outline-none" 
                id="name" 
                placeholder=" " 
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <label 
                className="absolute left-0 top-2 -translate-y-6 text-xs font-bold uppercase tracking-widest text-[#40484a] transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:tracking-normal peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:font-bold peer-focus:tracking-widest peer-focus:text-deep-ocean" 
                htmlFor="name"
              >
                FULL NAME
              </label>
            </div>
            <div className="relative group mt-8 md:mt-0">
              <input 
                className="peer w-full bg-transparent border-0 border-b border-[#bfc8ca] py-2 focus:ring-0 focus:border-deep-ocean transition-all font-sans text-base text-dark-text outline-none" 
                id="email" 
                placeholder=" " 
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <label 
                className="absolute left-0 top-2 -translate-y-6 text-xs font-bold uppercase tracking-widest text-[#40484a] transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:tracking-normal peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:font-bold peer-focus:tracking-widest peer-focus:text-deep-ocean" 
                htmlFor="email"
              >
                EMAIL ADDRESS
              </label>
            </div>
          </div>
          <div className="relative group pt-4">
            <select 
              className="peer w-full bg-transparent border-0 border-b border-[#bfc8ca] py-2 focus:ring-0 focus:border-deep-ocean transition-all font-sans text-base text-dark-text outline-none appearance-none" 
              id="subject"
              required
              value={formData.subject}
              onChange={handleChange}
            >
              <option value="" disabled hidden></option>
              <option value="booking">New Booking</option>
              <option value="concierge">Concierge Services</option>
              <option value="feedback">Feedback</option>
              <option value="other">Other Inquiry</option>
            </select>
            <div className="absolute right-0 top-6 pointer-events-none text-[#40484a]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
            <label 
              className="absolute left-0 top-2 -translate-y-6 text-xs font-bold uppercase tracking-widest text-[#40484a] transition-all peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:font-bold peer-focus:tracking-widest peer-focus:text-deep-ocean" 
              htmlFor="subject"
            >
              SUBJECT
            </label>
          </div>
          <div className="relative group pt-4">
            <textarea 
              className="peer w-full bg-transparent border-0 border-b border-[#bfc8ca] py-2 focus:ring-0 focus:border-deep-ocean transition-all font-sans text-base text-dark-text outline-none resize-none" 
              id="message" 
              placeholder=" " 
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <label 
              className="absolute left-0 top-2 -translate-y-6 text-xs font-bold uppercase tracking-widest text-[#40484a] transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:tracking-normal peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:font-bold peer-focus:tracking-widest peer-focus:text-deep-ocean" 
              htmlFor="message"
            >
              HOW CAN WE HELP?
            </label>
          </div>
          <button 
            className="w-full bg-deep-ocean text-white py-4 rounded-xl font-sans text-sm font-bold uppercase tracking-widest hover:bg-deep-ocean/90 transition-all flex justify-center items-center gap-3 mt-4" 
            type="submit"
          >
            Send Message
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}
