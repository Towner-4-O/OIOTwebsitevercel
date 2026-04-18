"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Plus } from "lucide-react";
import {motion} from 'framer-motion'

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "What is OIOT?",
    answer: "OIOT (One India One Taxi) is a mobile app that connects commuters with trusted, verified local taxi and auto drivers across Karnataka, providing safe, reliable, and transparent rides.",
  },
  {
    question: "How does OIOT ensure safety for riders?",
    answer: "OIOT includes features like live tracking, SOS alerts, and police department integration for added safety. Drivers are fully verified and trained to provide professional services.",
  },
  {
    question: "Are fares regulated by the government?",
    answer: "Yes, all fares on the OIOT platform are set according to government regulations. There are no hidden charges or surge pricing.",
  },
  {
    question: "Is OIOT available in all areas of Karnataka?",
    answer: "Yes, OIOT services are available across all regions of Karnataka.",
  },
  {
    question: "How do I become a driver with OIOT?",
    answer: "To become a driver, download the Towner app, complete the necessary registration, and adhere to local regulations. Training and support are provided to help you succeed.",
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleFaqs = showAll ? faqData : faqData.slice(0, 5);

  return (
    <section className="py-24 relative overflow-hidden" id="Faq">
      {/* Background Design Elements */}
      <div className="absolute inset-0" />
      <div className="absolute inset-0 opacity-20 bg-[length:30px_30px] bg-grid-pattern" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block mb-4 px-6 py-2 bg-[#5445F9]/10 rounded-full"
          >
            <span className="text-[#5445F9] font-semibold">FAQ</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Common <span className="text-[#5445F9]">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 max-w-2xl mx-auto mb-12"
          >
            Find answers to frequently asked questions about OIOT and our services
          </motion.p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {visibleFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#5445F9]/20 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-[#5445F9] transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 p-6 pt-0" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </motion.div>
          ))}

          {/* Load More Button - Only if needed */}
          {!showAll && faqData.length > 5 && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              onClick={() => setShowAll(true)}
              className="w-full mt-8 py-4 px-6 flex items-center justify-center gap-2 text-[#5445F9] hover:text-[#4334e8] font-medium bg-[#5445F9]/5 rounded-2xl transition-all duration-300 hover:bg-[#5445F9]/10 group"
            >
              <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              Load More Questions
            </motion.button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Faq;
