import React from "react";
import loader from "../assets/gifs/loader.gif";

const Loader = () => {
  return (
    <div className="h-screen w-screen grid place-items-center bg-[#33495F]">
      <img src={loader} alt="weather_forecast_loading" className="w-80" />
    </div>
  );
};

export default Loader;
