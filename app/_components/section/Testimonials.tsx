"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: "Priyan",
    location: "Bengaluru",
    role: "Regular Commuter",
    image: "/assets/users/oiot-rider.jpg",
    quote: "OIOT has made commuting so much easier. I no longer worry about hidden charges or feeling unsafe while traveling at night. The app is super easy to use, and the drivers are always on time."
  },
  {
    name: "Ravi",
    location: "Mysuru",
    role: "Auto Driver",
    image: "/assets/users/user3.jpeg",
    quote: "As a driver, OIOT has given me a professional platform to manage my business. The Towner app keeps everything organized, and I can focus on delivering great service to my customers."
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[length:30px_30px] bg-grid-pattern" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#5445F9]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#5445F9]/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block mb-4 px-6 py-2 bg-[#5445F9]/10 rounded-full"
          >
            <span className="text-[#5445F9] font-semibold">Testimonials</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            What Our <span className="text-[#5445F9]">Users</span> Are Saying
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Card Background with Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#5445F9]/5 to-transparent rounded-3xl transform group-hover:scale-105 transition-transform duration-300" />
              
              {/* Main Card */}
              <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Quote Icon */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#5445F9] rounded-full flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                  <Quote className="w-6 h-6 text-white" />
                </div>
                
                {/* Content */}
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* User Image */}
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex-1">
                    <p className="text-gray-600 mb-6 italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-2">
                      <div>
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-gray-500 text-sm">
                          {testimonial.role} • {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;