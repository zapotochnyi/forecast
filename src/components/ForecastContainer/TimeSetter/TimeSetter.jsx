import React from "react";
import s from "./TimeSetter.module.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const TimeSetter = ({ setCurrentTimeData, timeMarks }) => {
  //todo flux for slider

  const onTimeChange = (value) => {
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
        defaultValue={0}
      />
    </div>
  );
};

export default TimeSetter;
