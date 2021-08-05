import React from "react";
import s from "./DetailedForecast.module.css";
//icons
import windIcon from "../../../assets/detailed-forecast/wind.svg";
import pressureIcon from "../../../assets/detailed-forecast/pressure.svg";
import humidityIcon from "../../../assets/detailed-forecast/humidity.svg"
import Quote from "./Quote/Quote";

const DetailedForecast = ({ pressure, humidity, wind, randomQuote }) => {
  return (
    <div id="detailed_forecast" className={s.detailed_forecast_wrap}>
      <div className={s.info_wrap}>
        <div className={s.info_item}>
          <div className={s.icon}>
            <img src={pressureIcon} alt="" />
          </div>
          {pressure} hPa Pressure
        </div>
        <div className={s.info_item}>
          <div className={s.icon}>
            <img src={humidityIcon} alt="" />
          </div>
          {humidity} % Humidity
        </div>
        <div className={s.info_item}>
          <div className={s.icon}>
            <img src={windIcon} alt="" />
          </div>
          {wind} m/s Wind
        </div>
      </div>

      <Quote randomQuote={randomQuote} />
    </div>
  );
};

export default DetailedForecast;
