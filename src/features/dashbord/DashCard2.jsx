import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import image4 from '../../asset/image4.jpeg'; 
import image5 from '../../asset/image5.jpg'; 

function DashCard2() {
  return (
    <Container fluid className="p-0 overflow-hidden">
      <Row className="g-0">
        <Col md={7} className="position-relative m-5">
          <div style={{ 
            backgroundImage: `url(${image4})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            height: '500px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: '25px',
            padding: 0 
          }}>
            <Card 
              style={{ 
                backgroundColor: 'white', 
                padding: '2rem', 
                borderTop: '4px solid blue',
                borderBottom: '4px solid blue',
                width: '70%' 
              }}
            >
              <Card.Body className="text-center">
                <h2 className="text-primary">Objectives</h2>
                <p className="text-primary">
                1. To enhance digital systems to reduce and prevents road accidents.<br />
                 2. To promote road safety policy and plan to reduce and prevent accidents.<br />
                  3. To empower citizens who have sustained injuries and permanent disabilities due to road accidents.<br />
                </p>
                {/* <Card.Link 
                  href="#" 
                  className="text-blue"
                >
                  Read Stories
                </Card.Link> */}
              </Card.Body>
            </Card>
          </div>
        </Col>

        <Col md={4} className="position-relative">
          <div style={{ 
            backgroundImage: `url(${image5})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            height: '500px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 0 
          }}>
            <Card 
              style={{ 
                backgroundColor: 'white', 
                padding: '1rem', 
                borderTop: '4px solid blue',
                borderBottom: '4px solid blue',
                width: '70%' 
              }}
            >
              <Card.Body className="text-center">
                <h2 className="text-primary">Objectives</h2><br />
                <p className="text-primary">
                4. To raise awareness to the community on correct use of roads and their signs.<br />
                5. To create conducive environment for research and promoting national accident policy development.
                </p>
                {/* <Card.Link 
                  href="#" 
                  className="text-blue"
                >
                  Take Action
                </Card.Link> */}
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default DashCard2;
