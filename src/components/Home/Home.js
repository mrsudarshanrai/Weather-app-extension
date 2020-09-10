import React from 'react';
import axios from 'axios';

//assets
import BG_img from '../../assets/bg.svg';
import Arrow_icon from './../../assets/icons/arrow.svg';
import Arrow_right_icon from './../../assets/icons/arrow-right.svg';
import Search_icon from './../../assets/icons/search.svg';
import Location_white_icon from './../../assets/icons/location-white.svg';
import Time_icon from './../../assets/icons/time.svg';
import Day_icon from './../../assets/icons/day.svg';
import Temp_icon from './../../assets/icons/temp.svg';
import Humidity_icon from './../../assets/icons/humidity.svg';
import Wind_icon from './../../assets/icons/wind.svg';
import News_icon from './../../assets/icons/newspaper.svg';

//utils
import { getCurrentTime } from "../../utils/Time";
import { getCurrentDay } from "../../utils/Day";

//components
import News from '../News/News';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            didApiCalled: 2,
            city: 'kathmandu',
            message: 'Failed to locate your city. Please try adding city manually.',
            error_red: '',
            weather: {
                temperature: null,
                description: null,
                country: null,
                time: null,
                humidity: null,
                wind: null,
            },
            limitNews: 4,
        }
    }
    componentDidMount() {
        axios.get('http://ip-api.com/json/')
            .then(res => {
               this.setState({city:res.data.city})
                this.setState({ didApiCalled: 1 })
                this.setState({ city: res.data.city });

                async function getData(city) {
                    const getWeather = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
                        params: {
                            q: city,
                            units: 'metric',
                            appId: 'c31040535f2db82ab8aa9bc53255dea3'
                        }
                    })
                    return getWeather.data;
                }

                getData(this.state.city)
                    .then(res => {
                        this.setState({
                            weather: {
                                temperature: res.main.temp,
                                description: res.weather[0].description,
                                country: res.sys.country,
                                humidity: res.main.humidity,
                                wind: res.wind.speed
                            },
                        })
                    })
            })
            .catch(err => {
                this.setState({ didApiCalled: 0 });
                console.error(err);
            })
    }

    GetTime = (props) => {
        return (
            <p>{props.date.toLocalTimeString()}</p>
        );
    }

    handleInputCity = e => {
        this.setState({ city: e.target.value });
    }

    getData = async () => {
        if (this.state.city.length < 2) {
            this.setState({
                message: 'Please input a valid country name.',
                error_red: 'red',
            })

        } else {
            const getWeather = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
                params: {
                    q: this.state.city,
                    units: 'metric',
                    appId: 'c31040535f2db82ab8aa9bc53255dea3'
                }
            })
            this.setState({
                weather: {
                    temperature: getWeather.data.main.temp,
                    description: getWeather.data.weather[0].description,
                    country: getWeather.data.sys.country,
                    humidity: getWeather.data.main.humidity,
                    wind: getWeather.data.wind.speed
                },
                didApiCalled: 1
            });
        }
    }

    handleKeyDown = async (e) => {
        if (e.key === 'Enter') {

            const getWeather = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
                params: {
                    q: this.state.city,
                    units: 'metric',
                    appId: 'c31040535f2db82ab8aa9bc53255dea3'
                }
            })
            this.setState({
                weather: {
                    temperature: getWeather.data.main.temp,
                    description: getWeather.data.weather[0].description,
                    country: getWeather.data.sys.country,
                    humidity: getWeather.data.main.humidity,
                    wind: getWeather.data.wind.speed
                },
                didApiCalled: 1
            });
        }
    }

    handleNewsContainer = async () => {
        this.setState({ didApiCalled: 3 })
    }

    handleClose = () => {
        this.setState({ didApiCalled: 1 })
    }

    render() {
        const { didApiCalled, city, message, error_red, weather } = this.state;
        return (<div className="main-container">
            {
                (() => {
                    if (didApiCalled === 0) {
                        return (
                            <div className="intro-container">
                                <img className="intro-img" src={BG_img} alt="weather app logo" />
                                <div className="intro-collection">
                                    <input type="text" className="country" autoFocus placeholder="Your city" onChange={this.handleInputCity} />
                                    <div className="submit-button">
                                        <button className="submit_country" onClick={this.getData}><img src={Arrow_icon} alt="icon" width="20px" /></button>
                                    </div>
                                    <p style={{ color: error_red }}>{message}</p>
                                </div>
                            </div>)
                    } else if (didApiCalled === 1) {
                        return (
                            <div className="weather-container">
                                <div className="input-country">
                                    <img src={Search_icon} alt="icon" width="20px" /> <input type="text" onChange={this.handleInputCity} onKeyDown={this.handleKeyDown} placeholder="your City" />
                                </div>
                                <div className="big-details">
                                    <input type="radio" name="slider" id="slide1" defaultChecked />
                                    <input type="radio" name="slider" id="slide2" />
                                    <input type="radio" name="slider" id="slide3" />
                                    <div id="slides">
                                        <div id="overflow">
                                            <div className="inner">
                                                <div className="slide slide_1">
                                                    <div className="slide-content">
                                                        <h1> {weather.temperature}<span className="degree">°</span>c</h1>
                                                        <h4>{weather.description}</h4>
                                                        <h5 className="big-details-location"> <img src={Location_white_icon} alt="icon"
                                                            width="15px" /> {city} , {weather.country}</h5>
                                                    </div>
                                                </div>
                                                <div className="slide slide_2">
                                                    <div className="slide-content">
                                                        <h1>{`${weather.humidity}%`}</h1>
                                                        <h4>humidity</h4>
                                                    </div>
                                                </div>
                                                <div className="slide slide_3">
                                                    <div className="slide-content">
                                                        <h1>{`${weather.wind} km/h`}</h1>
                                                        <h4>Wind speed</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="controls">
                                        <label htmlFor="slide1"></label>
                                        <label htmlFor="slide2"></label>
                                        <label htmlFor="slide3"></label>
                                        <label htmlFor="slide4"></label>
                                    </div>
                                    <div id="bullets">
                                        <label htmlFor="slide1"></label>
                                        <label htmlFor="slide2"></label>
                                        <label htmlFor="slide3"></label>
                                    </div>
                                </div>
                                <div className="weather-info">
                                    <div className="details">
                                        <img src={Time_icon} alt="icon" />
                                        <p>{getCurrentTime()}</p>
                                    </div>
                                    <div className="details">
                                        <img src={Day_icon} alt="icon" />
                                        <p>{getCurrentDay()}</p>
                                    </div>
                                    <div className="details">
                                        <img src={Temp_icon} alt="icon" />
                                        <p>{`${weather.temperature}°c`}</p>
                                    </div>
                                    <div className="details">
                                        <img src={Humidity_icon} alt="icon" />
                                        <p>{`${weather.humidity}%`}</p>
                                    </div>
                                    <div className="details">
                                        <img src={Wind_icon} alt="icon" />
                                        <p>{`${weather.wind} km/h`}</p>
                                    </div>
                                    <div onClick={this.handleNewsContainer} className="details">
                                        <img src={News_icon} alt="icon" />
                                        <p>weather news</p>
                                    </div>
                                </div>
                            </div>)
                    } else if (didApiCalled === 2) {
                        return (<div className="main-loader">
                            <img src={BG_img} alt="icon" />
                        </div>
                        )
                    } else if (didApiCalled === 3) {
                        return (
                            <div className="news-container">
                                <div className="close-news">
                                    <p onClick={this.handleClose}>
                                        <img src={Arrow_right_icon} width="20px" />
                                    </p>
                                </div>
                                <News />
                            </div>

                        )
                    }
                })()
            }
        </div>
        )
    }
}

export default Home;