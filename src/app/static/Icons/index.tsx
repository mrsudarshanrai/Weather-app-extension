type Assets = {
  [key: string]: string;
};

const assets: Assets = {
  logo: require("app/assets/bg.svg")?.default,
  Arrow_left: require("app/assets/icons/arrow-left.svg")?.default,
  search_icon: require("app/assets/icons/search.svg")?.default,
  location_icon: require("app/assets/icons/location-white.svg")?.default,
};

/**
 * @param {string} name - Icon name
 */
const getAssets = (name: string) => assets[name];

export { getAssets };
