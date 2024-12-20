// src/components/PlatformView.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const data = {
  labels: ['1 Oct', '9 Oct', '16 Oct', '23 Oct', '31 Oct', '6 Nov'],
  datasets: [
    { label: 'Shopee', data: [309200, 587126, 498731, 567281, 301912, 467891], backgroundColor: '#9b59b6' },
    { label: 'Tokopedia', data: [90120, 101290, 115120, 95210, 80120, 91200], backgroundColor: '#2ecc71' },
    { label: 'Amazon', data: [65740, 72760, 77260, 68260, 63760, 65740], backgroundColor: '#3498db' },
    { label: 'Lazada', data: [55120, 60120, 65200, 53000, 51120, 60120], backgroundColor: '#e74c3c' },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    title: { display: true, text: 'Platform View Distribution' },
  },
};

export function PlatformView() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Platform View</h2>
      <Bar data={data} options={options} />
    </div>
  );
}
