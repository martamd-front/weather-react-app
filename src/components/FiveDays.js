import React, { useState, useEffect } from "react";
import axios from "axios";
import PropagateLoader from "react-spinners/PropagateLoader";
import ForecastDay from "./ForecastDay";
import "./FiveDays.scss";

export default function FiveDays({ city }) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [city]);

  function displayForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  const load = () => {
    let clearCity = city.replace(/\s/g, "+");
    let apiKey = "d0b6fd5o79fcec65aa41f33c5203dt9a";
    let unit = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${clearCity}&key=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(displayForecast);
  };

  if (loaded) {
    return (
      <section className="FiveDays" id="forecast">
        <div className="row text-center">
          {forecast.map((forecastDay, index) => {
            if (index < 5) {
              return (
                <div className="col-xs-2 col" key={index}>
                  <ForecastDay forecastDay={forecastDay} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </section>
    );
  } else {
    load();
    return (
      <div className="Loading">
        <PropagateLoader color="#d485ff" />
      </div>
    );
  }
}
