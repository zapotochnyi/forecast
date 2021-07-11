import React from "react";
import s from "./ForecastContainer.module.css";
import MainForecast from "./MainForecast/MainForecast";
import DetailedForecast from "./DetailedForecast/DetailedForecast";
import TimeSetter from "./TimeSetter/TimeSetter";
import { connect } from "react-redux";
import { getTodaysForecastByGeoCoordinates } from "../../redux/forecastReducer";
import { useEffect, useState } from "react";
import Loader from "../common/Loader";

const ForecastContainer = ({
  todaysForecast,
  getTodaysForecastByGeoCoordinates,
}) => {
  let [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((data) => {
      getTodaysForecastByGeoCoordinates(
        data.coords.latitude,
        data.coords.longitude
      );
    });
  }, []);

  return (
    <div className={s.forecast_wrap}>
      <MainForecast todaysForecast={todaysForecast} />
      <DetailedForecast />
      <TimeSetter />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todaysForecast: state.forecast.todaysForecast,
  };
};

export default connect(mapStateToProps, { getTodaysForecastByGeoCoordinates })(
  ForecastContainer
);
