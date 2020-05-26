import { takeEvery, call, fork, put } from 'redux-saga/effects'
import { CITY_ACTION_TYPES } from '../actions/index'
import { getWeather } from '../apiClient/client'
import { setWeather, setWeatherError } from '../actions/cities'

function* fetchWeather(action) {
    try {
        const result = yield call( () => getWeather(action.city.name))
        yield put(setWeather({
            id: action.city.id,
            weather: result
        }))
    } catch (error) {
        yield put(setWeatherError({
            id: action.city.id,
            error
        }))
    }
}

function* watchFetchWeatherRequest() {
    yield takeEvery(CITY_ACTION_TYPES.ADD_CITY, fetchWeather)
}

const CitiesSaga = [
    fork(watchFetchWeatherRequest)
]

export default CitiesSaga