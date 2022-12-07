import React from "react";
import "./NowWeather.scss";
export default function NowWeather() {
  let tempCity = 20;
  let iconImage =
    "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png";
  return (
    <div className="NowWeather">
      <h3 className="temperature">
        <span>{tempCity}</span>
        <span className="units">°C</span>
      </h3>
      <div className="weather-icon">
        <img src={iconImage} alt="" id="icon" />
      </div>
    </div>
  );
}
