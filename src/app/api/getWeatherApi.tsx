import axios from "axios";

const getWeatherApi = (city: string, units: string) => {
  return axios
    .get("https://api.openweathermap.org/data/2.5/weather", {
      params: {
        q: city,
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
