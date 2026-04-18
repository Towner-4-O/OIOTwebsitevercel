// 'use client'

// import React, { useState } from 'react'
// import { motion } from 'framer-motion'
// import { Shield, Users, Calculator, Headphones, MessageSquare, Phone, BookOpen, Award, Scale, Network } from 'lucide-react'

// const offeringsData = {
//   commuters: [
//     {
//       icon: Users,
//       title: "Instant Access to Local Drivers",
//       description: "Easily book a taxi or auto and find drivers near you, even in busy periods or remote areas.",
//       color: "bg-[#5445F9]/10"
//     },
//     {
//       icon: Calculator,
//       title: "Transparent, Government-Regulated Fares",
//       description: "All rides are priced according to government-approved rates. No surge pricing or hidden charges.",
//       color: "bg-[#5445F9]/10"
//     },
//     {
//       icon: Shield,
//       title: "Safety at Every Step",
//       description: "Travel with peace of mind, thanks to features like real-time trip tracking, SOS alerts, and police department collaboration.",
//       color: "bg-[#5445F9]/10"
//     },
//     {
//       icon: Award,
//       title: "Consistency in Service Quality",
//       description: "OIOT partners with professional, reliable drivers who are part of the Towner ecosystem, ensuring that you always receive a high-quality experience.",
//       color: "bg-[#5445F9]/10"
//     },
//     {
//       icon: MessageSquare,
//       title: "Clear and Simple Communication",
//       description: "With easy-to-use features and multilingual support, OIOT eliminates language barriers and ensures smooth communication between drivers and riders.",
//       color: "bg-[#5445F9]/10"
//     },
//     {
//       icon: Headphones,
//       title: "Emergency Support & Customer Care",
//       description: "Access instant support in case of issues, complaints, or emergencies. OIOT's customer support team is ready to assist whenever you need it.",
//       color: "bg-[#5445F9]/10"
//     }
//   ],
//   drivers: [
//     {
//       icon: BookOpen,
//       title: "Streamlined Business Management",
//       description: "Manage your taxi or auto business with ease through the Towner platform, which offers tools to help you operate efficiently and remain compliant with all local regulations.",
//       color: "bg-[#5445F9]/10"
//     },
//     {
//       icon: Phone,
//       title: "Ongoing Training and Support",
//       description: "Receive training, resources, and 24/7 support from OIOT to improve your service quality and grow your business.",
//       color: "bg-[#5445F9]/10"
//     },
//     {
//       icon: Scale,
//       title: "Compliant with Government Regulations",
//       description: "All OIOT drivers follow local government fare guidelines and digital meter mandates, ensuring standardized pricing and regulatory compliance.",
//       color: "bg-[#5445F9]/10"
//     },
//     {
//       icon: Network,
//       title: "Access to a Professional Network",
//       description: "Be part of the Towner ecosystem, where professionalism and quality are at the core of every ride.",
//       color: "bg-[#5445F9]/10"
//     }
//   ]
// }

// const Offerings = () => {
//   const [activeTab, setActiveTab] = useState<'commuters' | 'drivers'>('commuters')

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
//             <span className="text-[#5445F9] font-semibold">Key Features</span>
//           </motion.div>
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-4xl md:text-5xl font-bold mb-6"
//           >
//             Empowering Your <span className="text-[#5445F9]">Journey</span>
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="text-gray-600 max-w-2xl mx-auto mb-12"
//           >
//             Discover the comprehensive features that make OIOT the perfect choice for both commuters and drivers.
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

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {offeringsData[activeTab].map((feature, index) => (
//             <motion.div
//               key={feature.title}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="group relative h-[200px]"
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-[#5445F9]/5 to-transparent rounded-2xl transform rotate-1 transition-transform group-hover:rotate-2" />
//               <div className="relative h-full bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
//                 <div className="flex items-start gap-6 h-full">
//                   <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
//                     <feature.icon className="h-6 w-6 text-[#5445F9]" />
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-xl font-semibold mb-2 group-hover:text-[#5445F9] transition-colors">
//                       {feature.title}
//                     </h3>
//                     <p className="text-gray-600 line-clamp-3">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Offerings
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Phone, Scale, Network } from 'lucide-react'

const driverFeatures = [
  {
    icon: BookOpen,
    title: 'Streamlined Business Management',
    description:
      'Manage your taxi or auto business with ease through the Towner platform, which offers tools to help you operate efficiently and remain compliant with all local regulations.',
    color: 'bg-[#5445F9]/10',
  },
  {
    icon: Phone,
    title: 'Ongoing Training and Support',
    description:
      'Receive training, resources, and 24/7 support from OIOT to improve your service quality and grow your business.',
    color: 'bg-[#5445F9]/10',
  },
  {
    icon: Scale,
    title: 'Compliant with Government Regulations',
    description:
      'All OIOT drivers follow local government fare guidelines and digital meter mandates, ensuring standardized pricing and regulatory compliance.',
    color: 'bg-[#5445F9]/10',
  },
  {
    icon: Network,
    title: 'Access to a Professional Network',
    description:
      'Be part of the Towner ecosystem, where professionalism and quality are at the core of every ride.',
    color: 'bg-[#5445F9]/10',
  },
]

const Offerings = () => {
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
            <span className="text-[#5445F9] font-semibold">Key Features</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Empowering Your <span className="text-[#5445F9]">Journey</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 max-w-2xl mx-auto mb-12"
          >
            Discover the comprehensive features that make OIOT the perfect choice
            for drivers.
          </motion.p>
        </div>

        {/* Driver cards only */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {driverFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-[200px]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#5445F9]/5 to-transparent rounded-2xl transform rotate-1 transition-transform group-hover:rotate-2" />
              <div className="relative h-full bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start gap-6 h-full">
                  <div
                    className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className="h-6 w-6 text-[#5445F9]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-[#5445F9] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-3">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Offerings
