import {
  getForecastDataByGeoCoordinates,
  getRandomQuote,
} from "./forecastReducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";
const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";

let initialState = {
  initialized: false,
  errorMessage: null,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };

    case SET_ERROR_MESSAGE:
      return { ...state, errorMessage: action.errorMessage };

    default:
      return state;
  }
};

export const initializedSuccessful = () => ({ type: INITIALIZED_SUCCESS });
export const setErrorMessage = (errorMessage) => ({
  type: SET_ERROR_MESSAGE,
  errorMessage,
});

export const initializeApp = (latitude, longitude) => (dispatch) => {
  let forecastDataPromise = dispatch(
    getForecastDataByGeoCoordinates(latitude, longitude)
  );
  let randomQuotePromise = dispatch(getRandomQuote());

  Promise.all([forecastDataPromise, randomQuotePromise]).then(() => {
    dispatch(initializedSuccessful());
  });
};

export default appReducer;
