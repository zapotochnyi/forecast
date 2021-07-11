import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

const apiKey = "6988b33ac0cac63cee28223a1e642aee";

export const forecastAPI = {
  byGeoCoordinates(lat, lon) {
    return instance.get(
      `forecast?lat=${lat}&units=metric&lang=ua&lon=${lon}&appid=${apiKey}`
    );
  },

  byCityName(city) {
    return instance.get(
      `forecast?q=${city}&units=metric&lang=ua&appid=${apiKey}`
    );
  },
};
