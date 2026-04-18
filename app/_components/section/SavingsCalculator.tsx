
'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calculator, Users, MapPin, Clock, TrendingUp, Shield, Info, CheckCircle, Zap, ArrowRight, Sparkles } from 'lucide-react'
import { Lato } from "next/font/google"

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
})

interface CalculatorInputs {
  tripsPerWeek: number
  averageDistance: number
  peakHoursPercentage: number
}

interface CalculatorResults {
  oiotFare: number
  competitorNormalFare: number
  competitorPeakFare: number
  weeklySavings: number
  monthlySavings: number
  annualSavings: number
  totalTrips: number
}

export const SavingsCalculator: React.FC = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    tripsPerWeek: 10,
    averageDistance: 8,
    peakHoursPercentage: 60
  })

  const [results, setResults] = useState<CalculatorResults>({
    oiotFare: 0,
    competitorNormalFare: 0,
    competitorPeakFare: 0,
    weeklySavings: 0,
    monthlySavings: 0,
    annualSavings: 0,
    totalTrips: 0
  })

  const [isCalculating, setIsCalculating] = useState(false)

  // Calculate savings based on inputs
  useEffect(() => {
    setIsCalculating(true)
    const timer = setTimeout(() => {
      // OIOT Fare Calculation (Government Rates)
      const baseFare = 25
      const distanceRate = 14
      const timeRate = 1.5
      const avgSpeed = 20 // km/hr
      const travelTime = (inputs.averageDistance / avgSpeed) * 60 // minutes
      
      const oiotFare = baseFare + (inputs.averageDistance * distanceRate) + (travelTime * timeRate)
      
      // Competitor Pricing
      const competitorNormalFare = oiotFare * 1.25 // 25% higher base
      const competitorPeakFare = competitorNormalFare * 1.8 // 1.8x surge
      
      // Trip distribution
      const peakTrips = (inputs.tripsPerWeek * inputs.peakHoursPercentage) / 100
      const nonPeakTrips = inputs.tripsPerWeek - peakTrips
      
      // Weekly costs
      const oiotWeeklyCost = inputs.tripsPerWeek * oiotFare
      const competitorWeeklyCost = (peakTrips * competitorPeakFare) + (nonPeakTrips * competitorNormalFare)
      
      // Savings
      const weeklySavings = competitorWeeklyCost - oiotWeeklyCost
      const monthlySavings = weeklySavings * 4.33
      const annualSavings = weeklySavings * 52
      const totalTrips = inputs.tripsPerWeek * 52

      setResults({
        oiotFare: Math.round(oiotFare),
        competitorNormalFare: Math.round(competitorNormalFare),
        competitorPeakFare: Math.round(competitorPeakFare),
        weeklySavings: Math.round(weeklySavings),
        monthlySavings: Math.round(monthlySavings),
        annualSavings: Math.round(annualSavings),
        totalTrips
      })
      setIsCalculating(false)
    }, 300)
    
    return () => clearTimeout(timer)
  }, [inputs])

  const updateInput = (key: keyof CalculatorInputs, value: number) => {
    setInputs(prev => ({ ...prev, [key]: value }))
  }

  const SliderInput: React.FC<{
    label: string
    value: number
    onChange: (value: number) => void
    min: number
    max: number
    unit?: string
    icon: React.ComponentType<{ className?: string }>
  }> = ({ label, value, onChange, min, max, unit = '', icon: Icon }) => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-[#5682e8]/10 backdrop-blur-sm">
            <Icon className="w-5 h-5 text-[#5682e8]" />
          </div>
          <span className="text-gray-700 font-medium">{label}</span>
        </div>
        <div className="flex items-center gap-2 bg-[#5682e8]/5 px-3 py-1.5 rounded-full">
          <span className="text-2xl font-bold text-[#5682e8]">{value}</span>
          <span className="text-sm text-[#5682e8]/70 font-medium">{unit}</span>
        </div>
      </div>
      
      <div className="relative">
        <div className="h-3 bg-gray-100 rounded-full overflow-hidden shadow-inner">
          <div 
            className="h-full bg-gradient-to-r from-[#5682e8] via-[#6366f1] to-[#8b5cf6] transition-all duration-500 rounded-full relative"
            style={{ width: `${((value - min) / (max - min)) * 100}%` }}
          >
            <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
          </div>
        </div>
        
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>
      
      <div className="flex justify-between text-xs text-gray-400">
        <span>{min}{unit}</span>
        <span>{max}{unit}</span>
      </div>
    </div>
  )

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden" id="savings-calculator">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235682e8' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               backgroundSize: '60px 60px'
             }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-5"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${10 + (i % 3) * 25}%`,
              width: `${30 + i * 5}px`,
              height: `${30 + i * 5}px`
            }}
          >
            <div className={`w-full h-full bg-gradient-to-br from-[#5682e8] to-purple-500 ${
              i % 3 === 0 ? 'rounded-full' : i % 3 === 1 ? 'rounded-lg rotate-45' : 'rounded-none'
            }`}></div>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
       
          
          <h2 className={`${lato.className} text-2xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight`}>
            Calculate Your{' '}
            <span className="text-[#5546fa]">
              Annual Savings
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how much you can save by avoiding surge pricing and hidden fees with OIOT's transparent government-approved rates
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
            
            {/* Calculator Inputs - 2 columns */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="xl:col-span-2 space-y-8"
            >
              {/* Input Card */}
              <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/20">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 rounded-2xl bg-[#5682e8]/10">
                    <Users className="w-6 h-6 text-[#5682e8]" />
                  </div>
                  <h3 className={`${lato.className} text-2xl font-bold text-gray-900`}>
                    Your Travel Pattern
                  </h3>
                </div>

                <div className="space-y-8">
                  <SliderInput
                    label="Weekly Trips"
                    value={inputs.tripsPerWeek}
                    onChange={(value) => updateInput('tripsPerWeek', value)}
                    min={1}
                    max={30}
                    unit=" trips"
                    icon={Users}
                  />

                  <SliderInput
                    label="Average Distance"
                    value={inputs.averageDistance}
                    onChange={(value) => updateInput('averageDistance', value)}
                    min={1}
                    max={25}
                    unit=" km"
                    icon={MapPin}
                  />

                  <SliderInput
                    label="Peak Hour Percentage"
                    value={inputs.peakHoursPercentage}
                    onChange={(value) => updateInput('peakHoursPercentage', value)}
                    min={0}
                    max={100}
                    unit="%"
                    icon={Clock}
                  />
                </div>

                {/* Auto Calculate Notice */}
                <div className="mt-8 p-4 bg-[#5682e8]/5 rounded-2xl border border-[#5682e8]/10">
                  <div className="flex items-center gap-2 text-[#5682e8]">
                    {/* <Zap className="w-4 h-4" /> */}
                    <span className="text-sm font-medium">
                      Calculations update automatically
                    </span>
                  </div>
                </div>
              </div>

              {/* Fare Breakdown */}
              {/* <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-[#5682e8]/10">
                    <Info className="w-6 h-6 text-[#5682e8]" />
                  </div>
                  <h4 className="font-bold text-gray-900">
                    Per Trip Fare ({inputs.averageDistance}km)
                  </h4>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-[#5682e8]/10 to-[#5682e8]/5 rounded-2xl border border-[#5682e8]/20">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-[#5682e8] rounded-full shadow-lg"></div>
                      <span className="font-semibold text-gray-800">OIOT</span>
                      <span className="text-xs bg-[#5682e8]/20 text-[#5682e8] px-2 py-1 rounded-full font-medium">
                        Government Rate
                      </span>
                    </div>
                    <span className="font-bold text-[#5682e8] text-lg">₹{results.oiotFare}</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-amber-500 rounded-full shadow-lg"></div>
                      <span className="font-semibold text-gray-800">Others</span>
                      <span className="text-xs bg-amber-200 text-amber-700 px-2 py-1 rounded-full font-medium">
                        Normal
                      </span>
                    </div>
                    <span className="font-bold text-amber-600 text-lg">₹{results.competitorNormalFare}</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-red-50 to-rose-50 rounded-2xl border border-red-200">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-red-500 rounded-full shadow-lg animate-pulse"></div>
                      <span className="font-semibold text-gray-800">Others</span>
                      <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full font-medium">
                        Peak/Surge
                      </span>
                    </div>
                    <span className="font-bold text-red-600 text-lg">₹{results.competitorPeakFare}</span>
                  </div>
                </div>
              </div> */}
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-gray-100">
  <div className="flex items-center gap-3 mb-6">
    <div className="p-3 rounded-2xl bg-[#5682e8]/10">
      <Info className="w-6 h-6 text-[#5682e8]" />
    </div>
    <h4 className="font-bold text-gray-900">
      Per Trip Fare ({inputs.averageDistance}km)
    </h4>
  </div>
  
  <div className="space-y-4">
    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-[#5682e8]/5 to-[#5682e8]/10 rounded-2xl border border-[#5682e8]/20">
      <div className="flex items-center gap-3">
        <div className="w-4 h-4 bg-[#5682e8] rounded-full shadow-sm"></div>
        <span className="font-semibold text-gray-800">OIOT</span>
        <span className="text-xs bg-[#5682e8]/20 text-[#5682e8] px-2 py-1 rounded-full font-medium">
          Government Rate
        </span>
      </div>
      <span className="font-bold text-[#5682e8] text-lg">₹{results.oiotFare}</span>
    </div>
    
    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl border border-gray-200">
      <div className="flex items-center gap-3">
        <div className="w-4 h-4 bg-gray-500 rounded-full shadow-sm"></div>
        <span className="font-semibold text-gray-800">Others</span>
        <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full font-medium">
          Normal
        </span>
      </div>
      <span className="font-bold text-gray-700 text-lg">₹{results.competitorNormalFare}</span>
    </div>
    
    <div className="flex justify-between items-center p-4 bg-gray-100 rounded-2xl border border-gray-300">
      <div className="flex items-center gap-3">
        <div className="w-4 h-4 bg-gray-700 rounded-full shadow-sm"></div>
        <span className="font-semibold text-gray-800">Others</span>
        <span className="text-xs bg-gray-700 text-white px-2 py-1 rounded-full font-medium">
          Peak/Surge
        </span>
      </div>
      <span className="font-bold text-gray-800 text-lg">₹{results.competitorPeakFare}</span>
    </div>
  </div>
</div>

            </motion.div>

            {/* Results Display - 3 columns */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="xl:col-span-3"
            >
              {/* Main Results Card */}
              <div className="bg-gradient-to-br from-[#5682e8] via-[#6366f1] to-[#8b5cf6] rounded-3xl shadow-2xl p-8 text-white mb-8 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" 
                       style={{
                         backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.4'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
                         backgroundSize: '40px 40px'
                       }} />
                </div>

                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                      {/* <Sparkles className="w-4 h-4" /> */}
                      <span className="text-sm font-semibold">Your Annual Savings</span>
                    </div>
                    
                    <motion.div
                      key={results.annualSavings}
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", duration: 0.6 }}
                      className="text-2xl md:text-7xl font-bold mb-2"
                    >
                      ₹{results.annualSavings.toLocaleString()}
                    </motion.div>
                    
                    <p className="text-lg opacity-90 mb-8">
                      with transparent government rates
                    </p>

                    {/* Breakdown Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                        <div className="text-2xl font-bold">₹{Math.round(results.monthlySavings).toLocaleString()}</div>
                        <div className="text-sm opacity-80">Monthly</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                        <div className="text-2xl font-bold">₹{Math.round(results.weeklySavings).toLocaleString()}</div>
                        <div className="text-sm opacity-80">Weekly</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                        <div className="text-2xl font-bold">{results.totalTrips}</div>
                        <div className="text-sm opacity-80">Trips/Year</div>
                      </div>
                    </div>

                    {/* Achievement Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-semibold shadow-lg">
                      <CheckCircle className="w-4 h-4" />
                      {results.annualSavings > 50000 ? 'Super Saver Champion!' : 'Smart Money Saver!'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Comparison Chart */}
              <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/20 mb-8">
                <h4 className="text-2xl font-bold mb-8 text-center text-gray-900">
                  Weekly Cost Comparison
                </h4>
                
                <div className="space-y-6">
                  {/* OIOT Bar */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-[#5682e8] rounded-full shadow-lg"></div>
                        <span className="font-semibold text-gray-800">OIOT</span>
                      </div>
                      <span className="font-bold text-[#5682e8] text-xl">
                        ₹{(results.oiotFare * inputs.tripsPerWeek).toLocaleString()}
                      </span>
                    </div>
                    <div className="h-4 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-[#5682e8] to-[#6366f1] rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '60%' }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>

                  {/* Competitor Bar */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-red-500 rounded-full shadow-lg"></div>
                        <span className="font-semibold text-gray-800">Others (with surge)</span>
                      </div>
                      <span className="font-bold text-red-600 text-xl">
                        ₹{((results.competitorPeakFare * inputs.tripsPerWeek * inputs.peakHoursPercentage / 100) + 
                           (results.competitorNormalFare * inputs.tripsPerWeek * (100 - inputs.peakHoursPercentage) / 100)).toLocaleString()}
                      </span>
                    </div>
                    <div className="h-4 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-red-500 to-rose-600 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1, delay: 0.7 }}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                  <div className="flex items-center justify-center gap-3 text-green-700">
                    <TrendingUp className="w-6 h-6" />
                    <span className="font-bold text-lg">
                      Weekly Savings: ₹{results.weeklySavings.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 25px 50px rgba(86, 130, 232, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className={`${lato.className} w-full p-6 bg-gradient-to-r from-[#5682e8] via-[#6366f1] to-[#8b5cf6] text-white rounded-2xl font-semibold text-xl shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 group relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-white/10 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                {/* <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform relative z-10" /> */}
                <span className="relative z-10">Start Saving with OIOT Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
