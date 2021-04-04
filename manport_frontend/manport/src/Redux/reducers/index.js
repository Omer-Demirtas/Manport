import { combineReducers } from 'redux';

import {AppReducer} from './AppReducer'
import {ErrorReducer} from './ErrorReducer'

export const rootReducer =  combineReducers({
    AppReducer,
    ErrorReducer
})