import React, { useEffect } from "react";
import "./App.css";
import HeaderContainer from "./components/HeaderContainer";
import NavBarContainer from "./components/NavBarContainer/NavBarContainer";
import { connect } from "react-redux";
import Loader from "./components/common/Loader";
import { getInitialized } from "./utils/selectors";
import { initializeApp } from "./redux/appReducer";
import ForecastContainer from "./components/ForecastContainer/ForecastContainer";

const App = ({ initialized, initializeApp }) => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((data) => {
      initializeApp(data.coords.latitude, data.coords.longitude);
    });
    let date = new Date("2020-08-05 18:00:00").toLocaleString("en-GB", {
      weekday: "long",
    });

    console.log(date);
  }, [initializeApp]);

  return (
    <>
      {!initialized ? (
        <Loader />
      ) : (
        <div className="app-wrapper">
          <HeaderContainer />
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
  };
};

export default connect(mapStateToProps, { initializeApp })(App);
