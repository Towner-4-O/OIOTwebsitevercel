"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Bell, MapPin, Shield, UserCheck } from 'lucide-react';

const safetyFeatures = [
  {
    icon: Bell,
    title: "SOS Alerts",
    description: "Send an emergency signal to authorities with just one tap.",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: MapPin,
    title: "Live Trip Tracking",
    description: "Your trip can be tracked in real-time by trusted contacts, providing added peace of mind.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Shield,
    title: "Police Department Collaboration",
    description: "In case of an emergency, OIOT collaborates with local authorities for quick response times.",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: UserCheck,
    title: "Driver Verification & Rating",
    description: "Every driver goes through a thorough verification process and is rated by passengers to ensure the highest standards of professionalism.",
    color: "from-green-500 to-emerald-500"
  }
];

const Vision = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 bg-[length:30px_30px] bg-grid-pattern" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#5445F9]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#5445F9]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block mb-4 px-6 py-2 bg-[#5445F9]/10 rounded-full"
          >
            <span className="text-[#5445F9] font-semibold">Safety Features</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Your Safety is <span className="text-[#5445F9]">Our Priority</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            At OIOT, we take safety seriously. Here are the ways we ensure you're always secure while traveling:
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {safetyFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-white rounded-3xl rotate-2 transform transition-transform group-hover:rotate-0" />
              <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center transform transition-transform group-hover:scale-110`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#5445F9] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute -left-16 top-1/3 w-32 h-32 bg-[#5445F9]/5 rounded-full blur-2xl" />
        <div className="absolute -right-16 bottom-1/3 w-32 h-32 bg-[#5445F9]/5 rounded-full blur-2xl" />
      </div>
    </section>
  );
};

export default Vision;