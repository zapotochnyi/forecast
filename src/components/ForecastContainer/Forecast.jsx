import React from "react";
import s from "./Forecast.module.css";
import MainForecast from "./MainForecast/MainForecast";
import DetailedForecast from "./DetailedForecast/DetailedForecast";
import TimeSetter from "./TimeSetter/TimeSetter";

const Forecast = ({
  forecastData: {
    weather,
    main: { temp, feels_like, pressure, humidity },
    wind,
  },
  randomQuote,
}) => {

  return (
    <div className={s.forecast_wrap}>
      <MainForecast weather={weather[0]} temp={temp} feels_like={feels_like} />
      <DetailedForecast
        pressure={pressure}
        humidity={humidity}
        wind={wind}
        randomQuote={randomQuote}
      />
      <TimeSetter />
    </div>
  );
};

export default Forecast;
