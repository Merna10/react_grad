import { SvHeader } from "../../pages/shared/header/superVheader";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import'../../css/request.css'
export const Request = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else{
      alert("Your request is sent")

    }

    setValidated(true);
  };

  return (
    <><SvHeader/>
    <div className='request'>
      <br></br>
    <div className='request1'>
      
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
    <Form.Label>Update Product</Form.Label>
      
      <Row className="mb-3">
        <Form.Group   md="4" controlId="validationCustomUsername">
          <Form.Label>Name</Form.Label>
          <InputGroup hasValidation>
            <Col >
            <Form.Control
              type="text"
              placeholder="Name"
              style={{width:'      12cm'}}
              aria-describedby="inputGroupPrepend"
              
            /></Col>
            <Form.Control.Feedback type="invalid">
              Invalid Name.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group   md="4" controlId="validationCustomUsername">
          <Form.Label>Product ID</Form.Label>
          <InputGroup hasValidation>
            <Col >
            <Form.Control
              type="Number"
              placeholder="Product ID"
              style={{width:'      12cm'}}
              aria-describedby="inputGroupPrepend"
              required
            /></Col>
            <Form.Control.Feedback type="invalid">
              Invalid.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group   md="4" controlId="validationCustomUsername">
          <Form.Label>Warehouse ID</Form.Label>
          <InputGroup hasValidation>
            <Col >
            <Form.Control
              type="Number"
              placeholder="Warehouse ID"
              style={{width:'      12cm'}}
              aria-describedby="inputGroupPrepend"
              required
            /></Col>
            <Form.Control.Feedback type="invalid">
              Invalid.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group   md="4" controlId="validationCustomUsername">
          <Form.Label>Change Stock From</Form.Label>
          <InputGroup hasValidation>
            <Col >
            <Form.Control
              type="Number"
              placeholder="Stock"
              style={{width:'      12cm'}}
              aria-describedby="inputGroupPrepend"
              required
            /></Col>
            <Form.Control.Feedback type="invalid">
              Invalid.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group   md="4" controlId="validationCustomUsername">
          <Form.Label>To</Form.Label>
          <InputGroup hasValidation>
            <Col >
            <Form.Control
              type="Number"
              placeholder="Stock"
              style={{width:'      12cm'}}
              aria-describedby="inputGroupPrepend"
              required
            /></Col>
            <Form.Control.Feedback type="invalid">
              Invalid.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Button variant="dark" type="submit">Request</Button>
    </Form>
    </div></div>
    </>
  );
}
