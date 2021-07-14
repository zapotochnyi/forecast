export const getForecastData = (state) => {
  return state.forecast.forecastData;
};

export const getRandomQuoteData = (state) => {
  return state.forecast.randomQuote;
};

export const getInitialized = (state) => {
  return state.app.initialized;
};
