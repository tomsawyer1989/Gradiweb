import React, {useEffect, useState} from 'react';
import CurrentTemp from './CurrentTempComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import {xmlCurrentWeather, xmlForecastWeather} from '../shared/weather';

function Main () {
    const [currentWeather, setCurrentWeather] = useState([]);
    const [mainCurrentWeather, setMainCurrentWeather] = useState([]);
    const [forecastWeather, setForecastWeather] = useState([]);
    const [current, setCurrent] = useState([]);

    useEffect(() => {

        getCurrentWeather();
        getForecastWeather();
        getMainCurrentWeather();
        getCurrent();

    }, []);

    /* Paris Data */
    const getCurrent = async () => {
        const params = {
            q: 'Paris',
            units: 'metric',
        }

        await xmlCurrentWeather(params)
        .then(response => JSON.parse(response))
        .then(response => setCurrent(response));
    }

    /* Bogota Data */
    const getCurrentWeather = async () => {
        const params = {
            q: 'Bogota',
            units: 'metric',
        }

        await xmlCurrentWeather(params)
        .then(response => JSON.parse(response))
        .then(response => setCurrentWeather(response.main));

    }

    const getMainCurrentWeather = async () => {
        const params = {
            q: 'Bogota',
            units: 'metric',
        }

        await xmlCurrentWeather(params)
        .then(response => JSON.parse(response))
        .then(response => setMainCurrentWeather(response.weather[0]));

    }

    const getForecastWeather = async () => {
        const params = {
            q: 'Bogota',
            units: 'metric',
            cnt: 24,
        }

        await xmlForecastWeather(params)
        .then(response => JSON.parse(response))
        .then(response => setForecastWeather(response.list));
            
    }

    return(
        <>
        <CurrentTemp currentWeather={currentWeather} mainCurrentWeather={mainCurrentWeather}/>
        <Switch>
            <Route exact path="/home" component={() => <Home current={current} currentWeather={currentWeather} forecastWeather={forecastWeather}/>}/>
            <Redirect to="/home"/>
        </Switch>
        </>
    );
}

export default Main;