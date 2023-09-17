import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./Contact.css";

const ContactInformation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send data to a server.
    console.log(formData);
  };

  return (
    <Container className='container-with-margin'>
      <h1>Contact Information</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId='phoneNumber'>
          <Form.Label>Contact Number</Form.Label>
          <Form.Control
            type='tel'
            name='phoneNumber'
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId='message'>
          <Form.Label>Message</Form.Label>
          <Form.Control
            as='textarea'
            name='message'
            value={formData.message}
            onChange={handleChange}
            rows={4}
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactInformation;
