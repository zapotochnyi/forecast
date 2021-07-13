import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Forecast from "./components/ForecastContainer/Forecast";
import { connect } from "react-redux";
import Loader from "./components/common/Loader";
import { getForecastDataByGeoCoordinates } from "./redux/forecastReducer";

const App = ({ getForecastDataByGeoCoordinates, forecastData }) => {
  let [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((data) => {
      getForecastDataByGeoCoordinates(
        data.coords.latitude,
        data.coords.longitude
      ).then(() => setIsLoader(false));
    });
  }, [getForecastDataByGeoCoordinates]);

  return (
    <>
      {isLoader ? (
        <Loader />
      ) : (
        <div className="app-wrapper">
          <Header />
          <NavBar />
          <Forecast forecastData={forecastData} />
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    forecastData: state.forecast.forecastData,
  };
};

export default connect(mapStateToProps, { getForecastDataByGeoCoordinates })(
  App
);
