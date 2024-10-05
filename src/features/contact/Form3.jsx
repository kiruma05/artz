import React from 'react';
import {
  MDBRow,
  MDBCol,
  
  MDBBtn
} from 'mdb-react-ui-kit';
import { Container } from 'react-bootstrap';

export default function Form1() {
  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '18px',
    marginBottom: '10px',
    width: '100%',
  };

  const amountButtonStyle = {
    padding: '10px 15px',
    fontSize: '16px',
    marginBottom: '10px',
    width: '100%',
  };

  const buttonStyle1 = {
    padding: '10px 30px',
    fontSize: '20px',
    
  };

  return (
    <Container fluid className='m-10px' style={{ padding: '2rem' }}>
      <h2 className='text-primary' style={{ padding: '0.5rem' }}>Partnership Opportunities</h2>
      <form style={{ border: '3px solid blue', padding: '2rem' }}>
        <h3 className='text-primary' style={{ padding: '1rem' }}>Make a donation <br /></h3>
        <div><p className='text-primary fs-5'>This is your campaign description. It’s a great place to tell visitors what this campaign is about, connect with your donors and draw attention to your cause. <br /></p></div>
        
        {/* First Row - Frequency Buttons */}
        <MDBRow className='mb-4'>
          <MDBCol md='6' sm='12'>
          <MDBBtn color='light' style={{ ...buttonStyle, border: '1px solid blue' }}>
              One Time
            </MDBBtn>
          </MDBCol>
          <MDBCol md='6' sm='12'>
            <MDBBtn color='secondary' style={buttonStyle}>
              Monthly
            </MDBBtn>
          </MDBCol>
        </MDBRow>

        {/* Single Row - Amount Buttons */}
        <MDBRow className='mb-4'>
          <MDBCol md='2' sm='6'>
            <MDBBtn color='secondary' style={amountButtonStyle}>
              Tsh. 100/=
            </MDBBtn>
          </MDBCol>
          <MDBCol md='2' sm='6'>
          <MDBBtn color='light' style={{ ...buttonStyle, border: '1px solid blue' }}>
              Tsh. 200/=
            </MDBBtn>
          </MDBCol>
          <MDBCol md='2' sm='6'>
          <MDBBtn color='light' style={{ ...buttonStyle, border: '1px solid blue' }}>
              Tsh. 300/=
            </MDBBtn>
          </MDBCol>
          <MDBCol md='2' sm='6'>
          <MDBBtn color='light' style={{ ...buttonStyle, border: '1px solid blue' }}>
              Tsh. 400/=
            </MDBBtn>
          </MDBCol>
          <MDBCol md='4' sm='12'>
          <MDBBtn color='light' style={{ ...buttonStyle, border: '1px solid blue' }}>
              Others
            </MDBBtn>
          </MDBCol>
        </MDBRow>

        {/* Submit Button */}
        <MDBRow className='mb-4'>
        <MDBBtn 
          className='mb-4' 
          type='submit' 
          block 
          style={buttonStyle1}
        >
          Donate
        </MDBBtn>
        </MDBRow>

      </form>
    </Container>
  );
}
