import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, TimeScale } from 'chart.js';
import 'chartjs-adapter-date-fns';
import {de} from 'date-fns/locale';

import { registerables } from 'chart.js';
Chart.register(...registerables);


// Register the time scale
Chart.register(TimeScale);

const LineGraph: React.FC = () => {
  const [casesData, setCasesData] = useState<number[]>([]);
  const [dates, setDates] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
        const data = await response.json();

        const casesHistory = data.cases as number;
        const casesDates = Object.keys(casesHistory);
        const confirmedCases = Object.values(casesHistory);

        setDates(casesDates);
        setCasesData(confirmedCases);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Confirmed Cases',
        data: casesData,
        borderColor: 'blue',
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'linear',
        time: {
          unit: 'day',
        },
        title: {
          display: true,
          text: 'Date',
        },
        adapters: {
          date: {
              locale: de
          },
      }
      },
      y: {
        type: 'linear',
        beginAtZero: true,
        title: {
          display: true,
          text: 'Confirmed Cases',
        },
      },
    } as const,
  };

  return <Line data={data} options={options} />;
};

export default LineGraph;
