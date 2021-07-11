import React from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ForecastContainer from "./components/ForecastContainer/ForecastContainer";
import { connect } from "react-redux";
import Loader from "./components/common/Loader";

const App = ({ initialized }) => {
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
    initialized: state.forecast.initialized,
  };
};

export default connect(mapStateToProps, {})(App);
