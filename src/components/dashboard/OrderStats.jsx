// src/components/OrderStats.jsx
import React from 'react';

const stats = [
  { label: 'Total Orders', value: 21, percentage: '25.2%', trend: 'up' },
  { label: 'Order Items Over Time', value: 15, percentage: '18.2%', trend: 'up' },
  { label: 'Returns Orders', value: 0, percentage: '-1.2%', trend: 'down' },
  { label: 'Fulfilled Orders Over Time', value: 12, percentage: '12.2%', trend: 'up' },
];

export function OrderStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="p-4 bg-white rounded-lg shadow-md flex flex-col items-start">
          <h2 className="text-lg font-semibold">{stat.label}</h2>
          <p className="text-2xl font-bold">{stat.value}</p>
          <p className={`text-sm font-semibold ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
            {stat.percentage} {stat.trend === 'up' ? '↑' : '↓'} last week
          </p>
        </div>
      ))}
    </div>
  );
}
