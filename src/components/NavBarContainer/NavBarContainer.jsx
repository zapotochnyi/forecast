import React, { useState } from "react";
import { connect } from "react-redux";
import s from "./NavBarContainer.module.css";
import {
  getBurgerIsActive,
  getWeeklyForecastData,
} from "../../utils/selectors.js";
import DayItem from "./DayItem/DayItem";
import { setCurrentDayData } from "../../redux/forecastReducer";
import { setBurgerIsActive } from "../../redux/appReducer";
import classNames from "classnames";
import { useEffect } from "react";

const NavBarContainer = ({
  week,
  setCurrentDayData,
  getRandomQuote,
  burgerIsActive,
  setBurgerIsActive,
}) => {
  let [activeClass, setActiveClass] = useState(0);
  let [onMouseClass, setOnMouseClass] = useState(null);

  useEffect(() => {
    setActiveClass(0);
  }, [week]);

  let dayItemClasses = (index, activeClass) => {
    return classNames({
      day_item: true,
      on_mouse: index === onMouseClass,
      active: index === activeClass,
      not_active_support_one:
        !(index === activeClass) && index === activeClass - 1,
      not_active_support_two:
        !(index === activeClass) && index === activeClass + 1,
      not_active: !(index === activeClass),
    });
  };
  return (
    <div
      className={classNames(s.navbar_wrap, {
        [s.active]: burgerIsActive,
      })}
    >
      {week.map((dayItem, index) => {
        if (!(dayItem.data.length >= 1)) return null;
        return (
          <DayItem
            setCurrentDayData={setCurrentDayData}
            activeClass={activeClass}
            setActiveClass={setActiveClass}
            setOnMouseClass={setOnMouseClass}
            dayItemClasses={dayItemClasses}
            getRandomQuote={getRandomQuote}
            setBurgerIsActive={setBurgerIsActive}
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
    burgerIsActive: getBurgerIsActive(state),
  };
};

export default connect(mapStateToProps, {
  setCurrentDayData,
  setBurgerIsActive,
})(NavBarContainer);
