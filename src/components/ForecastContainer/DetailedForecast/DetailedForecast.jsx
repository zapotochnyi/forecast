import React from "react";
import s from "./DetailedForecast.module.css";
//icons
import windIcon from "../../../assets/wind.svg";
import pressureIcon from "../../../assets/pressure.svg";
import humidityIcon from "../../../assets/humidity.svg";
import { useEffect } from "react";

const DetailedForecast = ({
  pressure,
  humidity,
  wind: { speed },
  randomQuote,
}) => {
  return (
    <div className={s.detailed_forecast_wrap}>
      <div className={s.info_wrap}>
        <div className={s.info_item}>
          <div className={s.icon}>
            <img src={pressureIcon} alt="" />
          </div>
          {pressure} hPa Тиск
        </div>
        <div className={s.info_item}>
          <div className={s.icon}>
            <img src={humidityIcon} alt="" />
          </div>
          {humidity} % Вологість
        </div>
        <div className={s.info_item}>
          <div className={s.icon}>
            <img src={windIcon} alt="" />
          </div>
          {speed} м/с Вітер
        </div>
      </div>

      <div className={s.quotes_wrap}>
        <div>{randomQuote.text}</div>

        <div>{randomQuote.author}</div>
      </div>
    </div>
  );
};

export default DetailedForecast;
