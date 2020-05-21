import { createStore, combineReducers } from 'redux'
import { citiesReducer } from '../reducers/citiesReducer'
import { filtersReducer } from '../reducers/filtersReducer'
 

export default () => {
    const store = createStore(
        combineReducers({
            cities: citiesReducer,
            filters: filtersReducer
        })
    )
    return store
}
