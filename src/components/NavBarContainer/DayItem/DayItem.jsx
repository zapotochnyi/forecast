import React from "react";
import "./DayItem.css";

const DayItem = ({
  day,
  date,
  index,
  setCurrentDayData,
  activeClass,
  setActiveClass,
  dayItemClasses,
  getRandomQuote,
}) => {
  const handleClick = (e) => {
    setCurrentDayData(index);
    setActiveClass(index);
    getRandomQuote();
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
