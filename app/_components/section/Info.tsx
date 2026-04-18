// "use client";  // Add this at the top

// import React, { useState } from "react";
// import { Shield, MapPin, Wallet, Users } from "lucide-react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// const features = [
//   {
//     title: "Instant Access to Trusted Local Drivers",
//     description: "OIOT brings you face-to-face with verified, government-approved taxi and auto drivers in Karnataka—no middlemen, no hassles. Just direct, reliable rides with professionals you can trust.",
//     icon: Users,
//     color: "bg-blue-50",
//     iconColor: "text-[#5445F9]"
//   },
//   {
//     title: "Honest Pricing, Every Single Ride",
//     description: "Forget about unpredictable fare hikes and hidden charges. OIOT ensures that all rides are priced fairly and transparently, following government regulations—so you always know what to expect, no matter the time of day.",
//     icon: Wallet,
//     color: "bg-purple-50",
//     iconColor: "text-[#5445F9]"
//   },
//   {
//     title: "Wherever You Are, Whenever You Need It",
//     description: "From the busiest cities to the most remote villages, OIOT covers all corners of Karnataka. Whether you're headed to work or exploring off-the-beaten-path destinations, we've got you covered with reliable transportation, anytime.",
//     icon: MapPin,
//     color: "bg-indigo-50",
//     iconColor: "text-[#5445F9]"
//   },
//   {
//     title: "Peace of Mind with Every Journey",
//     description: "Traveling should never be stressful. With OIOT's built-in safety features like live trip tracking, SOS alerts, and emergency response, you can ride with the confidence that help is always within reach, and your safety is our top priority.",
//     icon: Shield,
//     color: "bg-violet-50",
//     iconColor: "text-[#5445F9]"
//   }
// ];

// const Info = () => {
//   return (
//     <section className="py-10 relative overflow-hidden">
//       <div className="absolute inset-0 opacity-20 bg-[length:30px_30px] bg-grid-pattern" />

//       <div className="container mx-auto px-4 relative">
//         <div className="text-center mb-20">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="inline-block mb-4 px-6 py-2 bg-[#5445F9]/10 rounded-full"
//           >
//             <span className="text-[#5445F9] font-semibold">Why Choose Us</span>
//           </motion.div>
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-4xl md:text-5xl font-bold mb-6"
//           >
//             Why Choose <span className="text-[#5445F9]">OIOT</span>?
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="text-gray-600 max-w-2xl mx-auto mb-12"
//           >
//             Experience the difference with our innovative approach to transportation services across Karnataka.
//           </motion.p>
//         </div>
      
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
//           {/* Features Grid */}
//           <div className="lg:col-span-7">
//             <div className="grid grid-cols-2 gap-6">
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   whileHover={{ scale: 1.05, y: -5 }}
//                   className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
//                 >
//                   <div className={`h-12 w-12 ${feature.color} rounded-xl flex items-center justify-center mb-4 transform transition-transform group-hover:scale-110`}>
//                     <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
//                   </div>
//                   <h3 className="text-lg font-bold mb-3 text-gray-900">
//                     {feature.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm leading-relaxed">
//                     {feature.description}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* Image with floating elements */}
//           <div className="lg:col-span-5 relative">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="relative h-[500px]"
//             >
//               <Image
//                 src="/assets/elements/autoickshaw.png"
//                 alt="OIOT Auto Rickshaw"
//                 fill
//                 className="object-contain z-10 relative"
//               />
//               {/* Decorative Elements */}
//               <motion.div 
//                 className="absolute top-20 -left-10 w-20 h-20 bg-blue-50 rounded-full opacity-50"
//                 animate={{ y: [0, -10, 0] }}
//                 transition={{ duration: 2, repeat: Infinity }}
//               />
//               <motion.div 
//                 className="absolute bottom-40 -right-5 w-16 h-16 bg-purple-50 rounded-full opacity-50"
//                 animate={{ y: [0, 10, 0] }}
//                 transition={{ duration: 2.5, repeat: Infinity }}
//               />
//               <motion.div 
//                 className="absolute top-40 right-10 w-12 h-12 bg-indigo-50 rounded-full opacity-50"
//                 animate={{ y: [0, -15, 0] }}
//                 transition={{ duration: 3, repeat: Infinity }}
//               />
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Info;



// "use client";

// import React, { useState } from "react";
// import { Shield, FileText, Calculator, Smartphone, Award, Zap } from "lucide-react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const transparencyFeatures = [
//   {
//     icon: Shield,
//     title: "100% Transparent Pricing",
//     description: "Every fare calculated using government-approved rates. See exact distance, time, and additional charges before you book. What you see is what you pay, always.",
//     emoji: "🏷️",
//     color: "from-[#5682e8] to-[#4a6fd1]"
//   },
//   {
//     icon: Award,
//     title: "No Surge, Ever",
//     description: "Rain or shine, peak hours or festivals - your fare stays the same. No dynamic pricing, no surge multipliers. Same rate, always guaranteed.",
//     emoji: "🚫",
//     color: "from-emerald-500 to-green-600"
//   },
//   {
//     icon: FileText,
//     title: "Detailed Invoicing",
//     description: "Get complete trip breakdowns showing distance traveled, time duration, tolls, and parking charges. Complete transparency in every transaction.",
//     emoji: "📊",
//     color: "from-cyan-500 to-blue-600"
//   },
//   {
//     icon: Calculator,
//     title: "Meter-Based Billing",
//     description: "Like traditional taxis, but digital. Watch your fare calculate in real-time based on actual distance and time. Modern meets traditional reliability.",
//     emoji: "⚡",
//     color: "from-amber-500 to-orange-600"
//   },
//   {
//     icon: Shield,
//     title: "Government Verified",
//     description: "All rates follow Karnataka government regulations. Verified drivers through Towner ecosystem. Regulatory compliance guaranteed for your peace of mind.",
//     emoji: "🛡️",
//     color: "from-purple-500 to-violet-600"
//   },
//   {
//     icon: Smartphone,
//     title: "Smart Technology",
//     description: "Advanced app with live tracking, SOS features, and seamless payment - but with honest pricing. Modern meets honest in every single ride experience.",
//     emoji: "📱",
//     color: "from-pink-500 to-rose-600"
//   }
// ];

// const Info = () => {
//   const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

//   return (
//     <section className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
//       {/* Background Elements */}
//       <div className="absolute inset-0 opacity-20 bg-[length:30px_30px] bg-grid-pattern" />
//       <div className="absolute top-0 left-0 w-64 h-64 bg-[#5682e8]/10 rounded-full blur-3xl" />
//       <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#5682e8]/10 rounded-full blur-3xl" />

//       <div className="container mx-auto px-4 relative">
//         {/* Header */}
//         <div className="text-center mb-20">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="inline-block mb-4 px-6 py-2 bg-[#5682e8]/10 rounded-full"
//           >
//             <span className="text-[#5682e8] font-semibold flex items-center gap-2">
//               <Zap className="w-4 h-4" />
//               The OIOT Difference
//             </span>
//           </motion.div>
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-4xl md:text-5xl font-bold mb-6"
//           >
//             Experience Complete <span className="text-[#5682e8]">Transparency</span>
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="text-gray-600 max-w-3xl mx-auto text-lg"
//           >
//             At OIOT, transparency isn't just a promise—it's built into every aspect of our service. Here's how we ensure honest, reliable transportation:
//           </motion.p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
//           {/* Left Side - Features Cards */}
//           <div className="lg:col-span-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {transparencyFeatures.map((feature, index) => (
//                 <motion.div
//                   key={feature.title}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   onHoverStart={() => setHoveredFeature(index)}
//                   onHoverEnd={() => setHoveredFeature(null)}
//                   className="group relative"
//                 >
//                   {/* Background card with rotation effect */}
//                   <div className="absolute inset-0 bg-white rounded-3xl rotate-2 transform transition-transform group-hover:rotate-0 shadow-lg" />
                  
//                   <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
//                     <div className="flex items-start gap-6">
//                       {/* Icon with gradient background */}
//                       <div className="relative flex-shrink-0">
//                         <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center transform transition-transform group-hover:scale-110 shadow-lg`}>
//                           <feature.icon className="w-8 h-8 text-white" />
//                         </div>
//                         {/* Emoji badge */}
//                         <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-lg border-2 border-gray-100">
//                           {feature.emoji}
//                         </div>
//                       </div>
                      
//                       <div className="flex-1 min-w-0">
//                         <h3 className="text-xl font-bold mb-3 group-hover:text-[#5682e8] transition-colors leading-tight">
//                           {feature.title}
//                         </h3>
//                         <p className="text-gray-600 text-sm leading-relaxed">
//                           {feature.description}
//                         </p>
//                       </div>
//                     </div>

//                     {/* Sparkle Effect */}
//                     {hoveredFeature === index && (
//                       <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl">
//                         {[...Array(5)].map((_, i) => (
//                           <motion.div
//                             key={i}
//                             initial={{ opacity: 0, scale: 0 }}
//                             animate={{ opacity: 1, scale: 1 }}
//                             exit={{ opacity: 0, scale: 0 }}
//                             className="absolute w-2 h-2 bg-[#5682e8] rounded-full"
//                             style={{
//                               left: `${Math.random() * 100}%`,
//                               top: `${Math.random() * 100}%`,
//                               animationDelay: `${i * 0.1}s`
//                             }}
//                           />
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* Right Side - Enhanced Image Section */}
//           <div className="lg:col-span-4">
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               className="sticky top-8"
//             >
//               {/* Main Image Container */}
//               <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
//                 <div className="text-center mb-6">
//                   <h3 className="text-xl font-bold text-[#5682e8] mb-2">
//                     Honest Transportation
//                   </h3>
//                   <p className="text-gray-600 text-sm">
//                     Every ride, every fare, completely transparent
//                   </p>
//                 </div>

//                 <div className="relative h-80 flex items-center justify-center">
//                   <motion.div
//                     animate={{ y: [0, -10, 0] }}
//                     transition={{ duration: 4, repeat: Infinity }}
//                     className="relative"
//                   >
//                     <Image
//                       src="/assets/elements/autorickshaw.png"
//                       alt="OIOT Auto Rickshaw"
//                       width={300}
//                       height={200}
//                       className="object-contain"
//                     />
                    
//                     {/* Central glow effect */}
//                     <div className="absolute inset-0 bg-gradient-to-r from-[#5682e8]/20 to-blue-400/20 rounded-full blur-3xl -z-10 transform scale-150"></div>
//                   </motion.div>

//                   {/* Floating transparency elements around image */}
//                   <motion.div 
//                     className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-[#5682e8]/20"
//                     animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }}
//                     transition={{ duration: 3, repeat: Infinity }}
//                   >
//                     <span className="text-lg">🏷️</span>
//                   </motion.div>
                  
//                   <motion.div 
//                     className="absolute top-8 right-8 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-emerald-400/20"
//                     animate={{ y: [0, 12, 0], rotate: [0, -15, 0] }}
//                     transition={{ duration: 3.5, repeat: Infinity }}
//                   >
//                     <span className="text-sm">🚫</span>
//                   </motion.div>
                  
//                   <motion.div 
//                     className="absolute bottom-8 left-8 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-cyan-400/20"
//                     animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
//                     transition={{ duration: 4, repeat: Infinity }}
//                   >
//                     <span className="text-sm">📊</span>
//                   </motion.div>
                  
//                   <motion.div 
//                     className="absolute bottom-4 right-4 w-8 h-8 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-amber-400/20"
//                     animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
//                     transition={{ duration: 5, repeat: Infinity }}
//                   >
//                     <span className="text-xs">⚡</span>
//                   </motion.div>
//                 </div>

//                 {/* Trust metrics at bottom */}
//                 <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-100">
//                   <div className="text-center">
//                     <div className="text-2xl font-bold text-[#5682e8]">0</div>
//                     <div className="text-xs text-gray-600">Surge Charges</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-2xl font-bold text-emerald-600">100%</div>
//                     <div className="text-xs text-gray-600">Transparent</div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         {/* Bottom Trust Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="mt-20 text-center"
//         >
//           <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 max-w-4xl mx-auto">
//             <h3 className="text-2xl font-bold text-[#5682e8] mb-6">
//               Trusted Across Karnataka
//             </h3>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//               {[
//                 { value: "₹50L+", label: "Saved by Riders", color: "text-[#5682e8]" },
//                 { value: "15K+", label: "Happy Users", color: "text-emerald-600" },
//                 { value: "0", label: "Hidden Fees", color: "text-cyan-600" },
//                 { value: "24/7", label: "Support", color: "text-amber-600" }
//               ].map((metric, index) => (
//                 <motion.div
//                   key={index}
//                   whileHover={{ scale: 1.05, y: -2 }}
//                   className="text-center"
//                 >
//                   <div className={`text-3xl font-bold ${metric.color} mb-2`}>
//                     {metric.value}
//                   </div>
//                   <div className="text-sm text-gray-600 font-medium">
//                     {metric.label}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.div>

//         {/* Decorative Elements */}
//         <div className="absolute -left-16 top-1/3 w-32 h-32 bg-[#5682e8]/5 rounded-full blur-2xl" />
//         <div className="absolute -right-16 bottom-1/3 w-32 h-32 bg-[#5682e8]/5 rounded-full blur-2xl" />
//       </div>
//     </section>
//   );
// };

// export default Info;

"use client";

import React, { useState } from "react";
import { Shield, FileText, Calculator, Smartphone, Award, Zap, Tag, Ban } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const transparencyFeatures = [
  {
    icon: Tag,
    title: "100% Transparent Pricing",
    description: "Every fare calculated using government-approved rates. See exact distance, time, and additional charges before you book.",
    color: "from-[#5682e8] to-[#4a6fd1]"
  },
  {
    icon: Ban,
    title: "No Surge, Ever",
    description: "Rain or shine, peak hours or festivals - your fare stays the same. No dynamic pricing, no surge multipliers.",
    color: "from-emerald-500 to-green-600"
  },
  {
    icon: FileText,
    title: "Detailed Invoicing",
    description: "Get complete trip breakdowns showing distance traveled, time duration, tolls, and parking charges.",
    color: "from-cyan-500 to-blue-600"
  },
  {
    icon: Calculator,
    title: "Meter-Based Billing",
    description: "Like traditional taxis, but digital. Watch your fare calculate in real-time based on actual distance and time.",
    color: "from-amber-500 to-orange-600"
  },
  {
    icon: Shield,
    title: "Government Verified",
    description: "All rates follow Karnataka government regulations. Verified drivers through Towner ecosystem.",
    color: "from-purple-500 to-violet-600"
  },
  {
    icon: Smartphone,
    title: "Smart Technology",
    description: "Advanced app with live tracking, SOS features, and seamless payment - but with honest pricing.",
    color: "from-pink-500 to-rose-600"
  }
];

const Info = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 bg-[length:30px_30px] bg-grid-pattern" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#5682e8]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#5682e8]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-20">
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block mb-4 px-6 py-2 bg-[#5682e8]/10 rounded-full"
          > */}
           
          {/* </motion.div> */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Why Choose <span className="text-[#5546fa]">OIOT</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 max-w-3xl mx-auto"
          >
            At OIOT, transparency isn't just a promise—it's built into every aspect of our service. Here's how we ensure honest, reliable transportation:
          </motion.p>
        </div>

        {/* Features Cards - 3 per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {transparencyFeatures.map((feature, index) => (
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
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center transform transition-transform group-hover:scale-110 flex-shrink-0`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#5682e8] transition-colors leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Metrics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 text-center"
        >
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#5682e8] mb-6">
              Trusted Across Karnataka
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "₹50L+", label: "Saved by Riders", color: "text-[#5682e8]" },
                { value: "11K+", label: "Happy Users", color: "text-emerald-600" },
                { value: "0", label: "Hidden Fees", color: "text-cyan-600" },
                { value: "24/7", label: "Support", color: "text-amber-600" }
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="text-center"
                >
                  <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute -left-16 top-1/3 w-32 h-32 bg-[#5682e8]/5 rounded-full blur-2xl" />
        <div className="absolute -right-16 bottom-1/3 w-32 h-32 bg-[#5682e8]/5 rounded-full blur-2xl" />
      </div>
    </section>
  );
};

export default Info;
