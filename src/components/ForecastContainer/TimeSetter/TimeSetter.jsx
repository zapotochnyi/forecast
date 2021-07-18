import React from "react";
import s from "./TimeSetter.module.css";
import { useState } from "react";
import { useEffect } from "react";

const TimeSetter = ({ timeIndex, setCurrentTimeData }) => {
  let [index, setIndex] = useState(timeIndex);

  useEffect(() => {
    setIndex(timeIndex);
  }, [timeIndex]);

  const onTimeChange = (e) => {
    setIndex(e.currentTarget.value);
    setCurrentTimeData(index)
  };

  return (
    <div className={s.time_setter_wrap}>
      <div>
        <input
          onChange={onTimeChange}
          type="range"
          min="0"
          max="7"
          step='1'
          value={index}
        />
      </div>
      <div className={s.time}>
        <div>00:00</div>
        <div>03:00</div>
        <div>06:00</div>
        <div>09:00</div>
        <div>12:00</div>
        <div>15:00</div>
        <div>18:00</div>
        <div>21:00</div>
      </div>
    </div>
  );
};

export default TimeSetter;
