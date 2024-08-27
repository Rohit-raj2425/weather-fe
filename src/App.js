import axios from 'axios';
import React, { useState } from 'react';
import WeatherDisplay from './components/WeatherDisplay';

function App() {
  const [inputCity, setInputCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [weather, setWeather] = useState({});

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setIsLoading(true);
      const weatherData = await axios.get(`http://localhost:8000/api/v1/weather?cityName=${inputCity}`);
      setInputCity('');
      setWeather(weatherData?.data?.data);
    } catch (error) {
      console.log(error);
      setWeather({});
      alert(error?.response?.data?.error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (event) => {
    setInputCity(event.target.value);
  };

  return (
    <div className="App">
        <h1>Weather Forecast</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Enter city name:
            <input
              type="text"
              value={inputCity}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        {isLoading ? (
        <h1>Loading ... </h1>
      ) : (
        <WeatherDisplay weatherData={weather} />
      )} 
    </div>
  );
  
}

export default App;

