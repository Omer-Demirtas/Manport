
const INITIAL_STATE = 
{
    initializing: false,
    loading: false,
    error: null,
}


export const ManportReducer = (state = INITIAL_STATE, action) => 
{
    switch(action.type)
    {
        case 'INITIALIZE_START':
            return {...state, initializing: action.payload}
        case 'INITIALIZE_ERROR':
            return {initializing: 'ERROR'}
        case 'INITIALIZE_MANPORT':
            return {...state, initializing: false};
        
        case 'REQUEST_START':
            return {...state, loading: true};
         
        case 'REQUEST_SUCCESSFUL':
            return {...state, loading: false};

        case 'REQUEST_ERROR':
            return {...state, loading: false, error: action.payload};
        
        /*
            Sound
        */
        case 'SOUND_OPEN':
            return {...state, sound: true}
        
        case 'SOUND_CLOSE':
            return {...state, sound: false}
        
        default:
            return state;
    }
}
