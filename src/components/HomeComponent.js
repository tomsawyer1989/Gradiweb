import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faCloudRain } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
// import { faCloudMoon } from '@fortawesome/free-solid-svg-icons';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { faPooStorm } from '@fortawesome/free-solid-svg-icons';
import { faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';

function Home (props) {

    const {forecastWeather, current} = props;

    const [nextDays, setNextDays] = useState([]);

    /* Para darle manejo a los dias siguientes */
    const dias = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];

    /* Parametros para el pintado de Lyon */
    const estado = 'Cloudy'; 
    const temperatura = '29'; 
    const ciudad = 'Lyon'; 
    const country = 'Francia'; 
    const humedad = '64'; 
    const orientation = 'Northwest'; 
    const viento = '8.2';

    /* Parametros para el manejo de los servicios de Paris */
    let state = '';
    let temp = '';
    let city = '';
    let humidity = '';
    let speed = '';

    if(current.weather !== undefined){
        state = current.weather[0].main;
    }

    if(current.main !== undefined){
        temp = Math.round(current.main.temp);
    }

    if(current.name !== undefined){
        city = current.name;
    }

    if(current.main !== undefined){
        humidity = current.main.humidity;
    }

    if(current.wind !== undefined){
        speed = current.wind.speed;
    }

    useEffect(()=> {
        getNextDays();
    }, []);

    const getNextDays = () => {
        let aux = '';

        const newNextDays = forecastWeather.filter(item => {
            if(item.dt_txt.substr(0,10) !== aux){
                aux = item.dt_txt.substr(0,10);
                return item;
            }
            else {
                aux = item.dt_txt.substr(0,10);
            }
        });

        setNextDays(newNextDays);
    }

    const getIcon = (main) => {
        switch (main) {
            case 'Thunderstorm': return <FontAwesomeIcon icon={faPooStorm} size="2x" color="#6D5FBB"/>

            case 'Drizzle': return <FontAwesomeIcon icon={faCloudShowersHeavy} size="2x" color="#6D5FBB"/>

            case 'Rain': return <FontAwesomeIcon icon={faCloudRain} size="2x" color="#6D5FBB"/>

            case 'Snow': return <FontAwesomeIcon icon={faSnowflake} size="2x" color="#6D5FBB"/>

            case 'Clear': return <FontAwesomeIcon icon={faSun} size="2x" color="#f39f18"/>

            case 'Clouds': return <FontAwesomeIcon icon={faCloud} size="2x" color="#6D5FBB"/>

            default: return <FontAwesomeIcon icon={faCloudSun} size="2x" color="#6D5FBB"/>
        }
    }

    const RenderForecast = () => {
        return(
            nextDays.map((item, i) => {
                if(i!=0)
                return(
                    <div key={i} className="media mt-2">
                        <div className="media-body">
                            <div className="row">
                                <div className="col-3">
                                    {getIcon(item.weather[0].main)}
                                </div>
                                <div className="col-3 offset-1">
                                    <strong>{dias[new Date(item.dt_txt).getDay()]}</strong>
                                    <p style={{color: '#8C8E8F'}}>{item.weather[0].main}</p>
                                </div>
                            </div>
                        </div>
                        <div className="foreTemp">
                            <h5>{Math.round(item.main.temp_max)}° / {Math.round(item.main.temp_min)}°</h5>
                        </div>
                    </div>
                );
            })
        );
    }

    const RenderItemLocation = ({state, temp, city, country, humidity, orientation, speed}) => {
        return(
            <div className="itemLocation mt-4">
                <div className="row">
                    <div className="col-3 iconLoc">
                        {getIcon(state)}
                    </div>
                    <div className="col-7 mt-2">
                        <div className="row">
                            <div className="col-4">
                                <strong>{temp}<sup>°C</sup></strong>
                            </div>
                            <div className="col-8">
                                <strong>{city}</strong><br></br>
                                <strong>{country}</strong>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-3">
                        <div className="footerItem">
                            <div className="row">
                                <div className="col-1">
                                    <span>{humidity}%</span>
                                </div>
                                <div className="col-2 offset-1">
                                    <span>{orientation} </span>
                                </div>
                                <div className="col-4 offset-3">
                                    <span>{speed}km/h</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-12 mt-5">
                    <div id="header">
                        <FontAwesomeIcon icon={faMapMarkerAlt} size="sm" color="#6D5FBB"/><strong> Bogotá</strong>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-3 mt-5">
                    <div className="titleMenu">
                        <strong>3 Days</strong><span> Forecast</span>
                    </div>
                    <div className="menu mt-5">
                        <RenderForecast/>
                    </div>
                </div>
                <div className="col-12 col-lg-3 mt-5">
                    <div className="titleMenu">
                        <strong>Place to</strong><span> Visit</span>
                    </div>
                    <div className="menu mt-5">
                        <div id="placeVisit" >
                            <div className="row">
                                <div className="col-1">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} size="sm" color="white"/>
                                </div>
                                <div className="col-8">
                                    <strong>Arab Street</strong>
                                    <p><strong>Singapore</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-3 mt-5">
                    <div>
                        <div id="topRev" className="row">
                            <div className="col-7">
                                <strong style={{color: '#8C8E8F'}}>+ Top Reviews</strong>
                            </div>
                            <div id="topItem1" className="topRevItem col-1">
                            </div>
                            <div id="topItem2" className="topRevItem col-1 ml-1">
                            </div>
                            <div id="topItem3" className="topRevItem col-1 ml-1">
                            </div>
                            <div className="topRevItem col-1 ml-1">
                                <strong>3+</strong>
                            </div>
                        </div>
                    </div>
                    <div className="menu mt-5">
                        <div id="place1" >
                            <div className="row">
                                <div className="col-1">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} size="sm" color="white"/>
                                </div>
                                <div className="col-8">
                                    <strong>Art Science</strong>
                                    <p><strong>Musseum</strong></p>
                                </div>
                            </div>
                        </div>
                        <div id="place2" className="media mt-4">
                            <div className="media-body">
                                <div className="row">
                                    <div className="col-1" style={{padding: '10px'}}>
                                        <FontAwesomeIcon icon={faMapMarkerAlt} size="sm" color="white"/>
                                    </div>
                                    <div className="col-9">
                                        <strong>Fountain</strong>
                                        <p><strong>of Health</strong></p>
                                    </div>
                                </div>
                            </div>
                            <button id="buttonPlace2" className="btn">+</button>
                        </div>
                    </div>
                </div>
                <div id="boxAbsolute" className="col-12 col-lg-3 mt-5">
                    <RenderItemLocation state={estado} temp={temperatura} city={ciudad} country={country} humidity={humedad} orientation={orientation} speed={viento}/>
                    <RenderItemLocation state={state} temp={temp} city={city} country={country} humidity={humidity} orientation={orientation} speed={speed}/>
                    <div id="locations" className="mt-4" >
                        <button id="buttonLocations" className="btn">Add Locations</button>
                        <div id="imglocations"></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Home;