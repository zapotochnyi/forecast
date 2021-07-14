import React from "react";
import s from "./MainForecast.module.css";
//icons
import cloudyDay from "../../../assets/weatherIcons/cloudy-day.svg";
import thunder from "../../../assets/weatherIcons/thunder.svg";
import drizzle from "../../../assets/weatherIcons/drizzle.svg";
import rainy from "../../../assets/weatherIcons/rainy.svg";
import snow from "../../../assets/weatherIcons/snowy.svg";
import clearDay from "../../../assets/weatherIcons/day.svg";

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
        <div className={s.temp}>{Math.round(temp)}°C</div>

        <div className={s.description}>
          <div>Feels like {Math.round(feels_like)}°C,</div>
          <div>{description}</div>
        </div>
      </div>

      <div className={s.icon_wrap}>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default MainForecast;
