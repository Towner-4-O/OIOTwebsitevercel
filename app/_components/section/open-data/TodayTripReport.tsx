'use client'

import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
import { FaTaxi, FaCheck, FaSpinner, FaBan } from 'react-icons/fa'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

interface TripReportData {
  finishedTrips: string;
  todayOngoingTrips: string;
  hailTrips: string;
  nonResponseTrips: string;
}

interface TripReportProps {
  data: TripReportData;
}

const TripSummaryCard = ({ title, value, icon: Icon }: any) => (
  <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-[#5445F9]/20 hover:shadow-lg transition-all duration-300">
    <div className="flex items-center space-x-3">
      <div className="p-2 bg-[#5445F9]/5 rounded-lg">
        <Icon className="w-5 h-5 text-[#5445F9]" />
      </div>
      <div>
        <p className="text-sm text-[#5445F9]">{title}</p>
        <p className="text-xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  </div>
)

const TodayTripReport: React.FC<TripReportProps> = ({ data }) => {
  const chartData = {
    labels: ['Non-Responsive', 'Ongoing Trips', 'Hail Trips', 'Finished Trips'],
    datasets: [
      {
        label: 'Trip Statistics',
        data: [
          parseInt(data.nonResponseTrips) || 0,
          parseInt(data.todayOngoingTrips) || 0,
          parseInt(data.hailTrips) || 0,
          parseInt(data.finishedTrips) || 0
        ],
        fill: true,
        borderColor: '#5445F9',
        backgroundColor: 'rgba(84, 69, 249, 0.1)',
        tension: 0.4,
        pointRadius: 6,
        pointBackgroundColor: '#5445F9',
      }
    ]
  }
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0,0,0,0.05)'
        },
        ticks: {
          precision: 0
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#2d2f25',
        bodyColor: '#4a4d3c',
        borderColor: '#e8ebd7',
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        callbacks: {
          label: (context: any) => {
            const value = context.raw;
            return `Count: ${value} trips`;
          }
        }
      }
    },
    interaction: {
      intersect: false,
      mode: 'index' as const
    }
  }

  return (
    <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-[#5445F9]/20 py-10 mt-10">
      <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between mb-6">
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <span className="px-3 py-1 text-xs font-semibold bg-[#5445F9]/5 text-[#5445F9] rounded-full">
              Today
            </span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Today's Trip Report</h2>
          <p className="text-[#5445F9]">Real-time trip statistics across all cities</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <TripSummaryCard
          title="Finished Trips"
          value={data.finishedTrips}
          icon={FaCheck}
        />
        <TripSummaryCard
          title="Ongoing Trips"
          value={data.todayOngoingTrips}
          icon={FaTaxi}
        />
        <TripSummaryCard
          title="Hail Trips"
          value={data.hailTrips}
          icon={FaSpinner}
        />
        <TripSummaryCard
          title="Non-Responsive"
          value={data.nonResponseTrips}
          icon={FaBan}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-[#5445F9]/20 h-[400px]">
          <Line data={chartData} options={options} />
        </div>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-[#5445F9]/20">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-[#5445F9]/5 rounded-lg">
                  <FaCheck className="w-5 h-5 text-[#5445F9]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Quick Stats</h3>
              </div>
              <span className="px-3 py-1 text-xs font-semibold bg-[#5445F9]/5 text-[#5445F9] rounded-full">
                Last 24h
              </span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-[#5445F9]/5 rounded-lg">
                <span className="text-sm text-[#5445F9]">Success Rate</span>
                <span className="text-sm font-bold text-gray-900">
                  {Math.round((parseInt(data.finishedTrips) / 
                    (parseInt(data.finishedTrips) + parseInt(data.nonResponseTrips))) * 100) || 0}%
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-[#5445F9]/5 rounded-lg">
                <span className="text-sm text-[#5445F9]">Response Rate</span>
                <span className="text-sm font-bold text-gray-900">
                  {Math.round((1 - (parseInt(data.nonResponseTrips) / 
                    (parseInt(data.finishedTrips) + parseInt(data.todayOngoingTrips) + 
                     parseInt(data.hailTrips) + parseInt(data.nonResponseTrips)))) * 100) || 0}%
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-[#5445F9]/5 rounded-lg">
                <span className="text-sm text-[#5445F9]">Active Rate</span>
                <span className="text-sm font-bold text-gray-900">
                  {Math.round((parseInt(data.todayOngoingTrips) / 
                    (parseInt(data.finishedTrips) + parseInt(data.todayOngoingTrips))) * 100) || 0}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodayTripReport