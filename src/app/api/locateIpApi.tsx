import axios from "axios";

const getLocation = () => {
  return axios
    .get("http://ip-api.com/json")
    .then((response:any) => {
      return Promise.resolve(response.data.city);
    })
    .catch((error) => {
      return Promise.reject(error?.response);
    });
};

export { getLocation };
