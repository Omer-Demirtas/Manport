

const INITIAL_STATE = 
{
    issues: [],
}


export const IssueReducer = (state = INITIAL_STATE, action) => 
{
    switch (action.type) {
        case 'CREATE_ISSUE':
            return {...state, issues: [...state.issues, action.payload]};
        case 'INITIALIZE_MANPORT':
            return {...state, issues: action.payload.issues}
        default:
            return state;
    }
    
}
