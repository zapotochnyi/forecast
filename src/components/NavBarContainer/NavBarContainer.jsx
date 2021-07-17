import React, { useState } from "react";
import { connect } from "react-redux";
import s from "./NavBarContainer.module.css";
import { getWeeklyForecastData } from "../../utils/selectors.js";
import DayItem from "./DayItem/DayItem";
import { setCurrentForecastData } from "../../redux/forecastReducer";
import { useEffect } from "react";
import classNames from "classnames";

const NavBarContainer = ({ week, setCurrentForecastData }) => {
  let [activeClass, setActiveClass] = useState(0);

  let dayItemClasses = (index, activeClass) => {
    return classNames({
      day_item: true,
      active: index === activeClass,
      not_active_support_one:
        !(index === activeClass) && index === activeClass - 1,
      not_active_support_two:
        !(index === activeClass) && index === activeClass + 1,
      not_active: !(index === activeClass),
    });
  };

  return (
    <div className={s.navbar_wrap}>
      {week.map((dayItem, index) => {
        if (!(dayItem.data.length >= 1)) return null;
        return (
          <DayItem
            setCurrentForecastData={setCurrentForecastData}
            activeClass={activeClass}
            setActiveClass={setActiveClass}
            dayItemClasses={dayItemClasses}
            key={dayItem.dt}
            index={index}
            day={dayItem.day}
            date={dayItem.data[0].date}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    week: getWeeklyForecastData(state),
  };
};

export default connect(mapStateToProps, { setCurrentForecastData })(
  NavBarContainer
);
