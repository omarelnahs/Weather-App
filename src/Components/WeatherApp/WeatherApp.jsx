import React, { useState } from 'react';
import './WeatherApp.css'

import search_icon from '../Assets/search.png'
import cloud_icon from '../Assets/cloud.png'
import wind_icon from '../Assets/wind.png'
import humidity_icon from '../Assets/humidity.png'

const WeatherApp = () => {

    let apiKey = "2f9939ea9ea8439ebce05303232109";

    const [wicon, setWicon] = useState(cloud_icon)

    const search = async () =>{

        const element = document.getElementsByClassName("cityInput");

        if(element[0].value === ""){
            return 0;
        }

        let url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${element[0].value}&aqi=no`

        let res = await fetch(url);
        let data = await res.json();
        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-rate");
        const temp = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");

        humidity[0].innerHTML = data.current.humidity  + " %";
        wind[0].innerHTML = data.current.wind_mph  + " km/h";
        temp[0].innerHTML = data.current.temp_c  + " °C";
        location[0].innerHTML = data.location.name;

        setWicon(data.current.condition.icon)

    }

    return (
        <div className='container'>
            <div className="top-bar">
                <input 
                    type="text" 
                    className="cityInput"
                    placeholder='Search'
                />
                <div className="search-icon" onClick={search}>
                    <img src={search_icon} alt="" />
                </div>
            </div>
            <div className="weather-image">
                <img src={wicon} alt='' />
            </div>
            <div className="weather-temp">24°C</div>
            <div className="weather-location">London</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" className='icon' />
                    <div className="data">
                        <div className="humidity-percent">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="" className='icon' />
                    <div className="data">
                        <div className="wind-rate">18 km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherApp;