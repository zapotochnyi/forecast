import React from "react";
import { connect } from "react-redux";
import { getCityName, getDate } from "../../utils/selectors";
import s from "./HeaderContainer.module.css";
import Search from "./Search/Search";
import { getForecastDataByCityName } from "../../redux/forecastReducer";

const HeaderContainer = ({
  cityName,
  date,
  getForecastDataByCityName,
  errorMessage,
}) => {
  return (
    <div className={s.header_wrap}>
      <div className={s.city_name}>
        <span>{cityName}</span>
        <span>{date}</span>
      </div>

      <Search
        getForecastDataByCityName={getForecastDataByCityName}
        errorMessage={errorMessage}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cityName: getCityName(state),
    date: getDate(state),
  };
};

export default connect(mapStateToProps, {
  getForecastDataByCityName,
})(HeaderContainer);
