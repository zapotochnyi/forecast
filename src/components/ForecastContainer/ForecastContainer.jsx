import React from "react";
import s from "./ForecastContainer.module.css";
import { connect } from "react-redux";
import {
  getCurrentForecastData,
  getRandomQuoteData,
  getTimeMarks,
  getTimeIndex,
} from "../../utils/selectors";
import DetailedForecast from "./DetailedForecast/DetailedForecast";
import MainForecast from "./MainForecast/MainForecast";
import TimeSetter from "./TimeSetter/TimeSetter";
import { setCurrentTimeData } from "../../redux/forecastReducer";

const ForecastContainer = ({
  currentForecastData: { weather, temp, feels_like, pressure, humidity, wind },
  randomQuote,
  timeIndex,
  timeMarks,
  setCurrentTimeData,
}) => {
  return (
    <div className={s.forecast_wrap}>
      <MainForecast weather={weather} temp={temp} feels_like={feels_like} />
      <DetailedForecast
        pressure={pressure}
        humidity={humidity}
        wind={wind}
        randomQuote={randomQuote}
      />
      <TimeSetter
        timeIndex={timeIndex}
        timeMarks={timeMarks}
        setCurrentTimeData={setCurrentTimeData}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentForecastData: getCurrentForecastData(state),
    randomQuote: getRandomQuoteData(state),
    timeMarks: getTimeMarks(state),
    timeIndex: getTimeIndex(state),
  };
};

export default connect(mapStateToProps, { setCurrentTimeData })(
  ForecastContainer
);
