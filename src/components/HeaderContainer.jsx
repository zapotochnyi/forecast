import React from "react";
import { connect } from "react-redux";
import { getCityName, getDate } from "../utils/selectors";
import s from "./HeaderContainer.module.css";

const HeaderContainer = ({ cityName, date }) => {
  return (
    <div className={s.header_wrap}>
      <div className={s.city_name}>
        <span>{cityName}</span>
        <span>{date}</span>
      </div>
      <div>Search</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cityName: getCityName(state),
    date: getDate(state),
  };
};

export default connect(mapStateToProps, {})(HeaderContainer);
