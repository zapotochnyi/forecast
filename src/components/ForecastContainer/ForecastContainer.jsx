import React from "react";
import s from "./ForecastContainer.module.css";
import MainForecast from "./MainForecast/MainForecast";
import DetailedForecast from "./DetailedForecast/DetailedForecast";
import TimeSetter from "./TimeSetter/TimeSetter";

const ForecastContainer = () => {
  return (
    <div className={s.forecast_wrap}>
      <MainForecast />
      <DetailedForecast />
      <TimeSetter />
    </div>
  );
};

export default ForecastContainer;
