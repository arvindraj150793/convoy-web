import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const PerformanceDashboard = ({ metricsHistory }) => {
  const data = {
    labels: metricsHistory.map((_, i) => `Interval ${i + 1}`),
    datasets: [
      {
        label: 'Speed (km/h)',
        data: metricsHistory.map(m => m.speed),
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      },
      {
        label: 'Acceleration (m/s²)',
        data: metricsHistory.map(m => m.acceleration),
        borderColor: 'rgb(53, 162, 235)',
        tension: 0.1
      }
    ]
  };

  return (
    <div className="performance-dashboard">
      <Line data={data} />
    </div>
  );
};

export default PerformanceDashboard;