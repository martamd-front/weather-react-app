import React from "react";
import cloudy from "@bybas/weather-icons/design/line/animation-ready/cloudy.svg";
import clearDay from "@bybas/weather-icons/design/line/animation-ready/clear-day.svg";
import clearNight from "@bybas/weather-icons/design/line/animation-ready/clear-night.svg";
import partlyCloudyDay from "@bybas/weather-icons/design/line/animation-ready/partly-cloudy-day.svg";
import partlyCloudyNight from "@bybas/weather-icons/design/line/animation-ready/partly-cloudy-night.svg";
import rain from "@bybas/weather-icons/design/line/animation-ready/rain.svg";
import partlyCloudyDayRain from "@bybas/weather-icons/design/line/animation-ready/partly-cloudy-day-rain.svg";
import partlyCloudyNightRain from "@bybas/weather-icons/design/line/animation-ready/partly-cloudy-night-rain.svg";
import partlyCloudyDaySnow from "@bybas/weather-icons/design/line/animation-ready/partly-cloudy-day-snow.svg";
import partlyCloudyNightSnow from "@bybas/weather-icons/design/line/animation-ready/partly-cloudy-night-snow.svg";
import thunderstorms from "@bybas/weather-icons/design/line/animation-ready/thunderstorms.svg";
import mist from "@bybas/weather-icons/design/line/animation-ready/mist.svg";

import overcast from "@bybas/weather-icons/design/line/animation-ready/overcast.svg";
import overcastNight from "@bybas/weather-icons/design/line/animation-ready/overcast-night.svg";

const codeMapping = {
  "clear-sky-day": clearDay,
  "clear-sky-night": clearNight,
  "few-clouds-day": partlyCloudyDay,
  "few-clouds-night": partlyCloudyNight,
  "scattered-clouds-day": cloudy,
  "scattered-clouds-night": cloudy,
  "broken-clouds-day": overcast,
  "broken-clouds-night": overcastNight,
  "shower-rain-day": rain,
  "shower-rain-night": rain,
  "rain-day": partlyCloudyDayRain,
  "rain-night": partlyCloudyNightRain,
  "thunderstorm-day": thunderstorms,
  "thunderstorm-night": thunderstorms,
  "snow-day": partlyCloudyDaySnow,
  "snow-night": partlyCloudyNightSnow,
  "mist-day": mist,
  "mist-night": mist,
};

const WeatherIcon = ({ code, alt }) => (
  <img src={codeMapping[code]} alt={alt} width="80px" />
);

export default WeatherIcon;
