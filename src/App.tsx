import React from "react";
import { getLocation } from "app/api/locateIpApi";
import Home from "app/screens/Home";
import Loader from "app/components/Loader";

const App = () => {
  const [isFetching, setIsFetching] = React.useState(false);
  const [location, setLocation] = React.useState("");

  React.useEffect(() => {
    setIsFetching(true);
    getLocation()
      .then((city) => {
        setLocation(city);
        setIsFetching(false);
      })
      .catch(() => {
        setIsFetching(false);
      });
  }, []);

  return <>{isFetching ? <Loader /> : <Home userLocation={location} />}</>;
};

export default App;
