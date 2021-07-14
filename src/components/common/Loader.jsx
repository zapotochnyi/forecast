import React from "react";
import loader from "../../assets/loading.svg";
import s from "./Loading.module.css"

const Loader = () => {
  return (
    <div className={s.loader_wrap} >
      <img src={loader} alt="loader" />
    </div>
  );
};

export default Loader;
