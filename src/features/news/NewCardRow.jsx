import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import imagenew1 from '../../asset/imagenew1.webp';
import imagenew2 from '../../asset/imagenew2.webp';
import imagenew3 from '../../asset/imagenew3.webp';
import imagenew4 from '../../asset/imagenew4.webp';
import imagenew5 from '../../asset/imagenew5.webp';
import imagenew6 from '../../asset/imagenew6.webp';

function NewCardRow() {
  return (
    <Container style={{ padding: '2rem', backgroundColor: '#f4f4f4' }}>
      <Row className="justify-content-center">
        <Col md={4} className="mb-4">
          <Card style={{ backgroundColor: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Card.Img variant="top" src={imagenew1} />
            <Card.Body style={{ width: '80%', margin: '0 auto' }}>
              <Card.Title style={{ color: 'blue' }}>Pro Image 1</Card.Title>
              <Card.Text>
                Some description about Pro Image 1.
              </Card.Text>
              <Link variant="primary" href="#pro1">Read More</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card style={{ backgroundColor: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Card.Img variant="top" src={imagenew2} />
            <Card.Body style={{ width: '80%', margin: '0 auto' }}>
              <Card.Title style={{ color: 'blue' }}>Pro Image 2</Card.Title>
              <Card.Text>
                Some description about Pro Image 2.
              </Card.Text>
              <Link variant="primary" href="#pro2">Read More</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={4} className="mb-4">
          <Card style={{ backgroundColor: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Card.Img variant="top" src={imagenew3} />
            <Card.Body style={{ width: '80%', margin: '0 auto' }}>
              <Card.Title style={{ color: 'blue' }}>Pro Image 1</Card.Title>
              <Card.Text>
                Some description about Pro Image 1.
              </Card.Text>
              <Link variant="primary" href="#pro1">Read More</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card style={{ backgroundColor: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Card.Img variant="top" src={imagenew4} />
            <Card.Body style={{ width: '80%', margin: '0 auto' }}>
              <Card.Title style={{ color: 'blue' }}>Pro Image 2</Card.Title>
              <Card.Text>
                Some description about Pro Image 2.
              </Card.Text>
              <Link variant="primary" href="#pro2">Read More</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={4} className="mb-4">
          <Card style={{ backgroundColor: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Card.Img variant="top" src={imagenew5} />
            <Card.Body style={{ width: '80%', margin: '0 auto' }}>
              <Card.Title style={{ color: 'blue' }}>Pro Image 1</Card.Title>
              <Card.Text>
                Some description about Pro Image 1.
              </Card.Text>
              <Link variant="primary" href="#pro2">Read More</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card style={{ backgroundColor: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Card.Img variant="top" src={imagenew6} />
            <Card.Body style={{ width: '80%', margin: '0 auto' }}>
              <Card.Title style={{ color: 'blue' }}>Pro Image 2</Card.Title>
              <Card.Text>
                Some description about Pro Image 2.
              </Card.Text>
              <Link variant="primary" href="#pro2">Read More</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default NewCardRow;
