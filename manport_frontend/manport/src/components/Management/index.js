import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import {api} from '../../Api'
import ApplicationList from './ApplicationList'
import {ApplicationPage} from './ApplicationPage'
/*

  API istekleri buradan alınacak ve axios'a geçileek 
  şimdilik Edit Page 'e id ile yollanıyor ileride appCode ile yollanacak
*/

const createApp = (data) => {
  console.log(`crate app with `, data)
  api().post("/api/apps", data)
  .then( response => console.log(`response`, response))
  .catch(err => console.error(err))
};

const deleteApp = (id) => {
  api().delete("/api/apps/"+id)
  .then(response => console.log(`response of delete `, response))
  .catch(err => console.error(err))
};

let application = 
{
  name: "nassin",
  createdDate: new Date(),
  createdBy: 0,
  errorType: "LOW"
}

const columns = [
  { id: 0, name: "applicatiomn name", isSortable: true },
  { id: 1, name: "description", isSortable: true },
  { id: 2, name: "errorType", isSortable: true },
  { id: 3, name: "issueType", isSortable: true },
  {
    id: 4,
    name: "actions",
    isSortable: false,
    subText: "View   |  Edit  |  Delete",
  },
];

const findApp = (apps, appCode) => 
{
  return apps.find(app => app.name.toLowerCase() === appCode)
}

export default function ApplicationManagementPage(props) {
  let {type, appCode} = useParams();

  const state = useSelector(state => {return {apps: state.AppReducer.apps}})


  findApp(state.apps)

  return (
      <div>
        {
        appCode
        ?
          <ApplicationPage app={findApp(state.apps, appCode)}/>
        :
          <ApplicationList apps={state.apps}/>
        }
      </div>
    );
}


/*
      <button 
      onClick={() => createApp(application)}
      className="btn btn-info">
        add new app
      </button>


*/