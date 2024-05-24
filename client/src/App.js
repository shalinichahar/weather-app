import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Weather from './Weather';
import WeatherForm from './WeatherForm';
import './App.css';

function App() {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    const fetchWeather = async (city) => {
      console.log(city);
        const url = `http://localhost:3001/weather?city=${city}`;
        console.log(`URL: ${url}`);

        try {
            const response = await axios.get(url);
            setWeatherData(response.data);
            setError(null);
        } catch (error) {
            console.error("Error fetching the weather data", error);
            setWeatherData(null);
            setError('City not found or API error. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center p-4">
            <h1 className="text-4xl font-bold mb-4">Weather App</h1>
            <WeatherForm fetchWeather={fetchWeather} />
            {error && <p className="text-red-500 mt-4">{error}</p>}
            {weatherData && <Weather data={weatherData} />}
        </div>
    );
}

export default App;