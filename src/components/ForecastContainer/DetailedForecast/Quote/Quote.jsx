import React from "react";
import quoteIcon from "../../../../assets/detailed-forecast/left-quote.svg";

import s from "./Quote.module.css";

const Quote = ({ randomQuote }) => {
  return (
    <div className={s.quotes_wrap}>
      <img src={quoteIcon} alt="" />
      <div>{randomQuote.text}</div>
      <div>{randomQuote.author}</div>
    </div>
  );
};

export default Quote;
