import React from "react";
import s from "./TimeSetter.module.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";

const TimeSetter = ({ setCurrentTimeData, timeMarks, timeIndex }) => {
  let [timeIndexLocal, setTimeIndexLocal] = useState(timeIndex);

  const onTimeChange = (value) => {
    setTimeIndexLocal(value);
    setCurrentTimeData(value);
  };

  return (
    <div className={s.time_setter_wrap}>
      <Slider
        onChange={onTimeChange}
        min={0}
        max={Object.keys(timeMarks).length - 1}
        marks={timeMarks}
        step={null}
        value={timeIndexLocal}
      />
    </div>
  );
};

export default TimeSetter;
