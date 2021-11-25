import React from "react";
import { getCity } from "app/api/locateIpApi";
import Home from "app/screens/Home";
import Loader from "app/components/Loader";

const App = () => {
  const [isFetching, setIsFetching] = React.useState(false);
  const [city, setCity] = React.useState("");

  React.useEffect(() => {
    setIsFetching(true);
    getCity()
      .then((city) => {
        setCity(city);
        setIsFetching(false);
      })
      .catch(() => {
        setIsFetching(false);
      });
  }, []);

  return <>{isFetching ? <Loader /> : <Home userCity={city} />}</>;
};

export default App;
