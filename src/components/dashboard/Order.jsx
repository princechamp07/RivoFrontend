import React from 'react'
import { OrderStats } from './OrderStats'
import { OrderTable } from './OrderTable'
import Sidebar from '../Sidebar'

const Order = () => {
  return (
    <div className='flex'>
         <Sidebar />
         <div className="min-h-screen bg-gray-100 w-full p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Orders</h1>
       
      </header>

      <OrderStats />

      <OrderTable />
    </div>
    </div>
  )
}

export default Order