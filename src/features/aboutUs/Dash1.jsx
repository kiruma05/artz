//import React, { useState } from 'react';
import image3 from '../../asset/image1.jpeg';

function Dash1() {
  // const [hoveredButton, setHoveredButton] = useState(null);

  const backgroundStyle = {
    backgroundImage: `url(${image3})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '80vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    padding: '1rem'
  };

  const cardStyle = {
    backgroundColor: 'white',
    padding: '2rem',
    width: '90%',
    maxWidth: '900px', 
    //boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginTop: '-3rem',
    marginBottom: '3rem'
  };

  

  // const buttonStyle = {
  //   backgroundColor: 'blue',
  //   color: 'white',
  //   padding: '0.5rem 1.5rem',
  //   border: 'none',
  //   borderRadius: '4px',
  //   textDecoration: 'none',
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  //   transition: 'background-color 0.3s ease',
  //   flex: '1',
  //   marginRight: '0.5rem',
  //   cursor: 'pointer'
  // };

  

  return (
    <div>
      {/* Background Section */}
      <div style={backgroundStyle}>
      </div>

      {/* Card Section */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={cardStyle}>
          <h1 style={{ color: 'blue', textAlign: 'center', marginBottom: '1rem' }}>About TRAC<br /><br /></h1>
          <p style={{ lineHeight: '2.2' }}>
            <strong> Registration: </strong>
          The Organization shall be registered as a Non Governmental Organization under the Non Governmental
          Organizations Act, No. 24 of 2002 as amended from time to time.<br />
          <strong>Head Office: </strong>
          The head office will be based at MAKULU STAND street, nearby University of Dodoma, 17 MAKULU ward, Dodoma
          District, Dodoma Region
           P. O BOX 2580 .<br />
          <strong>Area of Operation: </strong>
          The Organization shall operate in National.<br />

            <br /><br />
          </p>
          {/* <div style={buttonContainerStyle}>
            <a 
              href="#impact" 
              style={getButtonStyle('impact')}
              onMouseEnter={() => setHoveredButton('impact')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              View Our Impact
            </a>
            <a 
              href="#donate" 
              style={getButtonStyle('donate')}
              onMouseEnter={() => setHoveredButton('donate')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              Donate Now
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Dash1;
