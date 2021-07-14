import { forecastAPI, quotesAPI } from "../api/api";

const SET_FORECAST_DATA = "SET_FORECAST_DATA";
const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";
const SET_RANDOM_QUOTE = "SET_RANDOM_QUOTE";

let initialState = {
  forecastData: null,
  errorMessage: null,
  randomQuote: null,
};

const forecastReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FORECAST_DATA:
      return { ...state, forecastData: action.payload };

    case SET_ERROR_MESSAGE:
      return { ...state, errorMessage: action.errorMessage };

    case SET_RANDOM_QUOTE:
      return { ...state, randomQuote: action.quote };

    default:
      return state;
  }
};

export const setTodaysForecastData = (payload) => ({
  type: SET_FORECAST_DATA,
  payload,
});
export const setErrorMessage = (errorMessage) => ({
  type: SET_ERROR_MESSAGE,
  errorMessage,
});
export const setRandomQuote = (quote) => ({
  type: SET_RANDOM_QUOTE,
  quote,
});

export const getForecastDataByGeoCoordinates =
(lat, lon) => async (dispatch) => {
  const response = await forecastAPI.byGeoCoordinates(lat, lon);
  if (response.data.cod === 200) {
    dispatch(setTodaysForecastData(response.data));
  } else {
    //toto validation of errors
    dispatch(setErrorMessage(response.data.cod));
  }
  return response;
};
export const getRandomQuote = () => async (dispatch) => {
  const response = await quotesAPI.getQuotes();
  if (response.data.length !== 0) {
    const randomQuote =
      response.data[Math.floor(Math.random() * response.data.length)];
    dispatch(setRandomQuote(randomQuote));
  }
  return response;
};

export default forecastReducer;
