// src/Weather.js
import React, { useState } from 'react';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = 'YOUR_API_KEY_HERE'; // Replace with your actual API key

  const fetchWeather = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      console.log('API response:', response); // Debugging line
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      console.log('Weather data:', data); // Debugging line
      setWeather(data);
      setError(null);
    } catch (error) {
      console.error('Fetch error:', error); // Debugging line
      setError(error.message);
      setWeather(null);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim() === '') {
      setError('Please enter a city name');
      return;
    }
    fetchWeather(city);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button type="submit">Search</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Weather: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
