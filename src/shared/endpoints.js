export const baseUrl = 'http://api.openweathermap.org/data/2.5/';
export const apiKey = '3e0179a2b01d020900f201e3abcf7607';

function serialize(obj) {
    const serialzedParams = Object.keys(obj)
      .reduce((accumulator, currentValue) => {
        accumulator.push(`${currentValue}=${encodeURIComponent(obj[currentValue])}`);
        return accumulator;
      }, [])
      .join('&');
  
    return `?${serialzedParams}&appid=${apiKey}`;
}

export const currentWeatherEndpoint = params =>
  `${baseUrl}weather${serialize(params)}`;

export const forecastWeatherEndpoint = params =>
  `${baseUrl}forecast${serialize(params)}`;