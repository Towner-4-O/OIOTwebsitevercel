'use client'

import React, { useEffect, useState } from 'react'
import { FaCar, FaUserFriends, FaRoute, FaBuilding, FaCity, FaMoneyCheck, FaUsers } from 'react-icons/fa'
import { MdLocalTaxi } from 'react-icons/md'
import { BsCheckCircleFill } from 'react-icons/bs'

// Mock data for the chart

interface OpenDataHeroCardsProps {
  data: HeroData;
}

type StatCardProps = {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ElementType;
  live?: boolean;
  trend?: number;
}

interface HeroData {
  totalTrips: string;
  totalUsers: string;
  activeDrivers: string;
  ongoingTrips: string;
  totalDrivers: string;
  completedTrips: string;
  citiesCovered: string;
  partnerCompanies: string;
}



const StatCard = ({ title, value, subtitle, icon: Icon, live = false, trend }: StatCardProps) => {
 
  const actualValue = parseInt(value.replace(/,/g, ""));
  const [displayValue, setDisplayValue] = useState(
    title === "Cities Covered" || title === "Partner Companies"
      ? actualValue
      : Math.max(0, actualValue - 20)
  );

  useEffect(() => {
    if (title === "Cities Covered" || title === "Partner Companies") {
      return;
    }

    if (displayValue >= actualValue) {
      return;
    }

    const interval = setInterval(() => {
      setDisplayValue((prev) => {
        const newValue = prev + 1;
        if (newValue >= actualValue) {
          clearInterval(interval);
          return actualValue;
        }
        return newValue;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [title, displayValue, actualValue]);

  return (
    <div className="relative overflow-hidden bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-[#5445F9]/20 hover:shadow-lg transition-all duration-300">
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-[#5445F9]/5 rounded-lg">
              <Icon className="w-6 h-6 text-[#5445F9]" />
            </div>
            <h3 className="text-gray-900 font-medium">{title}</h3>
          </div>
          {live && (
            <span className="flex items-center px-3 py-1.5 bg-[#5445F9]/5 rounded-full border border-[#5445F9]/20">
              <span className="animate-pulse w-2 h-2 bg-[#5445F9] rounded-full mr-2"></span>
              <span className="text-[#5445F9] text-xs font-semibold">Live</span>
            </span>
          )}
        </div>

        <div className="mt-4 flex items-end justify-between">
          <div>
            <div className="text-3xl font-bold text-gray-900">{displayValue.toLocaleString()}</div>
            <p className="text-sm text-[#5445F9] mt-1">{subtitle}</p>
          </div>
          {trend !== undefined && (
            <div className={`flex items-center ${trend >= 0 ? "text-green-600" : "text-red-500"}`}>
              <span className="text-sm font-medium">
                {trend >= 0 ? "+" : ""}
                {trend}%
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="absolute right-0 top-0 -mt-4 -mr-4 opacity-5">
        <Icon className="w-24 h-24" />
      </div>
    </div>
)
};


const OpenDataHeroCards: React.FC<OpenDataHeroCardsProps> = ({ data }) => {
  const [currentTime, setCurrentTime] = useState('--:--:--')


  const statsData = [
    {
      title: "Total Trips",
      value: data.totalTrips,
      subtitle: "All time completed rides",
      icon: FaRoute,
      trend: 12
    },
    {
      title: "Total Users",
      value: data.totalUsers,
      subtitle: "Registered users",
      icon: FaUsers,
      trend: 0
    },
    {
      title: "Active Drivers",
      value: data.activeDrivers,
      subtitle: "Currently on duty",
      icon: FaCar,
      live: true,
      trend: 5
    },
    {
      title: "Ongoing Trips",
      value: data.ongoingTrips,
      subtitle: "Rides in progress",
      icon: MdLocalTaxi,
      live: true
    },
    {
      title: "Total Drivers",
      value: data.totalDrivers,
      subtitle: "Registered drivers",
      icon: FaUserFriends,
      trend: 8
    },
    {
      title: "Partner Companies",
      value: data.partnerCompanies,
      subtitle: "Active partnerships",
      icon: FaBuilding
    },
    {
      title: "Completed Trips",
      value: data.completedTrips,
      subtitle: "This month",
      icon: BsCheckCircleFill,
      trend: 15
    },
    {
      title: "Cities Covered",
      value: data.citiesCovered,
      subtitle: "Active locations",
      icon: FaCity,
      trend: 0
    }
  ]

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const time = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
      setCurrentTime(time)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])


  return (
    <div className="relative space-y-8 py-10">
      <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-[#5445F9]/20">
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <span className="px-3 py-1 text-xs font-semibold bg-[#5445F9]/5 text-[#5445F9] rounded-full">
              Dashboard
            </span>
            <span className="px-3 py-1.5 text-xs font-semibold bg-[#5445F9]/5 rounded-full border border-[#5445F9]/20 flex items-center">
              <span className="w-2 h-2 bg-[#5445F9] rounded-full mr-2 animate-pulse"></span>
              <span className="text-[#5445F9]">Live Data</span>
            </span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">
            Platform Statistics
          </h1>
          <p className="text-[#5445F9]">Real-time overview of our platform metrics</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="px-4 py-2 bg-white/80 rounded-lg shadow-sm border border-[#5445F9]/20">
            <div className="text-xs text-[#5445F9]">Last updated</div>
            <div className="text-sm font-medium text-[#5445F9]">
              {currentTime}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <StatCard 
            key={index}
            {...stat}
          />
        ))}
      </div>

    
    </div>
  )
}

export default OpenDataHeroCards