import React, { useState } from "react";
import s from "./Search.module.css";
import loading from "../../../assets/loading.svg";
import classNames from "classnames";
import searchIcon from "../../../assets/search-icon.svg";

const Search = ({
  getForecastDataByCityName,
  errorMessage,
  searchIsActive,
  setSearchIsActive,
}) => {
  let [isLoader, setIsLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let city = e.target.cityName.value.trim();
    setIsLoader(true);
    if (city) {
      getForecastDataByCityName(city).then(() => {
        setIsLoader(false);
        if (errorMessage === null) {
          setSearchIsActive();
        }
      });
      e.target.cityName.value = "";
    }
  };

  return (
    <div
      className={classNames(s.search_wrapper, {
        [s.active]: searchIsActive,
      })}
    >
      {isLoader && <img className={s.loader} src={loading} alt="" />}
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
          <img src={searchIcon} alt="" />
        </button>
      </form>
    </div>
  );
};

export default Search;
