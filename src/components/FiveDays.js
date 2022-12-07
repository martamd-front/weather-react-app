import React from "react";
import "./FiveDays.scss";
export default function FiveDays() {
  return (
    <section className="FiveDays" id="forecast">
      <div className="row text-center">
        <div className="col-xs-2 col">
          <h4>Wed</h4>
          <div className="weather-icon">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
              alt="few clouds"
            />
          </div>
          <p>
            <strong className="forecast-temp">15</strong>
            <strong>°</strong> <span className="forecast-temp">12</span>°
          </p>
        </div>
        <div className="col-xs-2 col">
          <h4>Thu</h4>
          <div className="weather-icon">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
              alt="light rain"
            />
          </div>
          <p>
            <strong className="forecast-temp">14</strong>
            <strong>°</strong> <span className="forecast-temp">12</span>°
          </p>
        </div>
        <div className="col-xs-2 col">
          <h4>Fri</h4>
          <div className="weather-icon">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png"
              alt="scattered clouds"
            />
          </div>
          <p>
            <strong className="forecast-temp">17</strong>
            <strong>°</strong> <span className="forecast-temp">13</span>°
          </p>
        </div>
        <div className="col-xs-2 col">
          <h4>Sat</h4>
          <div className="weather-icon">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
              alt="light rain"
            />
          </div>
          <p>
            <strong className="forecast-temp">14</strong>
            <strong>°</strong> <span className="forecast-temp">13</span>°
          </p>
        </div>
        <div className="col-xs-2 col">
          <h4>Sun</h4>
          <div className="weather-icon">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
              alt="overcast clouds"
            />
          </div>
          <p>
            <strong className="forecast-temp">12</strong>
            <strong>°</strong> <span className="forecast-temp">9</span>°
          </p>
        </div>
      </div>
    </section>
  );
}
