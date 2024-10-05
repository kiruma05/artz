import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import image2 from '../../asset/image2.jpg'; 
import image3 from '../../asset/image3.jpg'; 

function DashCard() {
  return (
    <Container fluid className="p-0 overflow-hidden">
      <Row className="m-5">
        <Col md={4} className="position-relative m-5">
          <div style={{ 
            backgroundImage: `url(${image2})`, 
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
                width: '75%' 
              }}
            >
              <Card.Body className="text-center">
                <h2 className="text-primary">Vision Statement</h2>
                <p className="text-primary">
                Safe roads, Save life and Environment
                </p>
                {/* <Card.Link 
                  href="#" 
                  className="text-blue"
                >
                  Read More
                </Card.Link> */}
              </Card.Body>
            </Card>
          </div>
        </Col>

        <Col md={7} className="position-relative">
          <div style={{ 
            backgroundImage: `url(${image3})`, 
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
                width: '60%' 
              }}
            >
              <Card.Body className="text-center">
                <h2 className="text-primary">Mission Statement</h2>
                <p className="text-primary">
                To ensure safety of roads, vehicle and pedestrian through effective road safety management.
                </p>
                {/* <Card.Link 
                  href="#" 
                  className="text-blue"
                >
                  Read More
                </Card.Link> */}
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default DashCard;
