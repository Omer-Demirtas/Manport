import * as actionTypes from './actionTypes'

export const createError = (error) => 
{
    return {type: actionTypes.createError, payload: error}
}