import React from "react";
import "./ActualInfoCity.scss";
export default function ActualInfoCity({ city }) {
  let humidity = 10;
  let wind = 40;
  let todayHour = "Friday 14:12";
  let description = "Scattered clouds";
  return (
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
  );
}
