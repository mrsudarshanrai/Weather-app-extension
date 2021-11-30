import React from "react";
/** all Home screen interfaces */
export namespace IHome {
  export interface IProps {
    userLocation: string;
  }

  export interface IEvents {
    onLocationChange: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  }
  export interface IWeather {
    coord?: Coord;
    weather: Weather[];
    base?: string;
    main?: Main;
    visibility?: number;
    wind?: Wind;
    clouds?: Clouds;
    dt?: number;
    sys: Sys;
    timezone?: number;
    id?: number;
    name?: string;
    cod?: number;
  }
  export interface IRender_Data {
    title: string; // title for hover details
    icon: Icons; // icon
    value: string; // value
  }
}

/* why interfaces for APIS data , that get changed every time?
 * -> for fun ;)
 */
export type Icons =
  | "logo"
  | "search_icon"
  | "Arrow_left"
  | "location_icon"
  | "time_icon"
  | "day_icon"
  | "humidity_icon"
  | "wind_icon"
  | "sunrise_icon"
  | "sunset_icon";

export interface Clouds {
  all?: number; // Cloudiness, %
}

export interface Coord {
  lon?: number; // Longitude
  lat?: number; // Latitude
}

export interface Main {
  temp?: number; // Temperature
  feelsLike?: number; // Temperature
  tempMin?: number; // Min Temperature
  tempMax?: number; // Max Temperature
  pressure?: number; // Pressure
  humidity?: number; // Humidity
}

export interface Sys {
  type?: number; // Type of the system
  id?: number; // Internal system id
  country?: string; // Country code
  sunrise: number; // Sunrise time
  sunset: number; // Sunset time
}

export interface Weather {
  id?: number; // Weather condition id
  main?: string; // Group of weather parameters (Rain, Snow, Extreme etc.)
  description?: string; // Weather condition within the group
  icon?: string; // Weather icon id
}

export interface Wind {
  speed?: number; // Wind speed
  deg?: number; // Wind direction, degrees (meteorological)
}
