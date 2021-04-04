import React, { useState } from 'react'
import { Col, Row, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';



const getcolumnEleemnt = (col, id) => {
    switch (col.type) {
      case "text":
        return col.data;
      case "action":
        return (
          <Row>
            {col.data.map((action) => (
              <Col key={++id} className="mx-2">
                {action.type === "link"
                ?
                <h6>
                  <Link to={"/management/" + action.link + "/" + col.link.toLowerCase()}>
                    {action.link}
                  </Link>
                </h6>
                :
                <Button
                onClick={action.action}>
                  {action.text}
                </Button>  
              }
              </Col>
            ))}
          </Row>
        );
  
      default:
        return "undefinded column";
    }
  };
  

export default function TableBody(props) {
    const [rows, setRows] = useState([])

    let id = 0;
    
    React.useEffect(() => {
        setRows(props.rows);
      }, [props.rows])

    console.log(`DataTableState`, rows)


    return (
        <tbody>
            {
            rows.map((data) => (
                <tr kewy={data.id}>
                {data.items.map((item) => (
                    <td 
                    key={++id}>
                        {getcolumnEleemnt(item, id)}
                    </td>
                ))}
                </tr>
            ))}
      </tbody>
    )
}
