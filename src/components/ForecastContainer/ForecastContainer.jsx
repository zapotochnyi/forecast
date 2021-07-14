import React, { useEffect } from "react";
import s from "./Forecast.module.css";
import MainForecast from "./MainForecast/MainForecast";
import DetailedForecast from "./DetailedForecast/DetailedForecast";
import TimeSetter from "./TimeSetter/TimeSetter";
import { connect } from "react-redux";
import { getForecastData, getRandomQuoteData } from "../../utils/selectors";
import {
  getForecastDataByGeoCoordinates,
  getRandomQuote,
} from "../../redux/forecastReducer";

const ForecastContainer = ({
  forecastData: {
    weather,
    main: { temp, feels_like, pressure, humidity },
    wind,
  },
  randomQuote,
  getRandomQuote,
  getForecastDataByGeoCoordinates,
}) => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((data) => {
      getForecastDataByGeoCoordinates(
        data.coords.latitude,
        data.coords.longitude
      );
    });
  }, [getForecastDataByGeoCoordinates]);

  return (
    <div className={s.forecast_wrap}>
      <MainForecast weather={weather[0]} temp={temp} feels_like={feels_like} />
      <DetailedForecast
        pressure={pressure}
        humidity={humidity}
        wind={wind}
        getRandomQuote={getRandomQuote}
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

export default connect(mapStateToProps, {
  getForecastDataByGeoCoordinates,
  getRandomQuote,
})(ForecastContainer);
