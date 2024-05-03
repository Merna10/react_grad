import { AdminHeader } from "../../pages/shared/header/admiHeader";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import'../../css/addProduct.css'
export const AddProduct = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else{
      alert("Added")

    }

    setValidated(true);
  };

  return (
    <><AdminHeader/>
    <div className='addpro'>
      <br></br>
    <div className='addpro1'>
      
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
    <Form.Label>Add Product</Form.Label>
      
      <Row className="mb-3">
        <Form.Group   md="4" controlId="validationCustomUsername">
          <Form.Label>Name</Form.Label>
          <InputGroup hasValidation>
            <Col >
            <Form.Control
              type="text"
              placeholder="Name"
              style={{width:'    15cm'}}
              aria-describedby="inputGroupPrepend"
              required
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
              style={{width:'    15cm'}}
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
          <Form.Label>Description</Form.Label>
          <InputGroup hasValidation>
            <Col >
            <Form.Control
              type="text"
              placeholder="Description"
              style={{width:'    15cm'}}
              aria-describedby="inputGroupPrepend"
              required
            /></Col>
            <Form.Control.Feedback type="invalid">
              Invalid Description.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group   md="4" controlId="validationCustomUsername">
          <Form.Label>Image</Form.Label>
          <InputGroup hasValidation>
            <Col >
            <Form.Control
              type="text"
              placeholder="Image URL"
              style={{width:'    15cm'}}
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
        <Form.Group md="4" controlId="validationCustomUsername">
          <Form.Label>Stock</Form.Label>
          <InputGroup hasValidation>
            <Col >
            <Form.Control
              type="Number"
              placeholder="Stock"
              style={{width:'    15cm'}}
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
              style={{width:'    15cm'}}
              aria-describedby="inputGroupPrepend"
              required
            /></Col>
            <Form.Control.Feedback type="invalid">
              Invalid.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Button variant="danger" type="submit">Add</Button>
    </Form>
    </div></div>
    </>
  );
}
