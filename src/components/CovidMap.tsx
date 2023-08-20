// src/components/CovidMap.tsx

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const CovidMap: React.FC = () => {
  // Fetch your data and set it here
  const countriesData = [
    {
      updated: 1692559243587,
      country: "Afghanistan",
      countryInfo: {
        _id: 4,
        iso2: "AF",
        iso3: "AFG",
        lat: 33,
        long: 65,
        flag: "https://disease.sh/assets/img/flags/af.png",
      },
      cases: 224852,
      todayCases: 20,
      deaths: 7942,
      todayDeaths: 0,
      recovered: 204883,
      todayRecovered: 55,
      active: 12027,
      critical: 0,
      casesPerOneMillion: 5517,
      deathsPerOneMillion: 195,
      tests: 1292135,
      testsPerOneMillion: 31705,
      population: 40754388,
      continent: "Asia",
      oneCasePerPeople: 181,
      oneDeathPerPeople: 5132,
      oneTestPerPeople: 32,
      activePerOneMillion: 295.11,
      recoveredPerOneMillion: 5027.26,
      criticalPerOneMillion: 0,
    },
  ]; // Array of country data

  return (
    <MapContainer
      
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {countriesData.map((country: any) => (
        <Marker key={country.country} position={[country.lat, country.long]}>
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
