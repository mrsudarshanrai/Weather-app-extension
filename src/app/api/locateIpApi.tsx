import axios from "axios";

const getCity = () => {
  return axios
    .get("http://ip-api.com/json")
    .then((response) => {
      return Promise.resolve(response?.data?.city);
    })
    .catch((error) => {
      return Promise.reject(error?.response);
    });
};

export { getCity };
