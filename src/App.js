import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { connect } from "react-redux";
import Loader from "./components/common/Loader";
import {
  getInitialized,
} from "./utils/selectors";
import { initializeApp } from "./redux/appReducer";
import ForecastContainer from "./components/ForecastContainer/ForecastContainer";

const App = ({ forecastData, randomQuote, initialized, initializeApp }) => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((data) => {
      initializeApp(data.coords.latitude, data.coords.longitude);
    });
  }, [initializeApp]);

  return (
    <>
      {!initialized ? (
        <Loader />
      ) : (
        <div className="app-wrapper">
          <Header />
          <NavBar />
          <ForecastContainer />
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    initialized: getInitialized(state),
  };
};

export default connect(mapStateToProps, { initializeApp })(App);
