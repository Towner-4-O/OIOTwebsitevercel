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
import { FaUserPlus, FaCheckCircle, FaPause, FaClock } from 'react-icons/fa'

// Register ChartJS components
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

interface RegisterData {
  totalToday: string;
  approved: string;
  pending: string;
  inProgress: string;
}

interface DailyRiderRegisterProps {
  data: RegisterData;
}

const DailyRiderRegister: React.FC<DailyRiderRegisterProps> = ({ data }) => {
  // Reorder the data to show ascending trend
  const chartData = {
    labels: ['In Progress', 'Pending', 'Approved', 'Total Today'],
    datasets: [
      {
        label: 'Registration Statistics',
        data: [
          parseInt(data.inProgress) || 0,
          parseInt(data.pending) || 0,
          parseInt(data.approved) || 0,
          parseInt(data.totalToday) || 0
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

  return (
    <section className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-[#5445F9]/20 py-10">
      <div className="flex flex-col space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Rider Today Registration Trends</h2>
            <p className="text-[#5445F9]">Daily registration activity overview</p>
          </div>
          <span className="px-3 py-1.5 text-xs font-semibold bg-[#5445F9]/5 text-[#5445F9] rounded-full border border-[#5445F9]/20">
            Today: {data.totalToday} New Registrations
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Total Today */}
          <div className="flex items-center space-x-3 p-4 rounded-xl bg-[#5445F9]/5 border border-[#5445F9]/20 hover:bg-[#5445F9]/10 transition-colors">
            <div className="p-2 bg-[#5445F9]/10 rounded-lg">
              <FaUserPlus className="w-5 h-5 text-[#5445F9]" />
            </div>
            <div>
              <p className="text-sm text-[#5445F9]">Total Today</p>
              <p className="text-xl font-bold text-gray-900">{data.totalToday}</p>
            </div>
          </div>
          {/* Approved */}
          <div className="flex items-center space-x-3 p-4 rounded-xl bg-[#5445F9]/5 border border-[#5445F9]/20 hover:bg-[#5445F9]/10 transition-colors">
            <div className="p-2 bg-[#5445F9]/10 rounded-lg">
              <FaCheckCircle className="w-5 h-5 text-[#5445F9]" />
            </div>
            <div>
              <p className="text-sm text-[#5445F9]">Approved</p>
              <p className="text-xl font-bold text-gray-900">{data.approved}</p>
            </div>
          </div>
          {/* Pending */}
          <div className="flex items-center space-x-3 p-4 rounded-xl bg-[#5445F9]/5 border border-[#5445F9]/20 hover:bg-[#5445F9]/10 transition-colors">
            <div className="p-2 bg-[#5445F9]/10 rounded-lg">
              <FaPause className="w-5 h-5 text-[#5445F9]" />
            </div>
            <div>
              <p className="text-sm text-[#5445F9]">Pending</p>
              <p className="text-xl font-bold text-gray-900">{data.pending}</p>
            </div>
          </div>
          {/* In Progress */}
          <div className="flex items-center space-x-3 p-4 rounded-xl bg-[#5445F9]/5 border border-[#5445F9]/20 hover:bg-[#5445F9]/10 transition-colors">
            <div className="p-2 bg-[#5445F9]/10 rounded-lg">
              <FaClock className="w-5 h-5 text-[#5445F9]" />
            </div>
            <div>
              <p className="text-sm text-[#5445F9]">In Progress</p>
              <p className="text-xl font-bold text-gray-900">{data.inProgress}</p>
            </div>
          </div>
        </div>

        <div className="h-[300px] w-full">
          <Line 
            data={chartData}
            options={{
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
                  },
                  min: 0,
                  suggestedMax: parseInt(data.totalToday) + 5 // Add some padding at the top
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
                      return `Count: ${value} riders`;
                    }
                  }
                }
              },
              interaction: {
                intersect: false,
                mode: 'index' as const
              }
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default DailyRiderRegister