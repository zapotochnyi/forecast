import React from "react";
import s from "./TimeSetter.module.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const TimeSetter = ({ setCurrentTimeData, timeMarks }) => {
  const onTimeChange = (value) => {
    setCurrentTimeData(value);
  };

  return (
    <div className={s.time_setter_wrap}>
      {/* {Object.keys(timeMarks).length > 1 && ( */}
      <Slider
        onChange={onTimeChange}
        min={0}
        max={7}
        marks={timeMarks}
        step={null}
        defaultValue={0}
      />
      {/* )} */}
    </div>
  );
};

export default TimeSetter;
