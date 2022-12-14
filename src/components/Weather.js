import React, { useState } from "react";
import axios from "axios";
import "./Weather.scss";
import { GoSearch } from "react-icons/go";
import { MdOutlineMyLocation } from "react-icons/md";
import InfoWeather from "./InfoWeather";
import FiveDays from "./FiveDays";
import PropagateLoader from "react-spinners/PropagateLoader";
import formattedDate from "./FormattedDate";

const Weather = ({ defaultCity }) => {
  const [city, setCity] = useState(defaultCity);
  const [date, setDate] = useState(null);
  const [weatherData, setWeatherData] = useState({ ready: false });

  const showWeather = (response) => {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon,
      city: response.data.city,
      coordinates: response.data.coord,
    });
  };

  const search = () => {
    const apiKey = "d0b6fd5o79fcec65aa41f33c5203dt9a";
    let unit = "metric";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(showWeather);
  };

  function onClickCurrentLocButton(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(function (position) {
      let apiKey = "d0b6fd5o79fcec65aa41f33c5203dt9a";
      let units = "metric";
      let apiUrl = `https://api.shecodes.io/weather/v1/current?lat=${position.coords.latitude}&lon=${position.coords.longitude}&key=${apiKey}&units=${units}`;
      axios.get(apiUrl).then(showWeather);
    });
  }

  function getTimeCity(response) {
    setDate(formattedDate(response.data.datetime));
  }

  const timeCity = () => {
    let apiKey = "a5982d63d74e479c94f562be7bc61e04&location";
    let apiTimeUrl = `https://timezone.abstractapi.com/v1/current_time/?api_key=${apiKey}&location=${city}`;
    axios.get(apiTimeUrl).then(getTimeCity);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    search();
    timeCity(city);
  };

  const changeCity = (event) => {
    setCity(event.target.value);
  };

  const form = (
    <form className="Search" id="search-form" onSubmit={handleSubmit}>
      <div className="d-flex align-items-center">
        <div className="d-flex justify-content-between search-box">
          <input
            type="text"
            id="city-input"
            placeholder="Enter a city..."
            onChange={changeCity}
            autoComplete="off"
          />

          <button type="submit" className="btn btn-primary btn-search">
            <GoSearch className="icon" alt="Search icon" />
          </button>
        </div>
        <button
          className="btn btn-primary btn-current-location"
          onClick={onClickCurrentLocButton}
        >
          <MdOutlineMyLocation className="icon" alt="Current location" />
        </button>
      </div>
    </form>
  );

  if (weatherData.ready) {
    return (
      <div className="Weather">
        {form}
        <InfoWeather
          date={date}
          city={weatherData.city}
          temperature={Math.round(weatherData.temperature)}
          description={weatherData.description}
          humidity={weatherData.humidity}
          wind={Math.round(weatherData.wind)}
          icon={weatherData.icon}
        />
        <FiveDays city={weatherData.city} />
      </div>
    );
  } else {
    search();
    timeCity();
    return (
      <div className="Loading">
        <PropagateLoader color="#d485ff" />
      </div>
    );
  }
};

export default Weather;
