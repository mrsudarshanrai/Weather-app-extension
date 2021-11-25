import React from "react";
import { getAssets } from "app/static/Icons";

import NotLoacted from "../NotLocated";
import Home from "./Home";
import { HomeProps } from "./types";

const Landing = (props: HomeProps) => {
  const { userCity } = props || {};
  const [city, setCity] = React.useState<string | undefined>(userCity);
  return (
    <>
      <div className="main-container">
        <div className={`intro-container ${city?.length ? "home" : ""}`}>
          {city?.length ? (
            <Home userCity={city} />
          ) : (
            <>
              <img
                className="intro-img"
                src={getAssets("logo")}
                alt="weather app logo"
              />
              <NotLoacted setCountry={setCity} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Landing;
