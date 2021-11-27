/** Notlocated screen interfaces */
export namespace INotLoacted {
  export interface IProps {
    setLocation: (location: string | undefined) => void; // set country
  }

  export interface IEvents {
    searchWeather: () => void; // search weather
  }
}
