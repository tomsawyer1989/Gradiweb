import {currentWeatherEndpoint, forecastWeatherEndpoint} from './endpoints';

  export const xmlCurrentWeather = params => {

    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();

      xhr.open('GET', currentWeatherEndpoint(params));

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            resolve(xhr.response);
        } else {
            reject(xhr.statusText);
        }
      }

      xhr.onerror = () => reject(xhr.statusText);
      
      xhr.send();
    });
  };

  export const xmlForecastWeather = (params, callback) => {
      
    return new Promise((resolve, reject) => {

      let xhr = new XMLHttpRequest();

      xhr.open('GET', forecastWeatherEndpoint(params));

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            resolve(xhr.response);
        } else {
            reject(xhr.statusText);
        }
      }

      xhr.onerror = () => reject(xhr.statusText);
      
      xhr.send();
    });
  };