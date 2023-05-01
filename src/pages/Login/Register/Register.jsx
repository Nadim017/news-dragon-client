import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { authContext } from '../../../providers/AuthProvider';
import { useContext } from 'react';
import { useState } from 'react';

const Register = () => {
  const { createUser } = useContext(authContext);
  const [accepted, setAccepted] = useState();
  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(name, email, password);
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
    console.log(event.target.checked);
  };
  return (
    <Container className="mt-3">
      <Form onSubmit={handleRegister} className="w-25 mx-auto">
        <h3>Please Register</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            name="name"
            required
            type="text"
            placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            name="photo"
            required
            type="text"
            placeholder="Photo url"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            required
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            required
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handleAccepted}
            type="checkbox"
            name="accept"
            label={
              <>
                Accept <Link to="/terms">"terms and conditions"</Link>
              </>
            }
          />
        </Form.Group>
        <Button variant="primary" type="submit " disabled={!accepted}>
          Register
        </Button>
        <br />
        <Form.Text className="text-secondary">
          Already Have an Account?<Link to="/login">Login</Link>
        </Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
