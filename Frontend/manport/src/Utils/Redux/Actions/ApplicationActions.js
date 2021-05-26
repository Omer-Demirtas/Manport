/*
    Web socket'ten gelen datanın arayüzde oluşturulması için
*/

export const createApp = (app) => {
  return { type: 'CREATE_APP', payload: app };
};

export const deleteApp = (app) => {
  return { type: 'DELETE_APP', payload: app };
};

export const updateApp = (app) => {
  return { type: 'UPDATE_APP', payload: app };
};

export const createCountry = (country) => {
  console.log(`country`, country)
  return { type: 'CREATE_COUNTRY', payload: country };
};

export const deleteCountry = (id) => {
  return { type: 'DELETE_COUNTRY', payload: id };
};

export const updateErrorType = (issue) => {
  return { type: 'UPDATE_ERROR_TYPE', payload: { issue } };
};

