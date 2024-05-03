import React, { useState } from 'react';
import {Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import'../../css/login.css'
export const Login = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      
    }
    else{
      alert("you are loged")

    }

    setValidated(true);
  };

  return (
    <div className='login'>
      <br></br>
      <div className='login1'>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
  
  
      <Row className="mb-3">
        <Form.Group   md="4" controlId="validationCustomUsername">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <Col>
            <Form.Control
              type="text"
              
              placeholder="Email"
              style={{width:'  9cm'}}
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
              style={{width:' 9cm'}}
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
      <p>New user? <Link to="/register">Click to Register</Link></p>
      <Button variant="dark" type="submit">Login</Button>
      </Form>
    </div>
    </div>
  );
}
