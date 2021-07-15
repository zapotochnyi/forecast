import React from "react";
import s from "./ForecastContainer.module.css";
import { connect } from "react-redux";
import { getForecastData, getRandomQuoteData } from "../../utils/selectors";
import DetailedForecast from "./DetailedForecast/DetailedForecast";
import MainForecast from "./MainForecast/MainForecast";
import TimeSetter from "./TimeSetter/TimeSetter";

const ForecastContainer = ({
  forecastData: { weather, temp, feels_like, pressure, humidity, wind },
  randomQuote,
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
      <TimeSetter />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    forecastData: getForecastData(state),
    randomQuote: getRandomQuoteData(state),
  };
};

export default connect(mapStateToProps, {})(ForecastContainer);
