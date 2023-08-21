import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const CovidMap: React.FC = () => {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://disease.sh/v3/covid-19/countries');
        const data = await response.json();
        setCountriesData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    // Use center prop
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '400px' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {countriesData.map((country:any) => (
        <Marker
          key={country.countryInfo.iso2}
          position={[country.countryInfo.lat, country.countryInfo.long]}
        >
          <Popup>
            <div>
              <h3>{country.country}</h3>
              <p>Active: {country.active}</p>
              <p>Recovered: {country.recovered}</p>
              <p>Deaths: {country.deaths}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default CovidMap;
