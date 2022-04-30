import React from "react";
import { getLocation } from "app/api/locateIpApi";
import Home from "app/screens/Home";
import Loader from "app/components/Loader";
import { isEmpty } from "app/utils";

const App = () => {
  const [isFetching, setIsFetching] = React.useState(false);
  const [location, setLocation] = React.useState(
    localStorage.getItem("defaultLocation") ?? ""
  );

  React.useEffect(() => {
    setIsFetching(true);
    const savedLocation = localStorage.getItem("defaultLocation") ?? "";
    if (isEmpty(savedLocation)) {
      getLocation()
        .then((city) => {
          setLocation(city);
          setIsFetching(false);
        })
        .catch(() => {
          setIsFetching(false);
        });
    } else {
      setLocation(savedLocation);
      setIsFetching(false);
    }
  }, []);

  return <>{isFetching ? <Loader /> : <Home userLocation={location} />}</>;
};

export default App;
