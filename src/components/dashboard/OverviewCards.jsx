// src/components/OverviewCards.jsx
import React from 'react';

const stats = [
  { label: 'Product Viewed', value: '411.9K', percentage: '30.22%', color: 'bg-purple-500' },
  { label: 'Product Shared', value: '230.4K', percentage: '13.3%', color: 'bg-green-500' },
  { label: 'Product Added to Cart', value: '20.9K', percentage: '4.3%', color: 'bg-red-500' },
  { label: 'Product Checked Out', value: '410.54K', percentage: '30.22%', color: 'bg-blue-500' },
  { label: 'Product Re-ordered', value: '200K', percentage: '15%', color: 'bg-yellow-500' },
];

export function OverviewCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="p-4 bg-white rounded-lg shadow-md flex flex-col">
          <h2 className="text-lg font-semibold">{stat.label}</h2>
          <p className="text-2xl font-bold">{stat.value}</p>
          <p className={`${stat.color} text-white text-sm font-semibold px-2 py-1 rounded-full inline-block mt-2`}>
            {stat.percentage}
          </p>
        </div>
      ))}
    </div>
  );
}
