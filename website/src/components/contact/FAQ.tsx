"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Where is Scenic View – Ella located?",
    answer: "Scenic View – Ella is located at No. 12/A Mahamewanawa Road, Kumbalwela, Ella 90000, Sri Lanka, in a quiet mountainside setting overlooking the central highlands."
  },
  {
    question: "How far is Scenic View – Ella from Ella town centre?",
    answer: "The property is located approximately 2.1 km from Ella town centre, offering a peaceful retreat away from the busy streets."
  },
  {
    question: "What room configurations are available?",
    answer: "We offer four well-appointed rooms including Double Room, Twin Room, and Family Room / Larger Room configurations. All rooms feature private bathrooms, air conditioning, free Wi-Fi, work desks, and private balconies or terraces with mountain views."
  },
  {
    question: "Does Scenic View – Ella have mountain views?",
    answer: "Yes. Guests enjoy panoramic mountain views of Ella's lush highlands, with scenery stretching toward Ella Rock and Little Adam's Peak."
  },
  {
    question: "Is Wi-Fi available throughout the property?",
    answer: "Yes. Complimentary high-speed Wi-Fi is available in all guest rooms and public areas."
  },
  {
    question: "Is on-site parking available?",
    answer: "Yes. Complimentary private parking is available on-site with a convenient flat parking area."
  },
  {
    question: "Does the property have an on-site restaurant?",
    answer: "Yes. Scenic View – Ella features an on-site restaurant serving freshly prepared Sri Lankan, Asian, and international cuisine."
  },
  {
    question: "What breakfast options are served?",
    answer: "Guests can enjoy continental breakfast, traditional Sri Lankan à la carte choices, or full English/Irish breakfast options."
  },
  {
    question: "How accessible are Ella Rock and Nine Arch Bridge?",
    answer: "Iconic regional highlights like Nine Arch Bridge, Ella Rock, Little Adam's Peak, and Ravana Falls are a short drive away. Our hosts are happy to help arrange local transport."
  },
  {
    question: "Can the family hosts assist with local travel planning?",
    answer: "Yes. As a family-run guesthouse, we provide warm personal hospitality, insider recommendations, and assistance with transport and tour arrangements."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 max-w-3xl mx-auto">
      <h2 className="font-display text-4xl md:text-5xl text-deep-ocean text-center mb-12">Quick Answers</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="border-b border-[#bfc8ca]/30 overflow-hidden">
              <button 
                className="w-full flex justify-between items-center py-6 text-left group"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-display text-2xl text-deep-ocean group-hover:text-[#006875] transition-colors pr-4">
                  {faq.question}
                </span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={1.5} 
                  stroke="currentColor" 
                  className={`w-6 h-6 text-deep-ocean transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              <div 
                className={`transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="font-sans text-base text-dark-text/80 pb-8">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
