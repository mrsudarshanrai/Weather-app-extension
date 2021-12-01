import { Icons } from "app/types/IScreens/IHome";

type Assets = {
  [key: string]: string;
};

const assets: Assets = {
  logo: require("app/assets/bg.svg")?.default,
  Arrow_left: require("app/assets/icons/arrow-left.svg")?.default,
  search_icon: require("app/assets/icons/search.svg")?.default,
  location_icon: require("app/assets/icons/location-white.svg")?.default,
  time_icon: require("app/assets/icons/time.svg")?.default,
  day_icon: require("app/assets/icons/day.svg")?.default,
  humidity_icon: require("app/assets/icons/humidity.svg")?.default,
  wind_icon: require("app/assets/icons/wind.svg")?.default,
  sunrise_icon: require("app/assets/icons/sunrise.svg")?.default,
  sunset_icon: require("app/assets/icons/sunset.svg")?.default,
  madeWithLove_icon: require("app/assets/icons/made-with-love.svg")?.default,
};

/**
 * @param {string} name - Icon name
 */
const getAssets = (name: Icons) => assets[name];

export { getAssets };
