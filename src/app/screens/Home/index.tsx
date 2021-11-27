import React from "react";
import { getAssets } from "app/static/Icons";

import NotLoacted from "../NotLocated";
import Home from "./Home";
import { HomeProps } from "./types";

const Landing = (props: HomeProps) => {
  const { userCity } = props || {};
  const [location, setLocation] = React.useState<string | undefined>(userCity);
  return (
    <>
      <div className="main-container">
        <div className={`intro-container ${location?.length ? "home" : ""}`}>
          {location?.length ? (
            <Home userCity={location} />
          ) : (
            <>
              <img
                className="intro-img"
                src={getAssets("logo")}
                alt="weather app logo"
              />
              <NotLoacted setLocation={setLocation} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Landing;
