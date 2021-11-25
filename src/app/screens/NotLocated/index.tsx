import React from "react";
import { getAssets } from "app/static/Icons";
import { isEmpty } from "app/utils";
import { NotLocatedTypes } from "./types";

const NotLoacted = (props: NotLocatedTypes) => {
  const { setCountry } = props || {};
  const countryInputRef = React.useRef<HTMLInputElement>(null);
  const [errMessage, setErrMessage] = React.useState<string | null>(
    "Failed to locate your city. Please try adding city manually."
  );

  const handleSearchWeather = () => {
    const { value } = countryInputRef?.current || {};
    if (isEmpty(value)) setErrMessage("Please enter a country name");
    else setCountry(value);
  };

  return (
    <div className="intro-collection">
      <input
        ref={countryInputRef}
        type="text"
        className="country"
        autoFocus
        placeholder="Your city Name"
      />
      <div className="submit-button">
        <button className="submit_country" onClick={handleSearchWeather}>
          <img src={getAssets("Arrow_left")} alt="icon" width="20px" />
        </button>
      </div>
      <p className="err-message">{errMessage}</p>
    </div>
  );
};

export default NotLoacted;
