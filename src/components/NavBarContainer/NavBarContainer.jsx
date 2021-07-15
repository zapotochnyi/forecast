import React from "react";
import { connect } from "react-redux";
import s from "./NavBarContainer.module.css";
import { getWeeklyForecastData } from "../../utils/selectors.js";
import DayItem from "./DayItem/DayItem";

const NavBarContainer = ({ week }) => {
  return (
    <div className={s.navbar_wrap}>
      {week.map((dayItem) => {
        if (
          !(dayItem.data.length > 0) ||
          dayItem.day ===
            new Date().toLocaleString("en-GB", { weekday: "long" })
        )
          return null;
        return <DayItem day={dayItem.day} date={dayItem.data[0].date} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    week: getWeeklyForecastData(state),
  };
};

export default connect(mapStateToProps, {})(NavBarContainer);
