import React from "react";
import { getAssets } from "app/static/Icons";
import { getWeatherApi } from "app/api/getWeatherApi";
import { HomeProps } from "./types";

const Home = (props: HomeProps) => {
  const { userCity } = props || {};
  const [weather, setWeather] = React.useState<any>({});

  const getWeather = (city: string) => getWeatherApi(city, "metric");

  React.useEffect(() => {
    getWeather(userCity).then((res) => {
      setWeather(res);
    });
  }, [userCity]);

  return (
    <div className="weather-container">
      <div className="input-country">
        <img src={getAssets("search_icon")} alt="icon" width="20px" />
        <input
          type="text"
          // onChange={this.handleInputCity}
          // onKeyDown={this.handleKeyDown}
          placeholder="your City"
        />
      </div>
      <div className="big-details">
        <input type="radio" name="slider" id="slide1" defaultChecked />
        <input type="radio" name="slider" id="slide2" />
        <input type="radio" name="slider" id="slide3" />
        <div id="slides">
          <div id="overflow">
            <div className="inner">
              <div className="slide slide_1">
                <div className="slide-content">
                  <h1>
                    {weather?.main?.temp}
                    <span className="degree">°</span>c
                  </h1>
                  <h4>{weather?.weather[0]?.description}</h4>
                  <h5 className="big-details-location">
                    <img
                      src={getAssets("location_icon")}
                      alt="icon"
                      width="15px"
                    />{" "}
                    {weather?.name} , {weather?.sys?.country}
                  </h5>
                </div>
              </div>
              <div className="slide slide_2">
                <div className="slide-content">
                  <h1>{`${weather?.main?.humidity}%`}</h1>
                  <h4>humidity</h4>
                </div>
              </div>
              <div className="slide slide_3">
                <div className="slide-content">
                  <h1>{`${weather?.wind?.speed} km/h`}</h1>
                  <h4>Wind speed</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="controls">
          <label htmlFor="slide1"></label>
          <label htmlFor="slide2"></label>
          <label htmlFor="slide3"></label>
          <label htmlFor="slide4"></label>
        </div>
        <div id="bullets">
          <label htmlFor="slide1"></label>
          <label htmlFor="slide2"></label>
          <label htmlFor="slide3"></label>
        </div>
      </div>
      <div className="weather-info">
        <div className="details">
          <img src={"Time_icon"} alt="icon" />
          {/* <p>{getCurrentTime()}</p> */}
        </div>
        <div className="details">
          <img src={"Day_icon"} alt="icon" />
          {/* <p>{getCurrentDay()}</p> */}
        </div>
        <div className="details">
          <img src={"Temp_icon"} alt="icon" />
          {/* <p>{`${weather.temperature}°c`}</p> */}
        </div>
        <div className="details">
          <img src={"Humidity_icon"} alt="icon" />
          {/* <p>{`${weather.humidity}%`}</p> */}
        </div>
        <div className="details">
          <img src={"Wind_icon"} alt="icon" />
          {/* <p>{`${weather.wind} km/h`}</p> */}
        </div>
        <div className="details">
          <img src={"News_icon"} alt="icon" />
          <p>weather news</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
