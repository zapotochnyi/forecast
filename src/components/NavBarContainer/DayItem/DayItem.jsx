import React from "react";
import "./DayItem.css";

const DayItem = ({
  day,
  date,
  index,
  setCurrentForecastData,
  activeClass,
  setActiveClass,
  dayItemClasses,
}) => {
  const handleClick = (e) => {
    setCurrentForecastData(index);
    setActiveClass(index);
  };

  return (
    <div onClick={handleClick} className={dayItemClasses(index, activeClass)}>
      <div className={"day"}>
        <div>{day}</div>
        <div>{date}</div>
      </div>
    </div>
  );
};

export default DayItem;
