import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Forecast from "./components/ForecastContainer/Forecast";
import { connect } from "react-redux";
import Loader from "./components/common/Loader";
import {
  getForecastDataByGeoCoordinates,
  getRandomQuote,
} from "./redux/forecastReducer";
import { getForecastData, getRandomQuoteData } from "./utils/selectors";

const App = ({
  forecastData,
  randomQuote,
  getForecastDataByGeoCoordinates,
  getRandomQuote,
}) => {
  let [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((data) => {
      getForecastDataByGeoCoordinates(
        data.coords.latitude,
        data.coords.longitude
      ).then(() => setIsLoader(false));
    });
  }, [getForecastDataByGeoCoordinates]);
  //todo fix bug with initialization
  useEffect(() => {
    getRandomQuote();
  }, [getRandomQuote]);

  return (
    <>
      {isLoader ? (
        <Loader />
      ) : (
        <div className="app-wrapper">
          <Header />
          <NavBar />
          <Forecast forecastData={forecastData} randomQuote={randomQuote} />
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    forecastData: getForecastData(state),
    randomQuote: getRandomQuoteData(state),
  };
};

export default connect(mapStateToProps, {
  getForecastDataByGeoCoordinates,
  getRandomQuote,
})(App);
