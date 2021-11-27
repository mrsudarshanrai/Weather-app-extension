import React from "react";
import { getAssets } from "app/static/Icons";
import { isEmpty } from "app/utils";
import { INotLoacted } from "app/types/IScreens/INotLoacted";

const NotLoacted = (props: INotLoacted.IProps) => {
  const { setLocation } = props || {};
  const locationInputRef = React.useRef<HTMLInputElement>(null);
  const [errMessage, setErrMessage] = React.useState<string | null>(
    "Failed to locate your location. Please try adding city manually."
  );

  const events: INotLoacted.IEvents = {
    searchWeather: () => {
      const { value } = locationInputRef?.current || {};
      if (isEmpty(value)) setErrMessage("Please enter a location.");
      else setLocation(value);
    }
  }

  return (
    <div className="not_located_container">
      <input
        ref={locationInputRef}
        type="text"
        autoFocus
        placeholder="Your Location"
      />
      <div className="city_submit_button">
        <button onClick={() => events.searchWeather()}>
          <img src={getAssets("Arrow_left")} alt="submit" width="20px" />
        </button>
      </div>
      <p className="err-message">{errMessage}</p>
    </div>
  );
};

export default NotLoacted;
