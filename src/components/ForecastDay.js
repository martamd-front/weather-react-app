import React from "react";
import "./ForecastDay.scss";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay({ forecastDay }) {
  function day() {
    let date = new Date(forecastDay.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="ForecastDay">
      <h4>{day()}</h4>
      <div className="weather-icon">
        <WeatherIcon
          code={forecastDay.condition.icon}
          alt={forecastDay.condition.description}
        />
      </div>
      <p>
        <strong className="forecast-temp">
          {Math.round(forecastDay.temperature.maximum)}
        </strong>
        <strong>°</strong>{" "}
        <span className="forecast-temp">
          {Math.round(forecastDay.temperature.minimum)}
        </span>
        °
      </p>
    </div>
  );
}
