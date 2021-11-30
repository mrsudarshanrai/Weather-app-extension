import axios from "axios";

const getWeatherApi = (location: string, units: string) => {
  return axios
    .get("https://api.openweathermap.org/data/2.5/weather", {
      params: {
        q: location,
        units,
        appId: process.env.REACT_APP_API_ID,
      },
    })
    .then((response) => {
      return Promise.resolve(response?.data);
    })
    .catch((err) => Promise.reject(err));
};

export { getWeatherApi };
