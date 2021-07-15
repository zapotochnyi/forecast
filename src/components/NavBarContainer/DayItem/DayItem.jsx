import React from "react";

const DayItem = ({ day, date }) => {
  return (
    <div>
      <div>{day}</div>
      <div>{date}</div>
    </div>
  );
};

export default DayItem;
