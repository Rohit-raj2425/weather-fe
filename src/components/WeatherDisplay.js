import React from 'react';

const WeatherDisplay = ({ weatherData }) => {
  if (!Object.keys(weatherData).length) {
    return <div>No weather data available</div>;
  }

  const { temperature, condition, humidity } = weatherData;

  return (
    <div className="weather-display">
      <h2>Weather Information</h2>
      <div className="weather-details">
        <p><strong>Temperature:</strong> {temperature}°C</p>
        <p><strong>Conditions:</strong> {condition}</p>
        <p><strong>Humidity:</strong> {humidity}%</p>
      </div>
    </div>
  );
};

export default WeatherDisplay;
