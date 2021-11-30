import React from "react";
import { getAssets } from "app/utils/Icons";

import NotLoacted from "../NotLocated";
import Home from "./Home";
import { IHome } from "app/types/IScreens/IHome";

const Landing = (props: IHome.IProps) => {
  const { userLocation } = props || {};
  const [location, setLocation] = React.useState<string | undefined>(
    userLocation
  );
  return (
    <>
      <div className="main-container">
        <div className={`intro-container ${location?.length ? "home" : ""}`}>
          {location?.length ? (
            <Home userLocation={location} />
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
