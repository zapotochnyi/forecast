import { forecastAPI, quotesAPI } from "../api/api";
import { setErrorMessage, setSearchIsActive } from "./appReducer";

const SET_WEEKLY_FORECAST_DATA = "SET_WEEKLY_FORECAST_DATA";
const SET_CURRENT_DAY = "SET_CURRENT_DAY";
const SET_CURRENT_TIME = "SET_CURRENT_TIME";
const SET_CURRENT_FORECAST_DATA = "SET_CURRENT_FORECAST_DATA";
const SET_TIME_MARKS = "SET_TIME_MARKS";
const SET_CITY = "SET_CITY";
const SET_RANDOM_QUOTE = "SET_RANDOM_QUOTE";

let initialState = {
  weeklyForecastData: null,
  currentForecastData: null,
  timeMarks: null,
  dayIndex: 0,
  timeIndex: 0,
  city: null,
  randomQuote: null,
};

const forecastReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEEKLY_FORECAST_DATA:
      return { ...state, weeklyForecastData: action.week };

    case SET_CURRENT_DAY:
      return {
        ...state,
        dayIndex: action.dayIndex,
      };

    case SET_TIME_MARKS:
      return {
        ...state,
        timeMarks: Object.assign(
          {},
          state.weeklyForecastData.map((day) =>
            day.data.map((time) => time.time)
          )[state.dayIndex]
        ),
      };

    case SET_CURRENT_TIME:
      return {
        ...state,
        timeIndex: action.timeIndex,
      };

    case SET_CURRENT_FORECAST_DATA:
      return {
        ...state,
        currentForecastData:
          state.weeklyForecastData[state.dayIndex].data[state.timeIndex],
      };

    case SET_CITY:
      return {
        ...state,
        city: action.city,
      };

    case SET_RANDOM_QUOTE:
      return { ...state, randomQuote: action.quote };

    default:
      return state;
  }
};

export const setWeeklyForecastData = (week) => ({
  type: SET_WEEKLY_FORECAST_DATA,
  week,
});
export const setCurrentDay = (dayIndex = 0) => ({
  type: SET_CURRENT_DAY,
  dayIndex,
});
export const setCurrentTime = (timeIndex = 0) => ({
  type: SET_CURRENT_TIME,
  timeIndex,
});
export const setCurrentForecastData = () => ({
  type: SET_CURRENT_FORECAST_DATA,
});
export const setTimeMarks = () => ({ type: SET_TIME_MARKS });
export const setCity = (city) => ({ type: SET_CITY, city });

export const setRandomQuote = (quote) => ({
  type: SET_RANDOM_QUOTE,
  quote,
});

const processForecastData = (forecastData) => {
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
        forecastData.filter((day) => findDay(day, "Monday"))
      )[0],
      data: createForecastArr(
        forecastData.filter((day) => findDay(day, "Monday"))
      ),
    },
    {
      day: "Tuesday",
      dt: createUnicodeDateArr(
        forecastData.filter((day) => findDay(day, "Tuesday"))
      )[0],
      data: createForecastArr(
        forecastData.filter((day) => findDay(day, "Tuesday"))
      ),
    },
    {
      day: "Wednesday",
      dt: createUnicodeDateArr(
        forecastData.filter((day) => findDay(day, "Wednesday"))
      )[0],
      data: createForecastArr(
        forecastData.filter((day) => findDay(day, "Wednesday"))
      ),
    },
    {
      day: "Thursday",
      dt: createUnicodeDateArr(
        forecastData.filter((day) => findDay(day, "Thursday"))
      )[0],
      data: createForecastArr(
        forecastData.filter((day) => findDay(day, "Thursday"))
      ),
    },
    {
      day: "Friday",
      dt: createUnicodeDateArr(
        forecastData.filter((day) => findDay(day, "Friday"))
      )[0],
      data: createForecastArr(
        forecastData.filter((day) => findDay(day, "Friday"))
      ),
    },
    {
      day: "Saturday",
      dt: createUnicodeDateArr(
        forecastData.filter((day) => findDay(day, "Saturday"))
      )[0],
      data: createForecastArr(
        forecastData.filter((day) => findDay(day, "Saturday"))
      ),
    },
    {
      day: "Sunday",
      dt: createUnicodeDateArr(
        forecastData.filter((day) => findDay(day, "Sunday"))
      )[0],
      data: createForecastArr(
        forecastData.filter((day) => findDay(day, "Sunday"))
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
  return filteredWeek;
};

export const getForecastDataByGeoCoordinates =
  (lat, lon) => async (dispatch) => {
    try {
      const response = await forecastAPI.forWeekByGeoCoordinates(lat, lon);
      if (response.data.cod === "200") {
        dispatch(setCity(response.data.city.name));
        dispatch(
          setWeeklyForecastData(processForecastData(response.data.list))
        );
        dispatch(setCurrentDayData(0));
      }
      return response;
    } catch (err) {
      dispatch(
        setErrorMessage({
          message:
            "Something went wrong. Perhaps, you did not allow access to the geolocation",
          err,
        })
      );
    }
  };

export const getForecastDataByCityName = (city) => async (dispatch) => {
  try {
    const response = await forecastAPI.forWeekByCityName(city);
    if (response.status === 200) {
      dispatch(setCity(response.data.city.name));
      dispatch(setWeeklyForecastData(processForecastData(response.data.list)));
      dispatch(setCurrentDayData(0));
      dispatch(setErrorMessage(null));
      dispatch(setSearchIsActive(false));
    }
    return response;
  } catch (err) {
    dispatch(setErrorMessage({ message: "Location not found", err }));
  }
};

export const setCurrentDayData = (dayIndex) => (dispatch) => {
  dispatch(setCurrentDay(dayIndex));
  dispatch(setCurrentTime(0));
  dispatch(setTimeMarks());
  dispatch(setCurrentForecastData());
  dispatch(getRandomQuote());
};

export const setCurrentTimeData = (timeIndex) => (dispatch) => {
  dispatch(setCurrentTime(timeIndex));
  dispatch(setCurrentForecastData());
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
