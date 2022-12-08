import React from "react";
import "./InfoWeather.scss";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperarature from "./WeatherTemperarature";
export default function InfoWeather({
  city,
  date,
  temperature,
  description,
  humidity,
  wind,
  icon,
}) {
  return (
    <section className="InfoWeather">
      <div className="ActualInfoCity">
        <h2 className="text-capitalize">{city}</h2>
        <p className="today-hour">{date}</p>
        <p className="description">{description}</p>
        <ul className="actual-more-info">
          <li>
            Humidity: <span>{humidity}</span>%
          </li>
          <li>
            Wind: <span>{wind}</span> km/h
          </li>
        </ul>
      </div>
      <div className="NowWeather">
        <WeatherTemperarature celcius={temperature} />
        <div className="weather-icon">
          <WeatherIcon code={icon} alt={description} />
        </div>
      </div>
    </section>
  );
}
