import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Container } from 'react-bootstrap';

export default function Form1() {
  // State to hold form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    location: '',
    areaOfInterest: ''
  });

  const navigate = useNavigate();  

  const inputStyle = {
    border: 'none',
    borderBottom: '0.1px solid blue',
    borderRadius: '0',
    padding: '10px 5px',
    width: '100%',
    boxSizing: 'border-box',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: 'black',
  };

  const buttonStyle = {
    padding: '10px 40px',
    fontSize: '30px',
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };


  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Create a new object with keys that match your PHP backend expectations
    const dataToSubmit = {
      fname: formData.firstName,
      email: formData.lastName,  // Assuming you're using this for the email field
      phone: formData.phoneNumber,
      location: formData.location,
      interest: formData.areaOfInterest,
    };
  
    console.log("Submitting form with data:", dataToSubmit); // Log the converted data
  
    axios.post('http://localhost/backendPhp/user', dataToSubmit)
      .then(function(response) {
        console.log(response.data);
        navigate('/');  // Redirect on successful submission
      })
      .catch(function(error) {
        console.error("There was an error submitting the form!", error);
      });
  };
  


  return (
    <Container fluid className='m-10px' style={{ padding: '4rem' }}>
      <div>
        <h2 className='text-primary' style={{ padding: '0.5rem' }}>Join as a Volunteer</h2>
      </div>
      <form style={{ border: '3px solid blue', padding: '20px' }} onSubmit={handleSubmit}>
        <MDBRow className='mb-4'>
          <MDBCol md='6' sm='12'>
            <label htmlFor='firstName' style={labelStyle}>First name*</label>
            <MDBInput
             id='firstName'
             name='fname'
              style={inputStyle}
              value={formData.firstName}
               onChange={handleInputChange}
/>

          </MDBCol>
          <MDBCol md='6' sm='12'>
            <label htmlFor='lastName' style={labelStyle}>Email</label>
            <MDBInput
              id='lastName'
              name='email'
              style={inputStyle}
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </MDBCol>
        </MDBRow>

        <MDBRow className='mb-4'>
          <MDBCol md='6' sm='12'>
            <label htmlFor='phoneNumber' style={labelStyle}>Phone number*</label>
            <MDBInput
              id='phoneNumber'
              name='phone'
              style={inputStyle}
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </MDBCol>
          <MDBCol md='6' sm='12'>
            <label htmlFor='location' style={labelStyle}>Location</label>
            <MDBInput
              id='location'
              name='location'
              style={inputStyle}
              value={formData.location}
              onChange={handleInputChange}
            />
          </MDBCol>
        </MDBRow>

        <label htmlFor='areaOfInterest' style={labelStyle}>Area of Interest</label>
        <MDBInput
          wrapperClass='mb-4'
          textarea
          id='areaOfInterest'
          name='interest'
          rows={4}
          style={inputStyle}
          value={formData.areaOfInterest}
          onChange={handleInputChange}
        />

        <MDBRow className='mb-4'>
          <MDBBtn
            className='mb-4'
            type='submit'
            block
            style={buttonStyle}
          >
            Join Now
          </MDBBtn>
        </MDBRow>

      </form>
    </Container>
  );
}
