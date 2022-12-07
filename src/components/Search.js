import React, { useState } from "react";
import axios from "axios";
import "./Search.scss";
import SearchIcon from "../images/search.svg";
import InfoWeather from "./InfoWeather";

const Search = ({ defaultCity }) => {
  const [city, setCity] = useState(defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  const showWeather = (response) => {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      date: "Friday 14:12",
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      city: response.data.city,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    search();
  };

  const changeCity = (event) => {
    setCity(event.target.value);
  };
  const search = () => {
    const apiKey = "d0b6fd5o79fcec65aa41f33c5203dt9a";
    let unit = "metric";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(showWeather);
  };

  const form = (
    <form className="Search" id="search-form" onSubmit={handleSubmit}>
      <div className="d-flex justify-content-between search-box">
        <input
          type="text"
          id="city-input"
          placeholder="Enter a city..."
          onChange={changeCity}
        />
        <button type="submit" className="btn btn-primary btn-search">
          <img src={SearchIcon} alt="Search icon" />
        </button>
      </div>
    </form>
  );

  if (weatherData.ready) {
    return (
      <div className="Search">
        {form}
        <InfoWeather
          city={weatherData.city}
          date={weatherData.date}
          temperature={Math.round(weatherData.temperature)}
          description={weatherData.description}
          humidity={weatherData.humidity}
          wind={Math.round(weatherData.wind)}
          icon={weatherData.icon}
        />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
};

export default Search;
