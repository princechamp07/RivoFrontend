import React from 'react'
import { OverviewCards } from './OverviewCards'
import { PlatformView } from './PlatformView'
import { RevenueChart } from './RevenueChart'
import { TopPlatform } from './TopPlatform'
import { UserCountry } from './UserCountry'
import { BestSeller } from './BestSeller'
import Sidebar from '../Sidebar'

const Dashboard = () => {
  return (
    <div className='flex'>
        <Sidebar />
        <div className="min-h-screen w-full bg-gray-100 p-6">
      <header className="mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <button className="bg-purple-500 text-white px-4 py-2 rounded-lg">Export</button>
      </header>

      <OverviewCards />

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <PlatformView />
        <RevenueChart />
        <TopPlatform />
        <UserCountry />
        <BestSeller />
      </div>
    </div>
    </div>
  )
}

export default Dashboard