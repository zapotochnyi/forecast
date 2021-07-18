export const getCurrentForecastData = (state) => {
  return state.forecast.currentForecastData;
};

export const getRandomQuoteData = (state) => {
  return state.forecast.randomQuote;
};

export const getInitialized = (state) => {
  return state.app.initialized;
};

export const getCityName = (state) => {
  return state.forecast.city;
};

export const getDate = (state) => {
  return state.forecast.currentForecastData.date;
};

export const getWeeklyForecastData = (state) => {
  return state.forecast.weeklyForecastData;
};

export const getTimeIndex = (state) => {
  return state.forecast.timeIndex;
};
