import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeathehrForecast-day"> Thu</div>
          <WeatherIcon code="old" />
          19 10
        </div>
      </div>
    </div>
  );
}
