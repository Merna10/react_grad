import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import'../../css/register.css'
export const Register = () => {
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
    <div className='register'>
      <br></br>
    <div className='register1'>
      
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
    <Form.Label>Add Subervisor</Form.Label>
  
      <Row className="mb-3">
        <Form.Group   md="4" controlId="validationCustomUsername">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <Col>
            <Form.Control
              type="text"
              
              placeholder="Email"
              style={{width:'  15cm'}}
              aria-describedby="inputGroupPrepend"
              required
            />
          </Col>
            
            <Form.Control.Feedback type="invalid">
              Invalid Email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group   md="4" controlId="validationCustomUsername">
          <Form.Label>Password</Form.Label>
          <InputGroup hasValidation>
          <Col>
            <Form.Control
              type="password"
              placeholder="Password"
              style={{width:' 15cm'}}
              aria-describedby="inputGroupPrepend"
              required
            />
            </Col>
            <Form.Control.Feedback type="invalid">
              Please choose a password.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group   md="4" controlId="validationCustomUsername">
          <Form.Label>Phone</Form.Label>
          <InputGroup hasValidation>
          <Col>
            <Form.Control
              type="number"
              style={{width:'      15cm'}}
              placeholder="Phone"
              aria-describedby="inputGroupPrepend"
              required
            />
            </Col>
            <Form.Control.Feedback type="invalid">
              Please enter your phone.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group   md="4" controlId="validationCustomUsername">
          <Form.Label>ID</Form.Label>
          <InputGroup hasValidation>
          <Col>
          <Form.Control
              type="number"
              placeholder="ID"
              style={{width:'      15cm'}}
              aria-describedby="inputGroupPrepend"
              required
            />
            </Col>
            <Form.Control.Feedback type="invalid">
              Please enter your ID.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group   md="4" controlId="validationCustomUsername">
          <Form.Label>Phone</Form.Label>
          <InputGroup hasValidation>
          <Col>
            <Form.Control
              type="number"
              placeholder="Phone"
              style={{width:'      15cm'}}
              aria-describedby="inputGroupPrepend"
              required
            />
            </Col>
            <Form.Control.Feedback type="invalid">
              Please enter your phone.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group   md="4" controlId="validationCustomUsername">
          <Form.Label>Status</Form.Label>
          <InputGroup hasValidation>
          <Col><Form.Control
              type="Text"
              placeholder="Status"
              style={{width:'      15cm'}}
              aria-describedby="inputGroupPrepend"
              required
            /></Col>
            <Form.Control.Feedback type="invalid">
              Please enter your ID.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group   md="4" controlId="">
          <Form.Label>Warehouse ID</Form.Label>
          <InputGroup >
          <Col>
            <Form.Control
              type="number"
              placeholder="Warehouse ID"
              style={{width:'      15cm'}}
              aria-describedby="inputGroupPrepend"
              
            /></Col>
          </InputGroup>
        </Form.Group>
      </Row>
      <Button variant="dark" type="submit">Register</Button>
      </Form>
    </div></div>
   
  );
}
