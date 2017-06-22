const API_KEY = 'a5721a694ff19add2a4957c9839f5d69';
import {FETCH_WEATHER} from './types';
import axios from 'axios';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}` ;

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}