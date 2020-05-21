import CitiesSaga from './cities'
import { all } from 'redux-saga/effects'
 
export default function* rootSagas() {
    yield all([
        ...CitiesSaga
    ])
}