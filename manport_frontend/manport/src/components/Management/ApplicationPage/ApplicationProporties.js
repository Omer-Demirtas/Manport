import React, { useState } from "react";
import { Col, Row, Form } from "react-bootstrap";
import {createAppQuickLinksView} from '../../QuickLinks/QuickLinksList'

export default function ApplicationProporties(props) {
  const [input, setInput] = useState({
    fullName: "",
    shortCode: "",
  });

  const { app } = props;

  const updateInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div className="text-start">
      <h1>{app.name}</h1>
      <Form className="my-5">
        <Form.Row>
            <Col xs={{span: 3, offset: 2}}>
                <Row className="my-3">
                    <h4>Application Name</h4>
                    <Form.Control placeholder="First name" inline/>   
                </Row>
                <Row className="my-1">
                    <h4>Application Name</h4>
                    <Form.Control placeholder="First name" inline/>   
                </Row>
            </Col>
          <Col xs={{span: 3, offset: 1}}>
                <Row className="my-3">
                    <h4>ShortCode</h4>
                    <Form.Control id="name" placeholder="First name" inline/>   
                </Row>
                <Row className="my-1">
                    <h4>ShortCode</h4>
                    <Form.Control id="name" placeholder="First name" inline/>   
                </Row>
          </Col>
        </Form.Row>
      </Form>

    
        <div>{createAppQuickLinksView(app)}</div>

    </div>
  );
}
