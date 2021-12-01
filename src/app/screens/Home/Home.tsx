import React from "react";
import { getAssets } from "app/utils/Icons";
import { getWeatherApi } from "app/api/getWeatherApi";
import { getCurrentDay, getCurrentTime } from "app/utils";
import { IHome } from "app/types/IScreens/IHome";

const Home = (props: IHome.IProps) => {
  const { userLocation } = props || {};
  const [location, setLocation] = React.useState<string>("");
  const [metric, setMetric] = React.useState<string>("metric");
  const [weather, setWeather] = React.useState<IHome.IWeather>({
    weather: [],
    sys: { sunrise: 0, sunset: 0 },
  });

  const getWeather = (location: string, metric: string) =>
    getWeatherApi(location, metric);

  React.useEffect(() => {
    getWeather(location, metric).then((res: IHome.IWeather) => {
      setWeather(res);
    });
  }, [location, metric]);

  React.useEffect(() => {
    if (userLocation) {
      setLocation(userLocation);
    }
    setMetric(localStorage.getItem("metric") || "metric");
  }, [userLocation]);
  const renderData: IHome.IRender_Data[] = [
    {
      title: `Current time is ${getCurrentTime()}`,
      icon: "time_icon",
      value: getCurrentTime(),
    },
    {
      title: `Todaty is ${getCurrentDay()}`,
      icon: "day_icon",
      value: getCurrentDay(),
    },
    {
      title: "Humidity",
      icon: "humidity_icon",
      value: weather?.main?.humidity + "%",
    },
    {
      title: "Wind KM/H",
      icon: "wind_icon",
      value: weather?.wind?.speed + `${metric === "metric" ? " km/h" : " mph"}`,
    },
    {
      title: `Sunrise at ${new Date(weather?.sys?.sunrise * 1000)}`,
      icon: "sunrise_icon",
      value: new Date(weather?.sys?.sunrise * 1000).toLocaleTimeString(),
    },
    {
      title: `Sunset at ${new Date(weather?.sys?.sunset * 1000)}`,
      icon: "sunset_icon",
      value: new Date(weather?.sys?.sunset * 1000).toLocaleTimeString(),
    },
  ];

  const events: IHome.IEvents = {
    onLocationChange: (event) => {
      if (event.key === "Enter") setLocation(event?.currentTarget?.value);
    },
    onChangeMetric: (metric) => {
      setMetric(metric);
      localStorage.setItem("metric", metric);
    },
  };
  return (
    <div className="weather-container">
      <div className="input-country">
        <img src={getAssets("search_icon")} alt="icon" width="20px" />
        <input
          type="text"
          onKeyDown={(e) => events.onLocationChange(e)}
          placeholder="location, city or country"
        />
      </div>
      {metric === "metric" ? (
        <h3
          className="metric-switch"
          title="Change to degree Fahrenheit"
          onClick={() => events.onChangeMetric("imperial")}
        >
          °C
        </h3>
      ) : (
        <h3
          className="metric-switch"
          title="Change to degree Celsius"
          onClick={() => events.onChangeMetric("metric")}
        >
          °F
        </h3>
      )}
      <div className="slider-details">
        <input type="radio" name="slider" id="slide1" defaultChecked />
        <input type="radio" name="slider" id="slide2" />
        <input type="radio" name="slider" id="slide3" />
        <div className="slides">
          <div className="overflow">
            <div className="inner">
              <div className="slide slide_1">
                <div className="slide-content">
                  <h1>
                    {weather?.main?.temp?.toFixed(0)}
                    <span className="degree">°</span>
                    {metric === "metric" ? "C" : "F"}
                  </h1>
                  <h4 className="weather-description">
                    {weather?.weather[0]?.description}
                    {weather?.weather[0]?.icon && (
                      <img
                        src={`http://openweathermap.org/img/w/${weather?.weather[0]?.icon}.png`}
                        width="35px"
                        alt={weather?.weather[0]?.description}
                      />
                    )}
                  </h4>
                  <h5 className="slider-details-location">
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
                  <h1>{`${weather?.wind?.speed} ${
                    metric === "metric" ? " km/h" : " mph"
                  }`}</h1>
                  <h4>Wind speed</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="controls">
          <label htmlFor="slide1"></label>
          <label htmlFor="slide2"></label>
          <label htmlFor="slide3"></label>
          <label htmlFor="slide4"></label>
        </div>
        <div className="bullets">
          <label htmlFor="slide1"></label>
          <label htmlFor="slide2"></label>
          <label htmlFor="slide3"></label>
        </div>
      </div>
      <div className="weather-info">
        {renderData?.map((data, index) => (
          <div className="details" title={data.title} key={index}>
            <img src={getAssets(data.icon)} alt={data.icon} />
            <p>{data?.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
