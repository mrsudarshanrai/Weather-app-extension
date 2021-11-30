type IsEmpty = string | number | null | undefined;
const isEmpty = (val?: IsEmpty) =>
  val === undefined || val === null || val === "";

/**
 * get current time
 * @returns {string} date
 */
const getCurrentTime = () => new Date().toLocaleTimeString();

/**
 * get current day
 * @returns {string} day
 */
const getCurrentDay = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return `${days[new Date().getDay()]}`;
};

export { isEmpty, getCurrentTime, getCurrentDay };
