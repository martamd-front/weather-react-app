import React, { useState } from "react";
import "./WeatherTemperarature.scss";

export default function WeatherTemperature({ celcius }) {
  const [unit, setUnit] = useState("celcius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <h3 className="WeatherTemperarature">
        <span>{celcius}</span>
        <span className="units">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </h3>
    );
  } else {
    let fahrenheit = (celcius * 9) / 5 + 32;
    return (
      <h3 className="WeatherTemperarature">
        <span>{Math.round(fahrenheit)}</span>
        <span className="units">
          <a href="/" onClick={showCelcius}>
            °C
          </a>{" "}
          | °F
        </span>
      </h3>
    );
  }
}
