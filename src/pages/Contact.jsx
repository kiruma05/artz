import React from 'react';
import ContDash from '../features/contact/ContDash'
import Form1 from '../features/contact/Form1';
import Form2 from '../features/contact/Form2';
import Form3 from '../features/contact/Form3';


function Contact() {
  return (
    <>
    <ContDash />
    <Form1 style={{ margin: '200px 0' }}/>
    <Form2 style={{ margin: '200px 0' }}/>
    <Form3 style={{ margin: '200px 0' }}/>
   
    
    </>
  )
}

export default Contact