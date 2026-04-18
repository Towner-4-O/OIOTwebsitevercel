'use client'

import React, { useEffect, useState } from 'react'
import OpenDataHeroCards from '@/app/_components/section/open-data/OpenDataHero'
import TodayTripReport from '@/app/_components/section/open-data/TodayTripReport'
import EndDetailsStatics from '@/app/_components/section/open-data/EndDetailsStatics'
import DailyRiderRegister from '@/app/_components/section/open-data/DailyRegOfRiders'
import BacktoHome from '@/app/_components/layout/BacktoHome'


interface ApiData {
  heroData: {
    totalTrips: string;
    totalUsers: string;
    activeDrivers: string;
    ongoingTrips: string;
    totalDrivers: string;
    completedTrips: string;
    citiesCovered: string;
    partnerCompanies: string;
  } | null;
  registerData: {
    totalToday: string;
    approved: string;
    pending: string;
    inProgress: string;
  } | null;
  tripReportData: {
    finishedTrips: string;
    todayOngoingTrips: string;
    hailTrips: string;
    nonResponseTrips: string;
  } | null;
  achievementData: {
    tripsCompleted: string;
    achievementTotalRiders: string;
    platformUptime: string;
  } | null;
}

const Page = () => {
  const [data, setData] = useState<ApiData>({
    heroData: null,
    registerData: null,
    tripReportData: null,
    achievementData: null
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/admin/viewOiotData')
        const result = await response.json()
        
        if (result.success && result.data) {
          const apiData = result.data

          setData({
            heroData: {
              totalTrips: apiData.totalTrips,
              totalUsers: apiData.totalUsers,
              activeDrivers: apiData.activeDrivers,
              ongoingTrips: apiData.ongoingTrips,
              totalDrivers: apiData.totalDrivers,
              completedTrips: apiData.completedTrips,
              citiesCovered: apiData.citiesCovered,
              partnerCompanies: apiData.partnerCompanies
            },
            registerData: {
              totalToday: apiData.totalToday,
              approved: apiData.approved,
              pending: apiData.pending,
              inProgress: apiData.inProgress
            },
            tripReportData: {
              finishedTrips: apiData.finishedTrips,
              todayOngoingTrips: apiData.todayOngoingTrips,
              hailTrips: apiData.hailTrips,
              nonResponseTrips: apiData.nonResponseTrips
            },
            achievementData: {
              tripsCompleted: apiData.tripsCompleted,
              achievementTotalRiders: apiData.achievementTotalRiders,
              platformUptime: apiData.platformUptime
            }
          })
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#A7FF03]"></div>
    </div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <BacktoHome/>
      {data.heroData && <OpenDataHeroCards data={data.heroData} />}
      {data.registerData && <DailyRiderRegister data={data.registerData} />}
      {data.tripReportData && <TodayTripReport data={data.tripReportData} />}
      {data.achievementData && <EndDetailsStatics data={data.achievementData} />}
    </div>
  )
}

export default Page