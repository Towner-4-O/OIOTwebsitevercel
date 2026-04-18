// 'use client'

// import React, { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Shield, FileText, Calculator, Smartphone, Award, Zap } from 'lucide-react'

// const transparencyFeatures = [
//   {
//     emoji: "🏷️",
//     title: "100% Transparent Pricing",
//     description: "Every fare calculated using government-approved rates. See exact distance, time, and additional charges before you book.",
//     highlight: "What you see is what you pay",
//     icon: Shield,
//     color: "from-[#5445F9] to-[#4334e8]",
//     bgColor: "bg-[#5445F9]/5",
//     borderColor: "border-[#5445F9]/20"
//   },
//   {
//     emoji: "🚫",
//     title: "No Surge, Ever",
//     description: "Rain or shine, peak hours or festivals - your fare stays the same. No dynamic pricing, no surge multipliers.",
//     highlight: "Same rate, always",
//     icon: Award,
//     color: "from-green-500 to-emerald-600",
//     bgColor: "bg-green-50",
//     borderColor: "border-green-200"
//   },
//   {
//     emoji: "📊",
//     title: "Detailed Invoicing",
//     description: "Get complete trip breakdowns showing distance traveled, time duration, tolls, and parking charges.",
//     highlight: "Complete transparency",
//     icon: FileText,
//     color: "from-blue-500 to-indigo-600",
//     bgColor: "bg-blue-50",
//     borderColor: "border-blue-200"
//   },
//   {
//     emoji: "⚡",
//     title: "Meter-Based Billing",
//     description: "Like traditional taxis, but digital. Watch your fare calculate in real-time based on actual distance and time.",
//     highlight: "Real-time calculation",
//     icon: Calculator,
//     color: "from-yellow-500 to-orange-500",
//     bgColor: "bg-yellow-50",
//     borderColor: "border-yellow-200"
//   },
//   {
//     emoji: "🛡️",
//     title: "Government Verified",
//     description: "All rates follow Karnataka government regulations. Verified drivers through Towner ecosystem.",
//     highlight: "Regulatory compliance",
//     icon: Shield,
//     color: "from-purple-500 to-violet-600",
//     bgColor: "bg-purple-50",
//     borderColor: "border-purple-200"
//   },
//   {
//     emoji: "📱",
//     title: "Smart Technology",
//     description: "Advanced app with live tracking, SOS features, and seamless payment - but with honest pricing.",
//     highlight: "Modern meets honest",
//     icon: Smartphone,
//     color: "from-pink-500 to-rose-600",
//     bgColor: "bg-pink-50",
//     borderColor: "border-pink-200"
//   }
// ]

// const TransparencyFeaturesSection: React.FC = () => {
//   const [activeFeature, setActiveFeature] = useState(0)

//   return (
//     <section className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5 bg-[length:30px_30px] bg-grid-pattern" />
      
//       <div className="container mx-auto px-4 relative">
//         {/* Header */}
//         <div className="text-center mb-20">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="inline-block mb-6 px-6 py-3 bg-[#5445F9]/10 rounded-full"
//           >
//             <span className="text-[#5445F9] font-semibold flex items-center gap-2">
//               <Zap className="w-5 h-5" />
//               The OIOT Difference
//             </span>
//           </motion.div>
          
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-4xl md:text-6xl font-bold mb-6"
//           >
//             Why Choose <span className="text-[#5445F9]">OIOT</span>?
//           </motion.h2>
          
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-xl text-gray-600 max-w-3xl mx-auto"
//           >
//             Experience complete transparency in every ride with our innovative approach to honest pricing
//           </motion.p>
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//           {transparencyFeatures.map((feature, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               onHoverStart={() => setActiveFeature(index)}
//               whileHover={{ scale: 1.05, y: -10 }}
//               className={`
//                 bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 
//                 border-2 ${feature.borderColor} group cursor-pointer relative overflow-hidden
//               `}
//             >
//               {/* Background Gradient Overlay */}
//               <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
//               {/* Icon Container */}
//               <div className={`
//                 h-16 w-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 
//                 group-hover:scale-110 transition-transform duration-300 relative z-10
//               `}>
//                 <div className="text-3xl">{feature.emoji}</div>
//               </div>

//               {/* Content */}
//               <div className="relative z-10">
//                 <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-[#5445F9] transition-colors">
//                   {feature.title}
//                 </h3>
                
//                 <p className="text-gray-600 text-sm leading-relaxed mb-4">
//                   {feature.description}
//                 </p>

//                 {/* Highlight Badge */}
//                 <div className={`
//                   inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold
//                   bg-gradient-to-r ${feature.color} text-white
//                   group-hover:scale-105 transition-transform duration-300
//                 `}>
//                   <feature.icon className="w-3 h-3" />
//                   {feature.highlight}
//                 </div>
//               </div>

//               {/* Hover Effect Circle */}
//               <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#5445F9]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//             </motion.div>
//           ))}
//         </div>

//         {/* Interactive Feature Showcase */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100"
//         >
//           <div className="text-center mb-8">
//             <h3 className="text-2xl font-bold text-gray-900 mb-4">
//               Featured Transparency Benefit
//             </h3>
//           </div>

//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeFeature}
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -20 }}
//               transition={{ duration: 0.3 }}
//               className="flex items-center gap-8"
//             >
//               <div className={`
//                 h-24 w-24 rounded-3xl flex items-center justify-center flex-shrink-0
//                 bg-gradient-to-br ${transparencyFeatures[activeFeature].color}
//               `}>
//                 <div className="text-4xl">{transparencyFeatures[activeFeature].emoji}</div>
//               </div>
              
//               <div>
//                 <h4 className="text-2xl font-bold text-gray-900 mb-2">
//                   {transparencyFeatures[activeFeature].title}
//                 </h4>
//                 <p className="text-gray-600 text-lg leading-relaxed">
//                   {transparencyFeatures[activeFeature].description}
//                 </p>
//               </div>
//             </motion.div>
//           </AnimatePresence>

//           {/* Feature Navigation Dots */}
//           <div className="flex justify-center gap-3 mt-8">
//             {transparencyFeatures.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveFeature(index)}
//                 className={`
//                   w-3 h-3 rounded-full transition-all duration-300
//                   ${activeFeature === index ? 'bg-[#5445F9] scale-125' : 'bg-gray-300 hover:bg-gray-400'}
//                 `}
//               />
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default TransparencyFeaturesSection
