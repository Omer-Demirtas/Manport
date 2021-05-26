import api from "../../../Api"

export const requestSend = () => 
{
    return {type: 'REQUEST_START'}
}

export const requestSuccessFul = () => 
{
    return {type: 'REQUEST_SUCCESSFUL'}
}

export const requestError = (err) => 
{
    return {type: 'REQUEST_SUCCESSFUL', payload: err}
}

/*
    initialize etmek için 
*/
export const initializeApp = () => (dispatch) => {
    dispatch({type: 'INITIALIZE_START', payload: true})
    api().get("manport")
    .then( response => dispatch({ type: 'INITIALIZE_MANPORT', payload: response.data }))
    .catch(err => dispatch({type: 'INITIALIZE_ERROR', payload: err}))
};


export const openSound = () =>
{
    return {tpye: 'SOUND_OPEN'}
}

export const openClose = () =>
{
    return {tpye: 'SOUND_CLOSE'}
}

/*
export const getRequest = (url) => (dispatch) =>
{
    dispatch({type: 'REQUEST_START'})
    api().get(url)
    .then(response => dispatch({type: 'REQUEST_SUCCESSFUL'}))
    .catch(err => dispatch({type: 'REQUEST_ERROR', payload: err}) )

}

export const postRequest = (url) => (dispatch) =>
{
    dispatch({type: 'REQUEST_START'})
    api().get(url)
    .then(response => dispatch({type: 'REQUEST_SUCCESSFUL'}))
    .catch(err => dispatch({type: 'REQUEST_ERROR', payload: err}) )

}

export const deleteByIdRequest = (url) => (dispatch) =>
{
    dispatch({type: 'REQUEST_START'})
    api().delete(url,)
    .then(response => dispatch({type: 'REQUEST_SUCCESSFUL'}))
    .catch(err => dispatch({type: 'REQUEST_ERROR', payload: err}) )

}
*/