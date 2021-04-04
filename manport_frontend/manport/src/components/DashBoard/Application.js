import React, { useState } from "react";
import { Card, Button, Collapse, Col, Row } from "react-bootstrap";

const getMaxErrorType = (countries) => {
  let countryList = countries.map((country) => {
    return country.prods.map((prod) => {
      let maxErrorType = 0;
      prod.jobs.map((job) => {
        if (job.errorType > maxErrorType) {
          maxErrorType = job.errorType;
        }
      });
      return maxErrorType;
    });
  });

  console.log(`countryList`, countryList);
  /*
    let prodList = prods.map(prod => 
    {
        let maxErrorType = 0;
        prod.jobs.map(job => 
        {
            if(job.errorType > maxErrorType)
            {
                maxErrorType=job.errorType;
            }
        })
        return maxErrorType;
    })
    console.log(`asd`, asd)*/
};

const getColorByErrorTypes = (errorType) => {
  switch (errorType) {
    case "HIGH":
      return "danger";
    case "MEDIUM":
      return "warning";
    case "LOW":
      return "light";
    case "NONE":
      return "success";
    default:
      return "success";
  }
};

let index = 0;

export default function Application(props) {
  const [open, setOpen] = useState(true);
  const { app, country } = props;
  const isLight = "light";

  console.log(`state of app`, open);

  return (
    <Col  >
      <Card
        bg={"light"}
        text={isLight === "light" ? "dark" : "white"}
        className="mb-2"
      >
        <Card.Header>
          <Button
            style={{ color: "white" }}
            variant="outline-success"
            onClick={() => setOpen(!open)}
            aria-controls="appbody"
            aria-expanded={open}
          >
            {app.name}
          </Button>
        </Card.Header>
        <Card.Body>
          <Collapse in={open}>
            <div className="bg-danger" id="appbody">
              <div className="row bg-secondary" style={{ minHeight: "7rem" }}>
                {app.countries.map((country) => (
                  <Col
                    style={{ border: "1px solid red" }}
                    key={country.id}
                    md={3}
                  >
                    <Row className="text-center">
                      <Col>{country.name}</Col>
                    </Row>
                    <Row className="bg-danger text-center">
                      {country.prods.map((prod) => (
                        <Col key={prod.id} xs={12}>
                          {prod.name}
                          <Row
                            style={{ minHeight: "3rem" }}
                            className="bg-secondary text-start"
                          >
                            {prod.jobs.map((job) => (
                              <Col
                                key={job.id}
                                xs={4}
                                className={"bg-"+ getColorByErrorTypes(job.errorType)}
                                style={{
                                  border: "1px solid black",
                                  height: "3rem",
                                }}
                              >
                                {job.issueType}
                              </Col>
                            ))}
                          </Row>
                        </Col>
                      ))}
                    </Row>
                  </Col>
                ))}
              </div>
            </div>
          </Collapse>
        </Card.Body>
      </Card>
    </Col>
  );
}
