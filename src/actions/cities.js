import { v4 as uuidv4 } from 'uuid';
import { CITY_ACTION_TYPES } from './index' 

// City actions
export const addCity = ({ name = '' }) => ({
    type: CITY_ACTION_TYPES.ADD_CITY,
    city: {
        id: uuidv4(),
        name,
        loading: true
    }
})

export const removeCity = ({ id = '' }) => ({
    type: CITY_ACTION_TYPES.REMOVE_CITY,
    id
})

export const setWeather = ({ id, weather }) => ({
    type: CITY_ACTION_TYPES.SET_WEATHER_RESULT,
    id,
    weather
})

export const setWeatherError = ({ id, error }) => ({
    type: CITY_ACTION_TYPES.SET_WEATHER_ERROR,
    id,
    error
})