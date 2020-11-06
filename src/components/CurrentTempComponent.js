import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudRain } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
// import { faCloudMoon } from '@fortawesome/free-solid-svg-icons';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { faPooStorm } from '@fortawesome/free-solid-svg-icons';
import { faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';
import Main from './MainComponent';

function CurrentTemp (props) {
    const {currentWeather, mainCurrentWeather} = props;

    const getIcon = (main) => {
        switch (main) {
            case 'Thunderstorm': return <FontAwesomeIcon icon={faPooStorm} size="2x" color="white"/>

            case 'Drizzle': return <FontAwesomeIcon icon={faCloudShowersHeavy} size="2x" color="white"/>

            case 'Rain': return <FontAwesomeIcon icon={faCloudRain} size="2x" color="white"/>

            case 'Snow': return <FontAwesomeIcon icon={faSnowflake} size="2x" color="white"/>

            case 'Clear': return <FontAwesomeIcon icon={faSun} size="2x" color="#f39f18"/>

            case 'Clouds': return <FontAwesomeIcon icon={faCloud} size="2x" color="white"/>

            default: return <FontAwesomeIcon icon={faCloudSun} size="2x" color="white"/>
        }
    }

    return(
        <>
        <div id="sideTemp">
            <div id="box1">
                {getIcon(mainCurrentWeather.main)}
                <p>{mainCurrentWeather.main}</p>
            </div>
            <div id="box2">
                <h1>{Math.round(currentWeather.temp)}<sup>°C </sup></h1>
            </div>
        </div>
        </>
    );
}

export default CurrentTemp;