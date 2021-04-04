import * as actionTypes from '../actions/actionTypes'

const INITIAL_STATE = 
{
    errors: [],
}


export const ErrorReducer = (state = INITIAL_STATE, action) => 
{
    switch (action.type) {
        case actionTypes.createError:
            console.log(`create new error`)
            return {...state, errors: [...state.errors, action.payload]};
        
        case actionTypes.initializeApp:
            console.log(`initialize app in error reducer`)
            return {...state, errors: action.payload.issues}
        default:
            return state;
    }
    
}
