import React from "react";
import { connect } from "react-redux";
import { getCityName } from "../utils/selectors";
import s from "./HeaderContainer.module.css";

const HeaderContainer = ({ cityName }) => {
  return (
    <div className={s.header_wrap}>
      <div className={s.city_name}>
        <span>{cityName}</span>
        <span>Feb 03, Monday</span>
      </div>
      <div>Search</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cityName: getCityName(state),
  };
};

export default connect(mapStateToProps, {})(HeaderContainer);
