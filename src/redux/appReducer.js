import {
  getForecastDataByGeoCoordinates,
  getRandomQuote,
  getWeeklyForecastData,
} from "./forecastReducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = (latitude, longitude) => (dispatch) => {
  let forecastDataPromise = dispatch(
    getForecastDataByGeoCoordinates(latitude, longitude)
  );
  let weeklyForecastDataPromise = dispatch(
    getWeeklyForecastData(latitude, longitude)
  );
  let randomQuotePromise = dispatch(getRandomQuote());

  Promise.all([forecastDataPromise, weeklyForecastDataPromise, randomQuotePromise]).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
