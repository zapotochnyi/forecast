import {
  getForecastDataByGeoCoordinates,
  getRandomQuote,
} from "./forecastReducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";
const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";
const BURGER_IS_ACTIVE = "BURGER_IS_ACTIVE";
const SEARCH_IS_ACTIVE = "SEARCH_IS_ACTIVE";

let initialState = {
  initialized: false,
  errorMessage: null,
  burgerIsActive: false,
  searchIsActive: false,
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

    case BURGER_IS_ACTIVE:
      return {
        ...state,
        burgerIsActive: action.isActive,
      };

    case SEARCH_IS_ACTIVE:
      return {
        ...state,
        searchIsActive: action.isActiveSearch,
      };

    default:
      return state;
  }
};

export const initializedSuccessful = () => ({ type: INITIALIZED_SUCCESS });
export const setErrorMessage = (errorMessage) => ({
  type: SET_ERROR_MESSAGE,
  errorMessage,
});
export const setBurgerIsActive = (isActive) => ({
  type: BURGER_IS_ACTIVE,
  isActive,
});
export const setSearchIsActive = (isActiveSearch) => ({
  type: SEARCH_IS_ACTIVE,
  isActiveSearch,
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
