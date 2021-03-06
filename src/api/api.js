import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

const apiKey = "6988b33ac0cac63cee28223a1e642aee";

export const forecastAPI = {
  byGeoCoordinates(lat, lon) {
    return instance.get(
      `weather?lat=${lat}&lon=${lon}&units=metric&lang=en&appid=${apiKey}`
    );
  },

  byCityName(city) {
    return instance.get(
      `weather?q=${city}&units=metric&lang=en&appid=${apiKey}`
    );
  },

  forWeekByGeoCoordinates(lat, lon) {
    return instance.get(`forecast?lat=${lat}&lon=${lon}&lang=en&units=metric&appid=${apiKey}`);
  },

  forWeekByCityName(city) {
    return instance.get(`forecast?q=${city}&lang=en&units=metric&appid=${apiKey}`);
  },
};

const instanceQuotes = axios.create({
  baseURL: "https://type.fit/api/quotes",
});

export const quotesAPI = {
  getQuotes() {
    return instanceQuotes.get();
  },
};
