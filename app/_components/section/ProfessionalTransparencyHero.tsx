// 'use client'

// import React, { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Shield, Calculator, CheckCircle, MapPin, Clock, Navigation, Star, Award, TrendingUp, Zap } from 'lucide-react'
// import { Lato } from "next/font/google"
// import { FaApple, FaGooglePlay } from "react-icons/fa"
// import { media } from "@/constant"

// const lato = Lato({
//   weight: ["400", "700"],
//   subsets: ["latin"],
//   display: "swap",
// })

// interface ValueProposition {
//   emoji: string
//   title: string
//   description: string
//   highlight: string
// }

// interface LivePriceData {
//   pickup: string
//   drop: string
//   distance: number
//   estimatedTime: number
//   oiotFare: number
//   competitorFare: number
//   surgeMultiplier: number
//   savings: number
// }

// export const ProfessionalTransparencyHero: React.FC = () => {
//   const [activeValueProp, setActiveValueProp] = useState(0)
//   const [livePricing, setLivePricing] = useState<LivePriceData>({
//     pickup: "Koramangala",
//     drop: "Whitefield",
//     distance: 18,
//     estimatedTime: 45,
//     oiotFare: 339,
//     competitorFare: 678,
//     surgeMultiplier: 1.8,
//     savings: 339
//   })

//   const valueProps: ValueProposition[] = [
//     {
//       emoji: "🏷️",
//       title: "100% Transparent Pricing",
//       description: "Every fare calculated using government-approved rates. See exact distance, time, and additional charges before you book.",
//       highlight: "What you see is what you pay"
//     },
//     {
//       emoji: "🚫",
//       title: "No Surge, Ever",
//       description: "Rain or shine, peak hours or festivals - your fare stays the same. No dynamic pricing, no surge multipliers.",
//       highlight: "Same rate, always"
//     },
//     {
//       emoji: "📊",
//       title: "Detailed Invoicing",
//       description: "Get complete trip breakdowns showing distance traveled, time duration, tolls, and parking charges.",
//       highlight: "Complete transparency"
//     },
//     {
//       emoji: "⚡",
//       title: "Meter-Based Billing",
//       description: "Like traditional taxis, but digital. Watch your fare calculate in real-time based on actual distance and time.",
//       highlight: "Real-time calculation"
//     },
//     {
//       emoji: "🛡️",
//       title: "Government Verified",
//       description: "All rates follow Karnataka government regulations. Verified drivers through Towner ecosystem.",
//       highlight: "Regulatory compliance"
//     },
//     {
//       emoji: "📱",
//       title: "Smart Technology",
//       description: "Advanced app with live tracking, SOS features, and seamless payment - but with honest pricing.",
//       highlight: "Modern meets honest"
//     }
//   ]

//   // Auto-rotate value propositions
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveValueProp((prev) => (prev + 1) % valueProps.length)
//     }, 4000)
//     return () => clearInterval(interval)
//   }, [valueProps.length])

//   // Simulate live pricing updates
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setLivePricing(prev => ({
//         ...prev,
//         competitorFare: prev.oiotFare * (1.2 + Math.random() * 1.8), // Random surge between 1.2x - 3x
//         surgeMultiplier: 1.2 + Math.random() * 1.8
//       }))
//     }, 8000)
//     return () => clearInterval(interval)
//   }, [])

//   const InteractivePriceComparison: React.FC = () => (
//     <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-[#1E40AF] to-[#1E3A8A] p-6 text-white text-center">
//         <h3 className={`${lato.className} text-xl font-bold mb-2`}>Live Price Comparison</h3>
//         <p className="text-sm opacity-90">Real-time difference in pricing</p>
//       </div>

//       <div className="p-6 space-y-6">
//         {/* Route Visualization */}
//         <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6">
//           <div className="flex items-center justify-between mb-4">
//             <div className="flex items-center gap-3">
//               <div className="w-4 h-4 bg-[#1E40AF] rounded-full shadow-lg"></div>
//               <div className="text-sm font-semibold text-gray-800">{livePricing.pickup}</div>
//             </div>
            
//             <div className="flex-1 mx-4 relative">
//               <div className="h-0.5 bg-gradient-to-r from-[#1E40AF] to-red-500"></div>
//               <motion.div
//                 animate={{ x: [0, 10, 0] }}
//                 transition={{ duration: 2, repeat: Infinity }}
//                 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//               >
//                 <Navigation className="w-4 h-4 text-[#1E40AF]" />
//               </motion.div>
//             </div>
            
//             <div className="flex items-center gap-3">
//               <div className="text-sm font-semibold text-gray-800">{livePricing.drop}</div>
//               <div className="w-4 h-4 bg-red-500 rounded-full shadow-lg"></div>
//             </div>
//           </div>
          
//           <div className="flex items-center justify-center gap-4 text-xs text-gray-600">
//             <div className="flex items-center gap-1">
//               <MapPin className="w-3 h-3" />
//               {livePricing.distance} km
//             </div>
//             <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
//             <div className="flex items-center gap-1">
//               <Clock className="w-3 h-3" />
//               ~{livePricing.estimatedTime} mins
//             </div>
//           </div>
//         </div>

//         {/* Price Cards */}
//         <div className="grid grid-cols-2 gap-4">
//           {/* OIOT Card */}
//           <motion.div 
//             whileHover={{ scale: 1.02, y: -2 }}
//             className="bg-gradient-to-br from-[#1E40AF]/5 to-[#059669]/10 border-2 border-[#1E40AF]/20 rounded-2xl p-5"
//           >
//             <div className="flex items-center gap-2 mb-3">
//               <Shield className="w-5 h-5 text-[#1E40AF]" />
//               <span className="font-bold text-[#1E40AF]">OIOT</span>
//             </div>
//             <div className="text-3xl font-bold text-[#1E40AF] mb-3">
//               ₹{livePricing.oiotFare}
//             </div>
//             <div className="text-xs bg-[#059669]/10 text-[#059669] px-3 py-1.5 rounded-full font-medium">
//               Government Rate • No Surge
//             </div>
//           </motion.div>

//           {/* Competitor Card */}
//           <motion.div 
//             whileHover={{ scale: 1.02, y: -2 }}
//             className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-5"
//           >
//             <div className="flex items-center gap-2 mb-3">
//               <TrendingUp className="w-5 h-5 text-red-600" />
//               <span className="font-bold text-red-600">Others</span>
//             </div>
//             <motion.div 
//               key={livePricing.competitorFare}
//               initial={{ scale: 1.1 }}
//               animate={{ scale: 1 }}
//               className="text-3xl font-bold text-red-600 mb-3"
//             >
//               ₹{Math.round(livePricing.competitorFare)}
//             </motion.div>
//             <div className="text-xs bg-red-100 text-red-600 px-3 py-1.5 rounded-full font-medium flex items-center gap-1">
//               🔥 {livePricing.surgeMultiplier.toFixed(1)}x Surge
//             </div>
//           </motion.div>
//         </div>

//         {/* Savings Highlight */}
//         <motion.div 
//           animate={{ scale: [1, 1.02, 1] }}
//           transition={{ duration: 3, repeat: Infinity }}
//           className="bg-gradient-to-r from-[#059669] to-[#047857] rounded-2xl p-6 text-white text-center"
//         >
//           <div className="text-sm opacity-90 mb-1">You Save</div>
//           <motion.div 
//             key={Math.round(livePricing.competitorFare - livePricing.oiotFare)}
//             initial={{ scale: 1.2 }}
//             animate={{ scale: 1 }}
//             className="text-4xl font-bold mb-1"
//           >
//             ₹{Math.round(livePricing.competitorFare - livePricing.oiotFare)}
//           </motion.div>
//           <div className="text-sm opacity-90">
//             That's {Math.round(((livePricing.competitorFare - livePricing.oiotFare) / livePricing.competitorFare) * 100)}% less!
//           </div>
//         </motion.div>

//         {/* Trust Indicators */}
//         <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-100">
//           <div className="text-center">
//             <div className="text-lg font-bold text-[#1E40AF]">₹50L+</div>
//             <div className="text-xs text-gray-600">Saved by riders</div>
//           </div>
//           <div className="text-center">
//             <div className="text-lg font-bold text-[#059669]">0</div>
//             <div className="text-xs text-gray-600">Surge charges</div>
//           </div>
//           <div className="text-center">
//             <div className="text-lg font-bold text-[#D97706]">100%</div>
//             <div className="text-xs text-gray-600">Transparent</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )

//   return (
//     <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-gray-50">
//       {/* Clean Background Pattern */}
//       <div className="absolute inset-0 opacity-[0.02]">
//         <div className="absolute inset-0" 
//              style={{
//                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//                backgroundSize: '60px 60px'
//              }} />
//       </div>

//       <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
//         <div className="grid grid-cols-1 xl:grid-cols-5 gap-12 min-h-screen items-center">
          
//           {/* Left Content - 3 columns */}
//           <div className="xl:col-span-3 space-y-10">
            
//             {/* Trust Badges */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="flex flex-wrap gap-3"
//             >
//               <div className="flex items-center gap-2 px-4 py-2 bg-[#1E40AF] text-white rounded-full text-sm font-semibold shadow-lg">
//                 <Shield className="w-4 h-4" />
//                 100% Transparent Pricing
//               </div>
//               <div className="flex items-center gap-2 px-4 py-2 bg-[#059669] text-white rounded-full text-sm font-semibold shadow-lg">
//                 <CheckCircle className="w-4 h-4" />
//                 Government Approved
//               </div>
//               <div className="flex items-center gap-2 px-4 py-2 bg-[#D97706] text-white rounded-full text-sm font-semibold shadow-lg">
//                 <Award className="w-4 h-4" />
//                 No Surge Ever
//               </div>
//             </motion.div>

//             {/* Main Headline */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="space-y-4"
//             >
//               <h1 className={`${lato.className} text-5xl md:text-7xl font-bold leading-[0.9] text-gray-900`}>
//                 Fair Fare,{' '}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E40AF] to-[#059669]">
//                   Every Ride
//                 </span>
//               </h1>
              
//               <div className="flex items-center gap-2 text-lg text-[#1E40AF] font-semibold">
//                 <Star className="w-5 h-5 fill-[#D97706] text-[#D97706]" />
//                 TRANSPARENT PRICING • NO SURGE CHARGES • GOVERNMENT RATES
//               </div>
//             </motion.div>

//             {/* Subtitle */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               className={`${lato.className} text-xl text-gray-700 leading-relaxed max-w-2xl`}
//             >
//               See exactly what you pay - down to the kilometer. No hidden fees, 
//               no surprise charges, just honest pricing based on government-approved rates.
//             </motion.p>

//             {/* Interactive Value Propositions */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6 }}
//               className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
//             >
//               {/* Tab Headers */}
//               <div className="flex overflow-x-auto scrollbar-hide">
//                 {valueProps.map((prop, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setActiveValueProp(index)}
//                     className={`flex-shrink-0 px-4 py-3 text-sm font-medium transition-all duration-300 border-b-2 ${
//                       activeValueProp === index
//                         ? 'border-[#1E40AF] text-[#1E40AF] bg-[#1E40AF]/5'
//                         : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
//                     }`}
//                   >
//                     <span className="mr-2">{prop.emoji}</span>
//                     {prop.title}
//                   </button>
//                 ))}
//               </div>

//               {/* Active Content */}
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={activeValueProp}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.3 }}
//                   className="p-6"
//                 >
//                   <div className="flex items-start gap-4">
//                     <div className="text-4xl">{valueProps[activeValueProp].emoji}</div>
//                     <div>
//                       <h3 className="text-xl font-bold text-gray-900 mb-2">
//                         {valueProps[activeValueProp].title}
//                       </h3>
//                       <p className="text-gray-600 mb-3 leading-relaxed">
//                         {valueProps[activeValueProp].description}
//                       </p>
//                       <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1E40AF]/10 text-[#1E40AF] rounded-full text-sm font-semibold">
//                         <Zap className="w-4 h-4" />
//                         {valueProps[activeValueProp].highlight}
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//             </motion.div>

//             {/* CTA Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.8 }}
//               className="flex flex-col sm:flex-row gap-4"
//             >
//               <motion.a
//                 href="#savings-calculator"
//                 whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(30, 64, 175, 0.3)" }}
//                 whileTap={{ scale: 0.95 }}
//                 className={`${lato.className} px-8 py-4 bg-gradient-to-r from-[#1E40AF] to-[#1E3A8A] text-white rounded-xl font-semibold text-lg shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group`}
//               >
//                 <Calculator className="w-5 h-5 group-hover:rotate-12 transition-transform" />
//                 Calculate Your Savings
//               </motion.a>
              
//               <div className="flex gap-3">
//                 <a
//                   href={media.OIOT_APPSTORE}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex-1 flex items-center gap-2 bg-black text-white px-4 py-3 rounded-xl hover:bg-gray-800 transition-colors shadow-lg"
//                 >
//                   <FaApple className="text-xl" />
//                   <span className="text-sm font-medium">App Store</span>
//                 </a>
//                 <a
//                   href={media.OIOT_PLAYSTORE}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex-1 flex items-center gap-2 bg-black text-white px-4 py-3 rounded-xl hover:bg-gray-800 transition-colors shadow-lg"
//                 >
//                   <FaGooglePlay className="text-xl" />
//                   <span className="text-sm font-medium">Play Store</span>
//                 </a>
//               </div>
//             </motion.div>
//           </div>

//           {/* Right Content - Price Comparison - 2 columns */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.4 }}
//             className="xl:col-span-2"
//           >
//             <InteractivePriceComparison />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }
