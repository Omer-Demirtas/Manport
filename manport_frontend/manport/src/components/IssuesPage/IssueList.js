import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { DataTable } from "../MyUi/Table";

/*
collapse 
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible_symbol
*/

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

export default function IssueList() {

  const state = useSelector(state => 
    {
      return {errors: state.ErrorReducer.errors, apps: state.AppReducer.apps}
    })
    
  const getRow = (err) => 
  {
    const app = state.apps.find(app  => app.id === err.appId);
    let response;

    if(app)
    {
      const country = app.countries.find(country => country.id === err.plantId)
        
      const prod = country.prods.find(prod => prod.id === err.prodId);

      const job = prod.jobs.find(job => job.id === err.jobId);

      console.log(`job  `, job)
    
      response = 
      {
        items: [
          { type: "text", data: app.name },
          { type: "text", data: err.description},
          { type: "text", data: err.errorType},
          { type: "text", data: job.issueType },
          {
            type: "action",
            data: [
              {
                name: "Edit",
                icon: "bg-success",
              },
              {
                name: "View",
                icon: "bg-info",
              },
              {
                name: "Del",
                icon: "bg-danger",
              },
            ],
          },
        ],
      }
    }
    return response;
  }

  const getRows = (row) => 
  {
    return state.errors.map(issue => getRow(issue))
  }

  getRows();
  console.log(`IssueList state`, state)

  return (
    <DataTable 
    columns={columns} 
    rows={getRows()}/>
  );
}
