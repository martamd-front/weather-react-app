import React, { useState } from "react";
import axios from "axios";
import "./Search.scss";
import SearchIcon from "../images/search.svg";
import InfoWeather from "./InfoWeather";

const Search = () => {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [cityWeather, setCityWeather] = useState({});

  const showWeather = (response) => {
    setLoaded(true);
    setCityWeather({
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const apiKey = "d0b6fd5o79fcec65aa41f33c5203dt9a";
    let unit = "metric";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(showWeather);
  };

  const changeCity = (event) => {
    setCity(event.target.value);
  };

  const form = (
    <form className="Search" id="search-form" onSubmit={handleSubmit}>
      <div className="d-flex justify-content-between search-box">
        <input
          type="text"
          id="city-input"
          placeholder="Enter a city..."
          autocomplete="off"
          onChange={changeCity}
        />
        <button type="submit" className="btn btn-primary btn-search">
          <img src={SearchIcon} alt="Search icon" />
        </button>
      </div>
    </form>
  );

  if (loaded) {
    return (
      <div className="Search">
        {form}
        <InfoWeather
          city={city}
          temperature={Math.round(cityWeather.temperature)}
          description={cityWeather.description}
          humidity={cityWeather.humidity}
          wind={Math.round(cityWeather.wind)}
          icon={cityWeather.icon}
        />
      </div>
    );
  } else {
    return form;
  }
};

export default Search;
