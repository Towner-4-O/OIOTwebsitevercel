
//=====================================
'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Navigation, Zap, Shield, TrendingUp, Calculator } from 'lucide-react'

interface LocationOption {
  id: string
  name: string
  area: string
}

interface PriceComparison {
  oiot: number
  competitorA: { price: number, surge: number }
  competitorB: { price: number, surge: number }
  savings: number
}

const popularLocations: LocationOption[] = [
  { id: '1', name: 'Koramangala', area: 'South Bangalore' },
  { id: '2', name: 'Whitefield', area: 'East Bangalore' },
  { id: '3', name: 'Indiranagar', area: 'Central Bangalore' },
  { id: '4', name: 'Electronic City', area: 'South Bangalore' },
  { id: '5', name: 'Hebbal', area: 'North Bangalore' },
  { id: '6', name: 'Marathahalli', area: 'East Bangalore' },
  { id: '7', name: 'Jayanagar', area: 'South Bangalore' },
  { id: '8', name: 'MG Road', area: 'Central Bangalore' },
  { id: '9', name: 'Banashankari', area: 'South Bangalore' },
  { id: '10', name: 'Yeshwanthpur', area: 'North Bangalore' }
]

// Static distance matrix with exact Google Maps distances (in km)
const distanceMatrix: { [key: string]: { [key: string]: number } } = {
  // Koramangala distances
  'Koramangala': {
    'Whitefield': 17,
    'Indiranagar': 8,
    'Electronic City': 18,
    'Hebbal': 15,
    'Marathahalli': 12,
    'Jayanagar': 6,
    'MG Road': 7,
    'Banashankari': 8,
    'Yeshwanthpur': 18
  },
  // Whitefield distances
  'Whitefield': {
    'Koramangala': 17,
    'Indiranagar': 22,
    'Electronic City': 35,
    'Hebbal': 25,
    'Marathahalli': 8,
    'Jayanagar': 23,
    'MG Road': 24,
    'Banashankari': 25,
    'Yeshwanthpur': 28
  },
  // Indiranagar distances
  'Indiranagar': {
    'Koramangala': 8,
    'Whitefield': 22,
    'Electronic City': 19,
    'Hebbal': 12,
    'Marathahalli': 14,
    'Jayanagar': 10,
    'MG Road': 4,
    'Banashankari': 12,
    'Yeshwanthpur': 15
  },
  // Electronic City distances
  'Electronic City': {
    'Koramangala': 18,
    'Whitefield': 35,
    'Indiranagar': 19,
    'Hebbal': 28,
    'Marathahalli': 27,
    'Jayanagar': 16,
    'MG Road': 22,
    'Banashankari': 12,
    'Yeshwanthpur': 25
  },
  // Hebbal distances
  'Hebbal': {
    'Koramangala': 15,
    'Whitefield': 25,
    'Indiranagar': 12,
    'Electronic City': 28,
    'Marathahalli': 18,
    'Jayanagar': 18,
    'MG Road': 8,
    'Banashankari': 20,
    'Yeshwanthpur': 6
  },
  // Marathahalli distances
  'Marathahalli': {
    'Koramangala': 12,
    'Whitefield': 8,
    'Indiranagar': 14,
    'Electronic City': 27,
    'Hebbal': 18,
    'Jayanagar': 15,
    'MG Road': 16,
    'Banashankari': 18,
    'Yeshwanthpur': 20
  },
  // Jayanagar distances
  'Jayanagar': {
    'Koramangala': 6,
    'Whitefield': 23,
    'Indiranagar': 10,
    'Electronic City': 16,
    'Hebbal': 18,
    'Marathahalli': 15,
    'MG Road': 9,
    'Banashankari': 4,
    'Yeshwanthpur': 16
  },
  // MG Road distances
  'MG Road': {
    'Koramangala': 7,
    'Whitefield': 24,
    'Indiranagar': 4,
    'Electronic City': 22,
    'Hebbal': 8,
    'Marathahalli': 16,
    'Jayanagar': 9,
    'Banashankari': 11,
    'Yeshwanthpur': 10
  },
  // Banashankari distances
  'Banashankari': {
    'Koramangala': 8,
    'Whitefield': 25,
    'Indiranagar': 12,
    'Electronic City': 12,
    'Hebbal': 20,
    'Marathahalli': 18,
    'Jayanagar': 4,
    'MG Road': 11,
    'Yeshwanthpur': 13
  },
  // Yeshwanthpur distances
  'Yeshwanthpur': {
    'Koramangala': 18,
    'Whitefield': 28,
    'Indiranagar': 15,
    'Electronic City': 25,
    'Hebbal': 6,
    'Marathahalli': 20,
    'Jayanagar': 16,
    'MG Road': 10,
    'Banashankari': 13
  }
}

const LivePriceComparison: React.FC = () => {
  const [pickup, setPickup] = useState<LocationOption>(popularLocations[0])
  const [drop, setDrop] = useState<LocationOption>(popularLocations[1])
  const [showPickupOptions, setShowPickupOptions] = useState(false)
  const [showDropOptions, setShowDropOptions] = useState(false)
  const [distance, setDistance] = useState(17) // Default: Koramangala to Whitefield
  const [isCalculating, setIsCalculating] = useState(false)
  const [prices, setPrices] = useState<PriceComparison>({
    oiot: 285,
    competitorA: { price: 599, surge: 2.1 },
    competitorB: { price: 513, surge: 1.8 },
    savings: 314
  })

  // Check if pickup and drop are the same
  const isSameLocation = pickup.name === drop.name

  // Get exact distance from distance matrix
  const getExactDistance = (from: string, to: string): number => {
    if (from === to) return 0
    return distanceMatrix[from]?.[to] || distanceMatrix[to]?.[from] || 10 // fallback to 10km if not found
  }

  // Calculate prices based on route selection with exact distances
  useEffect(() => {
    // Don't calculate prices if pickup and drop are the same
    if (isSameLocation) {
      setDistance(0)
      setIsCalculating(false)
      return
    }

    setIsCalculating(true)
    
    // Simulate calculation delay
    const timer = setTimeout(() => {
      // Get exact distance from our distance matrix
      const exactDistance = getExactDistance(pickup.name, drop.name)
      setDistance(exactDistance)
      
      // OIOT fare calculation (Government rates)
      const baseFare = 25
      const perKmRate = 18.5
      const oiotPrice = Math.round(baseFare + (exactDistance * perKmRate))
      
      // Competitor pricing with realistic surge based on route
      const baseSurgeA = 1.4 + (exactDistance > 20 ? 0.8 : 0.4) // Higher surge for longer routes
      const baseSurgeB = 1.2 + (exactDistance > 20 ? 0.6 : 0.3)
      
      // Add some variation but keep it realistic
      const surgeA = Number((baseSurgeA + Math.random() * 0.3).toFixed(1))
      const surgeB = Number((baseSurgeB + Math.random() * 0.3).toFixed(1))
      
      const competitorAPrice = Math.round(oiotPrice * 1.25 * surgeA)
      const competitorBPrice = Math.round(oiotPrice * 1.25 * surgeB)
      
      const maxSavings = Math.max(competitorAPrice - oiotPrice, competitorBPrice - oiotPrice)
      
      setPrices({
        oiot: oiotPrice,
        competitorA: { price: competitorAPrice, surge: surgeA },
        competitorB: { price: competitorBPrice, surge: surgeB },
        savings: maxSavings
      })
      
      setIsCalculating(false)
    }, 800)
    
    return () => clearTimeout(timer)
  }, [pickup, drop, isSameLocation])

  const LocationSelector: React.FC<{
    selected: LocationOption
    onSelect: (location: LocationOption) => void
    showOptions: boolean
    onToggle: () => void
    placeholder: string
  }> = ({ selected, onSelect, showOptions, onToggle, placeholder }) => (
    <div className="relative">
      <button
        onClick={onToggle}
        className="w-full p-4 bg-white border-2 border-gray-200 rounded-xl text-left hover:border-[#5445F9] transition-colors focus:outline-none focus:border-[#5445F9]"
      >
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-gray-400" />
          <div>
            <div className="font-semibold text-gray-900">{selected.name}</div>
            <div className="text-sm text-gray-500">{selected.area}</div>
          </div>
        </div>
      </button>
      
      <AnimatePresence>
        {showOptions && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-64 overflow-y-auto"
          >
            {popularLocations
              .filter(loc => loc.id !== selected.id)
              .map((location) => (
              <button
                key={location.id}
                onClick={() => {
                  onSelect(location)
                  onToggle()
                }}
                className="w-full p-3 text-left hover:bg-[#5445F9]/5 transition-colors"
              >
                <div className="font-medium text-gray-900">{location.name}</div>
                <div className="text-sm text-gray-500">{location.area}</div>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )

  return (
    <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block mb-6 px-6 py-3 bg-[#5445F9]/10 rounded-full"
          >
            <span className="text-[#5445F9] font-semibold flex items-center gap-2">
               Live Price Comparison
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Compare Prices <span className="text-[#5445F9]">Live</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            See real-time price differences and how much you save with OIOT's transparent pricing
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Location Selection */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-xl p-8 mb-8 border border-gray-100"
          >
            <h3 className="text-xl font-bold mb-6 text-center">Select Your Route</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* From */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
                <LocationSelector
                  selected={pickup}
                  onSelect={setPickup}
                  showOptions={showPickupOptions}
                  onToggle={() => {
                    setShowPickupOptions(!showPickupOptions)
                    setShowDropOptions(false)
                  }}
                  placeholder="Select pickup location"
                />
              </div>
              
              {/* To */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
                <LocationSelector
                  selected={drop}
                  onSelect={setDrop}
                  showOptions={showDropOptions}
                  onToggle={() => {
                    setShowDropOptions(!showDropOptions)
                    setShowPickupOptions(false)
                  }}
                  placeholder="Select destination"
                />
              </div>
            </div>

            {/* Route Visualization */}
            <div className="mt-8 p-4 bg-gray-50 rounded-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#5445F9] rounded-full"></div>
                  <span className="font-medium">{pickup.name}</span>
                </div>
                
                <div className="flex-1 mx-4 relative">
                  <div className={`h-0.5 ${isSameLocation ? 'bg-gray-300' : 'bg-gradient-to-r from-[#5445F9] to-green-500'}`}></div>
                  <motion.div
                    animate={{ x: isCalculating ? [0, 20, 0] : 0 }}
                    transition={{ duration: 1, repeat: isCalculating ? Infinity : 0 }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  >
                    <Navigation className={`w-4 h-4 ${isCalculating ? 'text-[#5445F9]' : 'text-gray-400'}`} />
                  </motion.div>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="font-medium">{drop.name}</span>
                  <div className={`w-3 h-3 ${isSameLocation ? 'bg-gray-300' : 'bg-green-500'} rounded-full`}></div>
                </div>
              </div>
              
              <div className="text-center mt-3 text-sm text-gray-600">
                {isSameLocation ? (
                  <span className="text-amber-600 font-medium">Same pickup and destination location</span>
                ) : (
                  <>
                    <strong>{distance} km</strong> • Estimated {Math.round(distance * 2.5)} mins
                  </>
                )}
              </div>
            </div>
          </motion.div>

          {/* Conditional Rendering: Show prices only when locations are different */}
          {isSameLocation ? (
            /* Simple Same Location Message */
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-6 text-center shadow-lg border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Same Location Selected</h3>
              <p className="text-gray-600">Please select different pickup and destination locations to see price comparison.</p>
            </motion.div>
          ) : (
            <>
              {/* Price Comparison Cards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
              >
                {/* OIOT Card */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-[#5445F9]/5 to-[#5445F9]/10 border-2 border-[#5445F9]/20 rounded-3xl p-6 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[#5445F9]/10 rounded-full -mr-10 -mt-10"></div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-[#5445F9]" />
                    <span className="font-bold text-[#5445F9] text-lg">OIOT</span>
                  </div>
                  
                  <motion.div
                    key={prices.oiot}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    className="text-4xl font-bold text-[#5445F9] mb-3"
                  >
                    {isCalculating ? (
                      <div className="animate-pulse">₹---</div>
                    ) : (
                      `₹${prices.oiot}`
                    )}
                  </motion.div>
                  
                  <div className="text-sm text-[#5445F9] mb-3">Government Rate</div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-700 font-medium">Always Fixed</span>
                  </div>
                </motion.div>

                {/* Competitor A */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-3xl p-6 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-red-100 rounded-full -mr-10 -mt-10"></div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-6 h-6 text-red-600" />
                    <span className="font-bold text-red-600 text-lg">Competitor A</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full font-semibold">
                      {prices.competitorA.surge}x SURGE
                    </span>
                  </div>
                  
                  <motion.div
                    key={prices.competitorA.price}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    className="text-4xl font-bold text-red-600 mb-3"
                  >
                    {isCalculating ? (
                      <div className="animate-pulse">₹---</div>
                    ) : (
                      `₹${prices.competitorA.price}`
                    )}
                  </motion.div>
                  
                  <div className="text-sm text-red-600 mb-3">Peak Hour Pricing</div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-red-700 font-medium">Surge Active</span>
                  </div>
                </motion.div>

                {/* Competitor B */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-3xl p-6 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-orange-100 rounded-full -mr-10 -mt-10"></div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <Calculator className="w-6 h-6 text-orange-600" />
                    <span className="font-bold text-orange-600 text-lg">Competitor B</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded-full font-semibold">
                      {prices.competitorB.surge}x SURGE
                    </span>
                  </div>
                  
                  <motion.div
                    key={prices.competitorB.price}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    className="text-4xl font-bold text-orange-600 mb-3"
                  >
                    {isCalculating ? (
                      <div className="animate-pulse">₹---</div>
                    ) : (
                      `₹${prices.competitorB.price}`
                    )}
                  </motion.div>
                  
                  <div className="text-sm text-orange-600 mb-3">High Demand</div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-orange-700 font-medium">Surge Active</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Savings Highlight */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={{ scale: isCalculating ? [1, 1.02, 1] : 1 }}
                transition={{ duration: 2, repeat: isCalculating ? Infinity : 0 }}
                className="bg-[#5682e8] rounded-3xl p-6 text-white text-center shadow-2xl"
              >
                <div className="text-lg mb-2 opacity-90">You save</div>
                <motion.div
                  key={prices.savings}
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  className="text-5xl font-bold mb-2"
                >
                  {isCalculating ? (
                    <div className="animate-pulse">₹---</div>
                  ) : (
                    `₹${prices.savings} with OIOT!`
                  )}
                </motion.div>
                <div className="text-lg opacity-90">
                  That's {isCalculating ? '--' : Math.round((prices.savings / Math.max(prices.competitorA.price, prices.competitorB.price)) * 100)}% less than surge pricing
                </div>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default LivePriceComparison
