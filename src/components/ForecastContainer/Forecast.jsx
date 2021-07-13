import React from "react";
import s from "./Forecast.module.css";
import MainForecast from "./MainForecast/MainForecast";
import DetailedForecast from "./DetailedForecast/DetailedForecast";
import TimeSetter from "./TimeSetter/TimeSetter";

const Forecast = ({
  forecastData: {
    weather,
    name,
    main: { temp, feels_like },
  },
}) => {
  return (
    <div className={s.forecast_wrap}>
      <MainForecast
        weather={weather[0]}
        temp={temp}
        feels_like={feels_like}
      />
      <DetailedForecast />
      <TimeSetter />
    </div>
  );
};

export default Forecast;
