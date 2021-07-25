import React from "react";
import s from "./Search.module.css";

const Search = ({ getForecastDataByCityName, errorMessage }) => {
  //todo flux for input
  const handleSubmit = (e) => {
    e.preventDefault();
    let city = e.target.cityName.value.trim();
    if (city) {
      getForecastDataByCityName(city);
      e.target.cityName.value = "";
    }
  };

  return (
    <div className={s.search_wrapper}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          name="cityName"
          type="text"
          placeholder="Enter location..."
        />
        <button className={s.button} type="submit">
          Search
        </button>
      </form>
      {errorMessage && <div>{errorMessage.message}</div>}
    </div>
  );
};

export default Search;
