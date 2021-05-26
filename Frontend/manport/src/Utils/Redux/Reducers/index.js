import { combineReducers } from 'redux';
import { AppReducer } from './AppReducer';
import { IssueReducer } from './IssueReducer';
import { ManportReducer } from './ManportReducer'

export const rootReducer =  combineReducers({
    AppReducer,
    ManportReducer,
    IssueReducer,
})