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
              src="https://weather-react-martamd.netlify.app/static/media/overcast.244705a08a34c685e32fe335ad8ef6e2.svg"
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
              src="https://weather-react-martamd.netlify.app/static/media/partly-cloudy-day.0e7cd9f91f17f62b4d487f0683fd052b.svg"
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
              src="https://weather-react-martamd.netlify.app/static/media/overcast.244705a08a34c685e32fe335ad8ef6e2.svg"
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
              src="https://weather-react-martamd.netlify.app/static/media/clear-day.4c82810e685aca17144a40289b509a6c.svg"
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
              src="https://weather-react-martamd.netlify.app/static/media/partly-cloudy-day.0e7cd9f91f17f62b4d487f0683fd052b.svg"
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
