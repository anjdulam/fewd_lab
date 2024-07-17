import React, { useState } from 'react';
import axios from 'axios';
import './Exp.css';

const Exp = () => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [city, setCity] = useState("");
    const apiKey = '26c06c4bcd809e76f7a0a5e04f21f153';

    const fetchWeather = async (cityName) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
            );
            setWeather(response.data);
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    };

    const handleSearch = () => {
        if (city) {
            fetchWeather(city);
        }
    };

    const handleInputChange = (e) => {
        setCity(e.target.value);
    };

    return (
        <div className="weather-app">
            <div className="weather-container">
                <h2>Weather App</h2>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Enter city name"
                        value={city}
                        onChange={handleInputChange}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
                {loading && <p>Loading weather...</p>}
                {error && <p>Error fetching weather: {error.message}</p>}
                {weather && !loading && !error && (
                    <div className="weather-details">
                        <div className="weather-info">
                            <p><strong>Temperature:</strong> {(weather.main.temp - 273.15).toFixed(2)}°C</p>
                            <p><strong>Condition:</strong> {weather.weather[0].description}</p>
                        </div>
                        <div className="weather-icon">
                            {/* <img
                                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                alt={weather.weather[0].description}
                            /> */}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Exp;
