import React from "react";
import './App.css';
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ForecastContainer from "./components/ForecastContainer/ForecastContainer";

function App() {
  return (
    <div className="app-wrapper" >
      <Header />
      <NavBar />
      <ForecastContainer />
    </div>
  );
}

export default App;
