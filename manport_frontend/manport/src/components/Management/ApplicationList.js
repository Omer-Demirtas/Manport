import React from "react";
import {DataTable} from '../MyUi/Table'
import {deleteAppById} from '../../Api'

const columns = 
[
  { id: 0, name: "applicatiomn name", isSortable: true },
  { id: 1, name: "Business Area", isSortable: false },
  { id: 2, name: "Live Plants", isSortable: true },
  { id: 3, name: "Line Stop Risk", isSortable: false },
  {
    id: 4,
    name: "actions",
    isSortable: false,
    subText: "View   |  Edit  |  Delete  |  Track",
  },
];

const createRows = (apps) => 
{
    let response = apps.map(app => 
        {
            return (
                {
                    items: 
                    [
                        { type: "text", data: app.name },
                        { type: "text", data: app.businessArea },
                        { type: "text", data: app.countries.length },
                        { type: "text", data: app.isStopProduction.toString() },
                        {
                            type: "action",
                            link: app.name,
                            data: [
                              {
                                type: "link",
                                link: "edit",
                                icon: "bg-success",
                              },
                              {
                                type: "link",
                                link: "view",
                                icon: "bg-info",
                              },
                              {
                                type: "action",
                                text: "del",
                                action: () => deleteAppById(app.id),
                                icon: "bg-danger",
                              },
                              {
                                type: "action",
                                text: "track",
                                action: () => console.log(`track action with ` ,app.name),
                                icon: "bg-secondary",
                              },
                            ],
                          },
                    ]
                }
            )
        }
    )
    return response;
}

export default function ApplicationList(props) {
    return (
      <div>
        <h1>Management</h1>
          <DataTable columns={columns} rows={createRows(props.apps)} />
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