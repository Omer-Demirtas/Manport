
export const createIssue = (error) => 
{
    return {type: 'CREATE_ISSUE', payload: error}
}