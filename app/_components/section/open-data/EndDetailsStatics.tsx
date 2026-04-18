'use client'

import React from 'react'
import { FaGithub, FaDatabase, FaChartLine, FaUsers, FaDownload, FaShieldAlt } from 'react-icons/fa'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface AchievementData {
  tripsCompleted: string;
  achievementTotalRiders: string;
  platformUptime: string;
}

interface EndDetailsStaticsProps {
  data: AchievementData;
}

const AchievementCard = ({ title, subtitle, description, icon: Icon }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-[#5445F9]/20 hover:shadow-lg transition-all duration-300"
  >
    <div className="p-2 bg-[#5445F9]/5 rounded-lg inline-block mb-4">
      <Icon className="w-6 h-6 text-[#5445F9]" />
    </div>
    <h3 className="text-3xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-lg font-semibold text-[#5445F9] mb-2">{subtitle}</p>
    <p className="text-[#5445F9]/80">{description}</p>
  </motion.div>
)

const EndDetailsStatics: React.FC<EndDetailsStaticsProps> = ({ data }) => {
  const achievements = [
    {
      title: `${parseInt(data.tripsCompleted).toLocaleString()}`,
      subtitle: "Trips Completed",
      description: "Successfully completed rides across all cities",
      icon: FaChartLine
    },
    {
      title: `${parseInt(data.achievementTotalRiders).toLocaleString()}`,
      subtitle: "Total Users",
      description: "Monthly active passengers using our platform",
      icon: FaUsers
    },
    {
      title: `${data.platformUptime}%`,
      subtitle: "Platform Uptime",
      description: "Ensuring reliable service round the clock",
      icon: FaDatabase
    }
  ]

  return (
    <div className="space-y-8 py-10">
      <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-[#5445F9]/20">
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <span className="px-3 py-1 text-xs font-semibold bg-[#5445F9]/5 text-[#5445F9] rounded-full">
              Overview
            </span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Platform Achievements</h2>
          <p className="text-[#5445F9]">Key metrics and milestones reached</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((item, index) => (
          <AchievementCard key={index} {...item} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-white/70 backdrop-blur-sm p-8 rounded-xl border border-[#5445F9]/20"
      >
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="p-2 bg-[#5445F9]/5 rounded-lg">
              <FaShieldAlt className="w-6 h-6 text-[#5445F9]" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Committed to Transparency
            </h2>
          </div>
          
          <div className="text-center">
            <p className="text-[#5445F9] mb-8">
              We believe in open data and transparency. These statistics are publicly available 
              to help researchers, developers, and enthusiasts understand urban mobility patterns 
              and contribute to improving transportation systems.
            </p>
            
            <div className="flex flex-col items-center space-y-6">
              <div className="relative w-48 h-48 bg-[#5445F9]/5 p-4 rounded-xl border border-[#5445F9]/20">
                <Image
                  src="/icons/qr-oiot.png"
                  alt="Download App QR Code"
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-[#5445F9]/5 text-[#5445F9] rounded-xl hover:bg-[#5445F9]/10 transition-colors border border-[#5445F9]/20"
                >
                  <FaDownload className="w-5 h-5" />
                  <span>Download App</span>
                </a>
              </div>

              <div className="flex items-center space-x-2 p-3 bg-[#5445F9]/5 rounded-lg">
                <FaDatabase className="w-4 h-4 text-[#5445F9]" />
                <p className="text-sm text-[#5445F9]">
                  Last Updated: {new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default EndDetailsStatics