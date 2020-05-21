import { CITY_ACTION_TYPES } from '../actions/index'

const citiesReducerInitialState = JSON.parse(localStorage.getItem('cities')) || []

export const citiesReducer = (state = citiesReducerInitialState, action) => {
    console.log(state)
    switch (action.type) {
        case CITY_ACTION_TYPES.ADD_CITY: 
            return [...state, action.city]
        case CITY_ACTION_TYPES.REMOVE_CITY: 
            return state.filter( (city) => (city.id !== action.id) )
        default:
            return state
    }
}