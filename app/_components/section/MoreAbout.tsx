"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const MoreAbout = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 bg-[length:30px_30px] bg-grid-pattern" />
      
      <div className="container mx-auto px-4">
        {/* Header Section */}
      

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side with image and decorative elements */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[500px] w-full">
              <Image
                src="/assets/elements/manmobile.png"
                alt="OIOT Service"
                fill
                className="object-contain"
              />
            </div>
            {/* Decorative circles */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50/30 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-50/30 rounded-full blur-2xl" />
          </motion.div>

          {/* Right side with content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-block mb-4 px-6 py-2 bg-[#5445F9]/10 rounded-full"
              >
                <span className="text-[#5445F9] font-semibold">About Us</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Revolutionizing Travel

<span className="text-[#5445F9]"> Across Karnataka </span>
              </motion.h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                OIOT is the Best App in taxi booking services in Bangalore...
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our mission is to deliver a safer, more reliable, and hassle-free travel experience—whether you're in a bustling city or a remote town. With OIOT, you no longer need to rely on third-party aggregators to book a ride.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We're changing the game with a system that brings you closer to your journey and ensures that your commute is as smooth and predictable as possible.
              </p>
            </div>

            {/* SVG Filter for text effect */}
            <svg className="hidden">
              <defs>
                <filter id="rough-brush">
                  <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" result="noise"/>
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
                  <feGaussianBlur stdDeviation="0.5" />
                </filter>
              </defs>
            </svg>

            {/* Decorative element */}
            <div className="absolute top-1/2 -right-20 w-40 h-40 bg-indigo-50/30 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MoreAbout;