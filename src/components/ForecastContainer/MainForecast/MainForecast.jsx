import React from "react";
import s from "./MainForecast.module.css";
import CountUp from "react-countup";
//icons
import cloudyDay from "../../../assets/weather-icons/cloudy.svg";
import thunder from "../../../assets/weather-icons/thunderstorm.svg";
import drizzle from "../../../assets/weather-icons/drizzle.svg";
import rainy from "../../../assets/weather-icons/rainy.svg";
import snow from "../../../assets/weather-icons/snowy.svg";
import clearDay from "../../../assets/weather-icons/sun.svg";

const MainForecast = ({ weather: { description, main }, temp, feels_like }) => {
  let img;

  switch (main) {
    case "Clouds":
      img = cloudyDay;
      break;

    case "Thunderstorm":
      img = thunder;
      break;

    case "Drizzle":
      img = drizzle;
      break;

    case "Rain":
      img = rainy;
      break;

    case "Snow":
      img = snow;
      break;

    case "Clear":
      img = clearDay;
      break;

    default:
      img = clearDay;
      break;
  }

  return (
    <div className={s.main_forecast_wrap}>
      <div className={s.temp_description_wrap}>
        <div className={s.temp}>
          <CountUp duration={0.5} delay={0} end={temp} />
          <span className={s.celsius}>°C</span>
        </div>
        <div id="description" className={s.description}>
          <div>Feels like {Math.round(feels_like)}°C,</div>
          <div>{description}</div>
        </div>
      </div>

      <div className={s.icon_wrap}>
        <img id="weather_icon" src={img} alt="" />
      </div>
    </div>
  );
};

export default MainForecast;
