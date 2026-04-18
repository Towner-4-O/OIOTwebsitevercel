// "use client";

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Smartphone, MapPin, CreditCard, Building2, ShieldCheck, GraduationCap } from 'lucide-react';

// const processData = {
//   commuters: [
//     {
//       icon: Smartphone,
//       title: "Book a Ride",
//       description: "Download the OIOT app, enter your destination, and book your ride instantly or schedule it for later.",
//       color: "from-blue-500 to-indigo-600"
//     },
//     {
//       icon: MapPin,
//       title: "Track Your Ride",
//       description: "Enjoy real-time tracking of your trip for added security and convenience.",
//       color: "from-green-500 to-emerald-600"
//     },
//     {
//       icon: CreditCard,
//       title: "Pay Directly to Drivers",
//       description: "No middlemen, no additional charges. Pay the government-regulated fare directly to your driver, and receive an instant digital invoice for complete transparency.",
//       color: "from-purple-500 to-violet-600"
//     }
//   ],
//   drivers: [
//     {
//       icon: Building2,
//       title: "Manage Your Business",
//       description: "Use the Towner platform to manage ride requests, track earnings, and access driver support.",
//       color: "from-orange-500 to-red-600"
//     },
//     {
//       icon: ShieldCheck,
//       title: "Get Verified & Stay Compliant",
//       description: "Complete the verification process and ensure your business adheres to all necessary local regulations. Stay updated on government fare changes and other important regulations.",
//       color: "from-cyan-500 to-blue-600"
//     },
//     {
//       icon: GraduationCap,
//       title: "Access to Training and Resources",
//       description: "OIOT provides ongoing professional development to help drivers deliver the best possible experience to riders.",
//       color: "from-pink-500 to-rose-600"
//     }
//   ]
// };

// const Highlights = () => {
//   const [activeTab, setActiveTab] = useState<'commuters' | 'drivers'>('commuters');

//   return (
//     <section className="py-10 relative overflow-hidden">
//       <div className="absolute inset-0 opacity-20 bg-[length:30px_30px] bg-grid-pattern" />
      
//       <div className="container mx-auto px-4 relative">
//         <div className="text-center mb-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="inline-block mb-4 px-6 py-2 bg-[#5445F9]/10 rounded-full"
//           >
//             <span className="text-[#5445F9] font-semibold">How It Works</span>
//           </motion.div>
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-4xl md:text-5xl font-bold mb-6"
//           >
//             Experience <span className="text-[#5445F9]">Seamless</span> Commuting
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="text-gray-600 max-w-2xl mx-auto mb-12"
//           >
//             Discover how OIOT makes your journey smoother and more convenient, whether you're a commuter or a driver.
//           </motion.p>
//         </div>

       

//         <div className="flex justify-center gap-4 mb-16">
//           {['commuters', 'drivers'].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab as 'commuters' | 'drivers')}
//               className={`px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 ${
//                 activeTab === tab 
//                   ? 'bg-[#5445F9] text-white shadow-lg shadow-[#5445F9]/20'
//                   : 'bg-white text-gray-600 hover:bg-gray-50'
//               }`}
//             >
//               For {tab.charAt(0).toUpperCase() + tab.slice(1)}
//             </button>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {processData[activeTab].map((step, index) => (
//             <motion.div
//               key={step.title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="relative group h-[320px]" // Fixed height container
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-[#5445F9]/5 to-transparent rounded-3xl transform -rotate-3 transition-transform group-hover:rotate-0" />
//               <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
//                 <div className="mb-6 relative flex-shrink-0">
//                   <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center transform transition-transform group-hover:scale-110`}>
//                     <step.icon className="w-8 h-8 text-white" />
//                   </div>
//                   <div className="absolute -right-2 -top-2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-lg font-bold text-[#5445F9]">
//                     {index + 1}
//                   </div>
//                 </div>
//                 <div className="flex-1 flex flex-col min-h-0">
//                   <h3 className="text-2xl font-bold mb-3 group-hover:text-[#5445F9] transition-colors flex-shrink-0">
//                     {step.title}
//                   </h3>
//                   <p className="text-gray-600 overflow-y-auto flex-1 pr-2 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
//                     {step.description}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Highlights;
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, ShieldCheck, GraduationCap } from "lucide-react";

const driverSteps = [
  {
    icon: Building2,
    title: "Manage Your Business",
    description:
      "Use the Towner platform to manage ride requests, track earnings, and access driver support.",
    color: "from-orange-500 to-red-600",
  },
  {
    icon: ShieldCheck,
    title: "Get Verified & Stay Compliant",
    description:
      "Complete the verification process and ensure your business adheres to all necessary local regulations. Stay updated on government fare changes and other important regulations.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: GraduationCap,
    title: "Access to Training and Resources",
    description:
      "OIOT provides ongoing professional development to help drivers deliver the best possible experience to riders.",
    color: "from-pink-500 to-rose-600",
  },
];

const Highlights = () => {
  return (
    <section className="py-10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[length:30px_30px] bg-grid-pattern" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block mb-4 px-6 py-2 bg-[#5445F9]/10 rounded-full"
          >
            <span className="text-[#5445F9] font-semibold">How It Works</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Experience <span className="text-[#5445F9]">Seamless</span> Driving
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 max-w-2xl mx-auto mb-12"
          >
            Discover how OIOT helps drivers manage their business, stay
            compliant, and grow professionally.
          </motion.p>
        </div>

        {/* Steps for drivers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {driverSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group h-[320px]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#5445F9]/5 to-transparent rounded-3xl transform -rotate-3 transition-transform group-hover:rotate-0" />
              <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="mb-6 relative flex-shrink-0">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center transform transition-transform group-hover:scale-110`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -right-2 -top-2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-lg font-bold text-[#5445F9]">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1 flex flex-col min-h-0">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#5445F9] transition-colors flex-shrink-0">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 overflow-y-auto flex-1 pr-2 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
