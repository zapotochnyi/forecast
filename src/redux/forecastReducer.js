import { forecastAPI, quotesAPI } from "../api/api";

const SET_FORECAST_DATA = "SET_FORECAST_DATA";
const SET_WEEKLY_FORECAST_DATA = "SET_WEEKLY_FORECAST_DATA";
const SET_CURRENT_FORECAST_DATA = "SET_CURRENT_FORECAST_DATA";
const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";
const SET_RANDOM_QUOTE = "SET_RANDOM_QUOTE";

let initialState = {
  forecastData: null,
  currentForecastData: null,
  weeklyForecastData: null,
  errorMessage: null,
  randomQuote: null,
};

const forecastReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FORECAST_DATA:
      return { ...state, forecastData: action.payload };

    case SET_WEEKLY_FORECAST_DATA:
      return { ...state, weeklyForecastData: action.week };

    case SET_CURRENT_FORECAST_DATA:
      return {
        ...state,
        currentForecastData: state.weeklyForecastData[action.index].data[0],
      };

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
export const setWeeklyForecastData = (week) => ({
  type: SET_WEEKLY_FORECAST_DATA,
  week,
});
export const setCurrentForecastData = (index = 0) => ({
  type: SET_CURRENT_FORECAST_DATA,
  index,
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
      let dataArr = {
        name: response.data.name,
        temp: response.data.main.temp,
        feels_like: response.data.main.feels_like,
        weather: response.data.weather[0],
        pressure: response.data.main.pressure,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
      };

      dispatch(setTodaysForecastData(dataArr));
    } else {
      //toto validation of errors
      dispatch(setErrorMessage(response.data.cod + "Something was wrong"));
    }

    return response;
  };

export const getWeeklyForecastData = (lat, lon) => async (dispatch) => {
  const response = await forecastAPI.forWeekByGeoCoordinates(lat, lon);

  if (response.data.cod === "200") {
    const findDay = (day, dayName) => {
      let date = new Date(day.dt_txt).toLocaleString("en-GB", {
        weekday: "long",
      });
      return date === dayName;
    };

    const createForecastArr = (arr) => {
      return arr.map((elem) => {
        let date = new Date(elem.dt_txt).toLocaleString("en-GB", {
          month: "long",
          day: "numeric",
        });
        let time = new Date(elem.dt_txt).toLocaleString("en-GB", {
          hour: "numeric",
          minute: "numeric",
        });
        return {
          date,
          time,
          temp: elem.main.temp,
          feels_like: elem.main.feels_like,
          weather: elem.weather[0],
          pressure: elem.main.pressure,
          humidity: elem.main.humidity,
          wind: elem.wind.speed,
        };
      });
    };

    const createUnicodeDateArr = (arr) => {
      return arr.map((elem) => {
        return elem.dt;
      });
    };

    let week = [
      {
        day: "Monday",
        dt: createUnicodeDateArr(
          response.data.list.filter((day) => findDay(day, "Monday"))
        )[0],
        data: createForecastArr(
          response.data.list.filter((day) => findDay(day, "Monday"))
        ),
      },
      {
        day: "Tuesday",
        dt: createUnicodeDateArr(
          response.data.list.filter((day) => findDay(day, "Tuesday"))
        )[0],
        data: createForecastArr(
          response.data.list.filter((day) => findDay(day, "Tuesday"))
        ),
      },
      {
        day: "Wednesday",
        dt: createUnicodeDateArr(
          response.data.list.filter((day) => findDay(day, "Wednesday"))
        )[0],
        data: createForecastArr(
          response.data.list.filter((day) => findDay(day, "Wednesday"))
        ),
      },
      {
        day: "Thursday",
        dt: createUnicodeDateArr(
          response.data.list.filter((day) => findDay(day, "Thursday"))
        )[0],
        data: createForecastArr(
          response.data.list.filter((day) => findDay(day, "Thursday"))
        ),
      },
      {
        day: "Friday",
        dt: createUnicodeDateArr(
          response.data.list.filter((day) => findDay(day, "Friday"))
        )[0],
        data: createForecastArr(
          response.data.list.filter((day) => findDay(day, "Friday"))
        ),
      },
      {
        day: "Saturday",
        dt: createUnicodeDateArr(
          response.data.list.filter((day) => findDay(day, "Saturday"))
        )[0],
        data: createForecastArr(
          response.data.list.filter((day) => findDay(day, "Saturday"))
        ),
      },
      {
        day: "Sunday",
        dt: createUnicodeDateArr(
          response.data.list.filter((day) => findDay(day, "Sunday"))
        )[0],
        data: createForecastArr(
          response.data.list.filter((day) => findDay(day, "Sunday"))
        ),
      },
    ];

    week
      .sort((a, b) => {
        if (a.dt < b.dt) {
          return 1;
        }
        if (a.dt > b.dt) {
          return -1;
        }
        return 0;
      })
      .reverse();

    let filteredWeek = week.filter((day) => !(day.data.length === 0));

    dispatch(setWeeklyForecastData(filteredWeek));
    dispatch(setCurrentForecastData(0));
  } else {
    dispatch(setErrorMessage(response.data.cod + "Something was wrong"));
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
