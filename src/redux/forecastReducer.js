import { forecastAPI } from "../api/api";

const SET_FORECAST_DATA = "SET_FORECAST_DATA";
const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";

let initialState = {
  forecastData: null,
  errorMessage: null,
};

const forecastReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FORECAST_DATA:
      return { ...state, forecastData: action.payload };

    case SET_ERROR_MESSAGE:
      return { ...state, errorMessage: action.errorMessage };

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

export const getForecastDataByGeoCoordinates =
  (lat, lon) => async (dispatch) => {
    const response = await forecastAPI.byGeoCoordinates(lat, lon);
    if (response.data.cod === 200) {
      dispatch(setTodaysForecastData(response.data));
    } else {
      //toto validation of errors
      dispatch(setErrorMessage(response.data.cod));
    }
  };
export default forecastReducer;
