import React, { useState } from "react";
import s from "./Search.module.css";
import loading from "../../../assets/loading.svg";

const Search = ({ getForecastDataByCityName, errorMessage }) => {
  let [isLoader, setIsLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let city = e.target.cityName.value.trim();
    setIsLoader(true);
    if (city) {
      getForecastDataByCityName(city).then(() => {
        setIsLoader(false);
      });
      e.target.cityName.value = "";
    }
  };

  return (
    <div className={s.search_wrapper}>
      {isLoader && (
          <img className={s.loader} src={loading} alt="" />
      )}
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          name="cityName"
          type="search"
          placeholder={
            !errorMessage ? "Enter location..." : errorMessage.message
          }
        />
        <button className={s.button} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
