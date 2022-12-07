import React from "react";
import ActualInfoCity from "./ActualInfoCity";
import "./InfoWeather.scss";
import NowWeather from "./NowWeather";
export default function InfoWeather({ city }) {
  return (
    <section className="InfoWeather">
      <ActualInfoCity city={city} />
      <NowWeather />
    </section>
  );
}
