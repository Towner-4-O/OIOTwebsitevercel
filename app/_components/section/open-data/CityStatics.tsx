'use client'

import React, { useState } from 'react'
import { FaTaxi, FaMapMarkerAlt, FaUsers, FaMoneyBillWave } from 'react-icons/fa'
import { motion } from 'framer-motion'

const cityData = [
  {
    city: "Bangalore",
    trips: 12543,
    activeDrivers: 342,
    growth: "+15%",
    revenue: "₹2.4M",
    color: "from-green-400 to-emerald-600",
    bgPattern: "bg-[url('/patterns/pattern1.svg')]"
  },
  {
    city: "Kochi",
    trips: 8765,
    activeDrivers: 234,
    growth: "+12%",
    revenue: "₹1.8M",
    color: "from-blue-400 to-cyan-600",
    bgPattern: "bg-[url('/patterns/pattern2.svg')]"
  },
  {
    city: "Chennai",
    trips: 10234,
    activeDrivers: 289,
    growth: "+8%",
    revenue: "₹2.1M",
    color: "from-purple-400 to-indigo-600",
    bgPattern: "bg-[url('/patterns/pattern3.svg')]"
  }
]

const StatBox = ({ icon: Icon, label, value, color }:any) => (
  <div className="flex items-center space-x-3 bg-white/50 backdrop-blur-sm p-3 rounded-lg">
    <div className="p-2 bg-[#5445F9]/5 rounded-lg">
      <Icon className="w-4 h-4 text-[#5445F9]" />
    </div>
    <div>
      <p className="text-xs text-gray-600">{label}</p>
      <p className="text-sm font-bold text-gray-900">{value}</p>
    </div>
  </div>
)

const CityCard = ({ city, trips, activeDrivers, growth, revenue, color }:any) => (
  <motion.div
    className="relative p-6 rounded-xl border border-[#5445F9]/20 overflow-hidden cursor-pointer
      bg-white/70 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
  >
    <div className="relative z-10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">{city}</h3>
          <div className="flex items-center space-x-2 mt-1">
            <span className="text-sm font-medium text-gray-600">Growth Rate</span>
            <span className="flex items-center text-[#5445F9] text-sm font-medium">
              {growth}
            </span>
          </div>
        </div>
        <div className="p-2 bg-[#5445F9]/5 rounded-lg">
          <FaMapMarkerAlt className="w-6 h-6 text-[#5445F9]" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <StatBox icon={FaTaxi} label="Total Trips" value={trips.toLocaleString()} />
        <StatBox icon={FaUsers} label="Active Drivers" value={activeDrivers} />
        <StatBox icon={FaMoneyBillWave} label="Revenue" value={revenue} />
        <div className="col-span-2 mt-2 p-3 rounded-lg bg-[#5445F9]/5 border border-[#5445F9]/20">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Overall Performance</span>
            <span className="text-lg font-bold text-[#5445F9]">{growth}</span>
          </div>
        </div>
      </div>
    </div>
    
    <div className="absolute right-0 top-0 -mt-4 -mr-4 opacity-5">
      <FaMapMarkerAlt className="w-24 h-24 text-[#5445F9]" />
    </div>
  </motion.div>
)

const CityStats = () => {
  return (
    <div className="space-y-8 py-10">
      <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-[#5445F9]/20">
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <span className="px-3 py-1 text-xs font-semibold bg-[#5445F9]/5 text-[#5445F9] rounded-full">
              Cities
            </span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">City-wise Statistics</h2>
          <p className="text-gray-600">Performance metrics across major operational cities</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {cityData.map((city) => (
          <motion.div
            key={city.city}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <CityCard {...city} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default CityStats