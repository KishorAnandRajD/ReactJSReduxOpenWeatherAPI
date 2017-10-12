import Axios from 'axios';// npm install --save axios .This is for AJAX requests

// API key from Open Weather. Create an account and get a private key
//https://home.openweathermap.org/api_keys
const API_KEY='f18b53b83712af127716683e4400a619';
// Actual URL from https://openweathermap.org/forecast5
//http://samples.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml&appid=b1b15e88fa797225412429c1c50c122a1
//api.openweathermap.org/data/2.5/forecast?q={city name},{country code}
// City and Country Code are the additional values to be passed from the Search Term
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER='FETCH_WEATHER';

export function fetchWeather(city){
  const url=`${ROOT_URL}&q=${city},us`;  // Hardcoded Country Code 'us', 'city' taken from searchTerm passed as param
  const ajaxaxiosrequest=Axios.get(url);// This becomes Asynchronous code because redux-promise is being used from main index.js . So execution is halted till the results are returned. 

  console.log('Request:', ajaxaxiosrequest);

  return{
    type:FETCH_WEATHER,
    payload:ajaxaxiosrequest    //return the AJAX request values from open weather
  };
}
