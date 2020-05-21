import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagasMiddleware from 'redux-saga'
import { citiesReducer } from '../reducers/citiesReducer'
import { filtersReducer } from '../reducers/filtersReducer'
import rootSagas from '../sagas/index'
 

export default () => {
    const reducers = combineReducers({
        cities: citiesReducer,
        filters: filtersReducer
    })

    const sagaMiddleware = createSagasMiddleware()

    const store = createStore(
        reducers,
        applyMiddleware(sagaMiddleware)
    )

    sagaMiddleware.run(rootSagas)

    return store
}
