import React from "react";
import { Dropdown, Col, Table } from "react-bootstrap";
import TableBody  from './TableBody' 

const createColumns = (columns) => 
  {
      let columnList = columns.map(col => (
          !col.isSortable ? 
          <th key={col.id} className="text-center align-items-center">
              <Col className="mb-2" xs={12}>
                {col.name}
              </Col>
              <Col xs={12}>
                {col.subText}
              </Col>
          </th> :
          <th key={col.id}>
              <Dropdown>
                  <Dropdown.Toggle 
                  className="column-sort-buttons"
                  style={{color: "white"}}
                  variant="outline" id="dropdown-basic">
                      {col.name}
                  </Dropdown.Toggle>
  
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => console.log(`sort`)}>
                      Action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
          </th>
          
      ));
      return columnList;
  }

export function DataTable(props) {
  const { rows, columns } = props;

  return(
    <Table responsive="lg" className="mt-5" striped bordered hover variant="dark">
        <thead>
            <tr>
                {createColumns(columns)}
            </tr>
        </thead>
        <TableBody rows={rows} />
    </Table>
  );
}

/*
const columnsExample = 
[
  { id: 0, name: "applicatiomn name", isSortable: true },
  {
    id: 4,
    name: "actions",
    isSortable: false,
    subText: "View   |  Edit  |  Delete",
  },
];
const rowsExample = 
[
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
]

*/

