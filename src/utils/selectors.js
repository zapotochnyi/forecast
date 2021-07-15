export const getForecastData = (state) => {
  return state.forecast.forecastData;
};

export const getRandomQuoteData = (state) => {
  return state.forecast.randomQuote;
};

export const getInitialized = (state) => {
  return state.app.initialized;
};

export const getCityName = (state) => {
  return state.forecast.forecastData.name;
};

export const getWeeklyForecastData = (state) => {
  return state.forecast.weeklyForecastData;
};
