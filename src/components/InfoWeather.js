import React from "react";
import "./InfoWeather.scss";
export default function InfoWeather({
  city,
  temperature,
  description,
  humidity,
  wind,
  icon,
}) {
  let todayHour = "Friday 14:12";
  return (
    <section className="InfoWeather">
      <div className="ActualInfoCity">
        <h2>{city}</h2>
        <p className="today-hour">{todayHour}</p>
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
        <h3 className="temperature">
          <span>{temperature}</span>
          <span className="units">°C</span>
        </h3>
        <div className="weather-icon">
          <img src={icon} alt={description} />
        </div>
      </div>
    </section>
  );
}
