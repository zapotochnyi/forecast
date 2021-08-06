import React, { useEffect } from "react";
import loader from "../../assets/loading.svg";
import s from "./Loading.module.css";

const Loader = ({ errorMessage, setErrorMessage }) => {
  useEffect(() => {
    setTimeout(
      () =>
        setErrorMessage(
          "Something went wrong. Perhaps, you did not allow access to the geolocation"
        ),
      15000
    );
  });

  return (
    <div className={s.loader_wrap}>
      {errorMessage ? (
        <div className={s.error}>{errorMessage}</div>
      ) : (
        <img src={loader} alt="loader" />
      )}
    </div>
  );
};

export default Loader;
