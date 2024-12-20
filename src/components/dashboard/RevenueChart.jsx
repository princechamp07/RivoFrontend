// src/components/RevenueChart.jsx
import React from 'react';

export function RevenueChart() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Total Revenue</h2>
      <div className="text-4xl font-bold">$991,761,127</div>
      <p className="text-green-500 mt-2">19.4% ↑ this week</p>
    </div>
  );
}
