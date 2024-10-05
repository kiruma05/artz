import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Container } from 'react-bootstrap';

export default function Form1() {
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



//   const inputFocusStyle = {
//     outline: 'none',
//     boxShadow: 'none',
//     borderBottom: '1px solid blue',
//   };

  return (
    <Container fluid className='m-10px' style={{padding: '4rem'}}>
      <div><h2 className='text-primary' style={{padding: '0.5rem'}}>Partnership Opportunities</h2></div>
      <form style={{ border: '3px solid blue', padding: '4rem' }}>
        <MDBRow className='mb-4'>
          <MDBCol md='6' sm='12'>
            <label htmlFor='form6Example1' style={labelStyle}>Organization/Company Name</label>
            <MDBInput 
              id='form6Example1' 
              style={inputStyle}
              inputProps={{
                
                onBlur: (e) => e.target.style = inputStyle
              }}
            />
          </MDBCol>
          <MDBCol md='6' sm='12'>
            <label htmlFor='form6Example2' style={labelStyle}>Contact Person's Name</label>
            <MDBInput 
              id='form6Example2' 
              style={inputStyle}
              inputProps={{
                
                onBlur: (e) => e.target.style = inputStyle
              }}
            />
          </MDBCol>
        </MDBRow>

        <MDBRow className='mb-4'>
          <MDBCol md='6' sm='12'>
            <label htmlFor='form6Example3' style={labelStyle}>Address</label>
            <MDBInput 
              id='form6Example3' 
              style={inputStyle}
              inputProps={{
                
                onBlur: (e) => e.target.style = inputStyle
              }}
            />
          </MDBCol>
          <MDBCol md='6' sm='12'>
            <label htmlFor='form6Example4' style={labelStyle}>Contact Number*</label>
            <MDBInput 
              id='form6Example4' 
              style={inputStyle}
              inputProps={{
                
                onBlur: (e) => e.target.style = inputStyle
              }}
            />
          </MDBCol>
        </MDBRow>

        <label htmlFor='form6Example7' style={labelStyle}>Social Media Handles</label>
        <MDBInput 
          wrapperClass='mb-4' 
          textarea 
          id='form6Example7' 
          rows={4} 
          style={inputStyle}
          inputProps={{
           
            onBlur: (e) => e.target.style = inputStyle
          }}
        />
        <MDBRow className='mb-4'>
        <MDBBtn 
          className='mb-4' 
          type='submit' 
          block 
          style={buttonStyle}
        >
          GET IN TOUCH
        </MDBBtn>
        </MDBRow>
      </form>
    </Container>
  );
}
