import React from 'react';
import LineGraph from '../components/LineGraph';
import CovidMap from '../components/CovidMap';

const ChartsAndMapsPage: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-yellow-400 to-green-500">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-semibold mb-4">Charts and Maps</h1>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Cases Fluctuations</h2>
          <LineGraph />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Covid Map</h2>
          <CovidMap />
        </div>
      </div>
    </div>
  );
};

export default ChartsAndMapsPage;
