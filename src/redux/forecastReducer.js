import { forecastAPI } from "../api/api";

const SET_TODAYS_FORECAST_DATA = "SET_TODAYS_FORECAST_DATA";
const INITIALIZE_SUCCESS = "INITIALIZE_SUCCESS";
const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";

let initialState = {
  todaysForecast: null,
  initialized: true,
  forecastData: null,
  errorMessage: null,
};

const forecastReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODAYS_FORECAST_DATA:
      return { ...state, todaysForecast: action.payload };

    case INITIALIZE_SUCCESS:
      return { ...state, initialized: true };

    case SET_ERROR_MESSAGE:
      return { ...state, errorMessage: action.errorMessage };

    default:
      return state;
  }
};

export const setTodaysForecastData = (payload) => ({
  type: SET_TODAYS_FORECAST_DATA,
  payload,
});
export const initializeSuccess = () => ({ type: INITIALIZE_SUCCESS });
export const setErrorMessage = (errorMessage) => ({
  type: SET_ERROR_MESSAGE,
  errorMessage,
});

export const getTodaysForecastByGeoCoordinates =
  (lat, lon) => async (dispatch) => {
    const response = await forecastAPI.byGeoCoordinates(lat, lon);
    if (response.data.cod === "200") {
      dispatch(setTodaysForecastData(response.data.list[0]));
      dispatch(initializeSuccess());
    } else {
      dispatch(setErrorMessage(response.data.message));
    }
  };

export default forecastReducer;
