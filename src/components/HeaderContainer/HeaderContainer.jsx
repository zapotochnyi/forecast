import React, { useState } from "react";
import { connect } from "react-redux";
import { getCityName, getDate, getBurgerIsActive } from "../../utils/selectors";
import s from "./HeaderContainer.module.css";
import Search from "./Search/Search";
import { getForecastDataByCityName } from "../../redux/forecastReducer";
import { setBurgerIsActive } from "../../redux/appReducer";
import classNames from "classnames";
import searchIcon from "../../assets/search-icon.svg";

const HeaderContainer = ({
  cityName,
  date,
  getForecastDataByCityName,
  errorMessage,
  burgerIsActive,
  setBurgerIsActive,
}) => {
  let [searchIsActive, setSearchIsActive] = useState(false);

  let toggleBurger = () => {
    if (!burgerIsActive) {
      setBurgerIsActive(true);
    }
    if (burgerIsActive) {
      setBurgerIsActive(false);
    }
  };

  let toggleSearch = () => {
    if (!searchIsActive) {
      setSearchIsActive(true);
    }
    if (searchIsActive) {
      setSearchIsActive(false);
    }
  };

  return (
    <div className={s.header_wrap}>
      <div
        onClick={toggleBurger}
        className={classNames(s.burger, {
          [s.active_burger]: burgerIsActive,
        })}
      >
        <span></span>
      </div>

      <div
        className={classNames(s.city_name, {
          [s.city_hidden]: searchIsActive,
        })}
      >
        <span>{cityName}</span>
        <span>{date}</span>
      </div>

      <div
        onClick={toggleSearch}
        className={classNames(s.search_icon, {
          [s.icon_hidden]: searchIsActive,
        })}
      >
        <img src={searchIcon} alt="" />
      </div>

      <Search
        getForecastDataByCityName={getForecastDataByCityName}
        errorMessage={errorMessage}
        searchIsActive={searchIsActive}
        setSearchIsActive={setSearchIsActive}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cityName: getCityName(state),
    date: getDate(state),
    burgerIsActive: getBurgerIsActive(state),
  };
};

export default connect(mapStateToProps, {
  getForecastDataByCityName,
  setBurgerIsActive,
})(HeaderContainer);
