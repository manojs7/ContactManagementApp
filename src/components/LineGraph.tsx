import React from 'react';
import { Line } from 'react-chartjs-2';

const LineGraph: React.FC = () => {
  // Fetch your data and set it here
  const data = {
    labels: [], // Array of dates
    datasets: [
      {
        label: 'Confirmed Cases',
        data: [], // Array of confirmed cases
        borderColor: 'blue',
        fill: false,
      },
      // Add more datasets for recovered and deaths
    ],
  };

  return <Line data={data} />;
};

export default LineGraph;
