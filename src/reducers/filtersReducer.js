import { FILTER_ACTION_TYPES } from '../actions/index'

export const SORT_BY_TYPES = {
    ALPHABETICALLY: 'ALPHABETICALLY',
    TEMP: 'TEMP'
}

const filtersReducerInitialState = {
    text: '',
    sortBy: SORT_BY_TYPES.ALPHABETICALLY
}

export const filtersReducer = (state = filtersReducerInitialState, action) => {
    switch (action.type) {
        case FILTER_ACTION_TYPES.SET_FILTER_TEXT:
            return [
                {
                    ...state,
                    text: action.text
                }
            ]

        case FILTER_ACTION_TYPES.SORT_ALPHABETICALLY:
            return [
                {
                    ...state,
                    sortBy: SORT_BY_TYPES.ALPHABETICALLY
                }
            ]

        case FILTER_ACTION_TYPES.SORT_BY_TEMP:
            return [
                {
                    ...state,
                    sortBy: SORT_BY_TYPES.TEMP
                }
            ]
    
        default:
            return state
    }
}