import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import imagepro1 from '../../asset/imageg.jpg';
import imagepro2 from '../../asset/image22.jpg';
import { Link } from 'react-router-dom';

function ProjCardRow() {
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);

  const backgroundStyle1 = {
    backgroundImage: `url(${imagepro1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '40vh',
    width: '160%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    padding: '3rem'
  };

  const backgroundStyle2 = {
    backgroundImage: `url(${imagepro2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '40vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    padding: '3rem'
  };

  const cardStyle = {
    backgroundColor: 'white',
    padding: '2rem',
    width: '80%',
    maxWidth: '800px',
    borderTop: '4px solid blue',
    marginTop: '-3rem',
    marginBottom: '3rem'
  };

  return (
    <Container>
      <Row style={{ display: 'flex', justifyContent: 'center' }}>
        <Col md={4} className="mb-1">
          <div style={backgroundStyle2}></div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={cardStyle}>
              <h4 style={{ color: 'blue', textAlign: 'center', marginBottom: '1rem' }}>
              Tanzania Road Safety Education Program<br /><br />
              </h4>
              <p style={{ lineHeight: '2.2' }}>
                {showMore1 ? (
                  <>
                    Project Overview: This project focuses on educating Tanzanians about road safety through an online learning platform. The goal is to provide accessible and engaging educational content on road rules, accident prevention, and safety measures for drivers, pedestrians, and cyclists. The platform will feature interactive videos, quizzes, and downloadable materials tailored for different age groups, including children, youth, and adults.
                  </>
                ) : (
                  'This platform will provide safety tips, accident prevention measures, and legal rights information.'
                )}
              </p>
              <Link
                className="text-primary text-decoration-none"
                onClick={() => setShowMore1(!showMore1)}
              >
                {showMore1 ? 'Show Less' : 'Explore'}
              </Link>
            </div>
          </div>
        </Col>

        <Col md={4} className="mb-1">
          <div style={backgroundStyle1}></div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={cardStyle}>
              <h4 style={{ color: 'blue', textAlign: 'center', marginBottom: '1rem' }}>
                Tanzania Road Accident Data Analysis & Dashboard<br /><br />
              </h4>
              <p style={{ lineHeight: '2.2' }}>
                {showMore2 ? (
                  <>
                    This project focuses on building a website that collects and analyzes road accident data in Tanzania. The website will display accident statistics like frequency, causes, and trends through interactive charts and graphs. It will help identify dangerous locations and predict when accidents are more likely to happen. The goal is to provide valuable insights for the government, NGOs, and the public, allowing them to make informed decisions about road safety improvements and accident prevention strategies.
                  </>
                ) : (
                  'This project analyzes road accident data and provides insights for safety improvements.'
                )}
              </p>
              <Link
                className="text-primary text-decoration-none"
                onClick={() => setShowMore2(!showMore2)}
              >
                {showMore2 ? 'Show Less' : 'Explore'}
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProjCardRow;
