import { api } from "../../Api";
import * as actionTypes from "./actionTypes";

const baseUrl = "http://localhost:8080/api/apps";

/*
    Web socket'ten gelen datanın arayüzde oluşturulması için
*/

export const createApp = (app) => {
  return { type: actionTypes.createApp, payload: app };
};

export const deleteApp = (app) => {
  return { type: actionTypes.deleteApp, payload: app };
};

export const updateApp = (app) => {
  return { type: actionTypes.updateApp, payload: app };
};

export const updateErrorType = (issue) => {
  return { type: actionTypes.updateErrorType, payload: { issue } };
};

/*
    initialize etmek için 
*/

export const initializeApp = () => (dispatch) => {
  api().get("/api/apps")
  .then( response => {
    console.log(`response on initialState`, response);
    dispatch({ type: actionTypes.initializeApp, payload: response.data });
  })
  .catch(err => console.log(`Error at initialState`, Error ))
  /*
  fetch(baseUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(`data from initalize`, data);
      dispatch({ type: actionTypes.initializeApp, payload: data });
    })
    .catch((err) => console.error(err));*/
};

/*
    Back End'te oluşturma işlemleri
*/

/*
{
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  }
*/
