import React from "react";
import "./DayItem.css";

const DayItem = ({
  day,
  date,
  index,
  setCurrentDayData,
  setBurgerIsActive,
  activeClass,
  setActiveClass,
  setOnMouseClass,
  dayItemClasses,
}) => {
  return (
    <div
      onClick={() => {
        setCurrentDayData(index);
        setActiveClass(index);
        setBurgerIsActive(false);
      }}
      onMouseOver={() => setOnMouseClass(index)}
      onMouseOut={() => setOnMouseClass(null)}
      className={dayItemClasses(index, activeClass)}
    >
      <div className={"day"}>
        <div>{day}</div>
        <div>{date}</div>
      </div>
    </div>
  );
};

export default DayItem;
