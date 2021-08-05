import React, { useEffect } from "react";
import "./App.css";
import HeaderContainer from "./components/HeaderContainer/HeaderContainer";
import NavBarContainer from "./components/NavBarContainer/NavBarContainer";
import { connect } from "react-redux";
import Loader from "./components/common/Loader";
import { getErrorMessage, getInitialized } from "./utils/selectors";
import { initializeApp } from "./redux/appReducer";
import ForecastContainer from "./components/ForecastContainer/ForecastContainer";

const App = ({ initialized, initializeApp, errorMessage }) => {
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
          <HeaderContainer errorMessage={errorMessage} />
          <NavBarContainer />
          <ForecastContainer />
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    initialized: getInitialized(state),
    errorMessage: getErrorMessage(state),
  };
};

export default connect(mapStateToProps, {
  initializeApp,
})(App);
