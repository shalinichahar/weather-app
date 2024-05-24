import React from 'react';

function Weather({ data }) {
    return (
        <div className="mt-8 bg-white rounded-lg shadow-md p-6 w-full max-w-sm">
            <h2 className="text-2xl font-bold mb-2">{data.name}, {data.sys.country}</h2>
            <p className="text-lg">Temperature: {data.main.temp} °C</p>
            <p className="text-lg">Weather: {data.weather[0].description}</p>
            <p className="text-lg">Humidity: {data.main.humidity} %</p>
            <p className="text-lg">Wind Speed: {data.wind.speed} m/s</p>
        </div>
    );
}

export default Weather;