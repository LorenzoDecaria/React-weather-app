import { FILTER_ACTION_TYPES } from './index' 


// Filter actions
export const sortAlphabetically = () => ({
    type: FILTER_ACTION_TYPES.SORT_ALPHABETICALLY
})

export const sortByTemp = () => ({
    type: FILTER_ACTION_TYPES.SORT_BY_TEMP
})

export const setFilterText = (text = '') => ({
    type: FILTER_ACTION_TYPES.SET_FILTER_TEXT,
    text
})