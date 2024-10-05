import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

function TeamPp() {
  return (
    <Container>
    <Row className="mt-5 mb-5">
      <Col md={4} className="mb-4">
        <Card style={{ width: '18rem', border: 'none' }} className="text-center">
          <Card.Body className="d-flex flex-column align-items-center text-primary">
            <Card.Title>Alice Boldwin</Card.Title>
            
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">@kiruma_jr!</Card.Link>
            {/* <Card.Link href="#">Another Link</Card.Link> */}
          </Card.Body>
        </Card>
      </Col>

      <Col md={4} className="mb-4">
        <Card style={{ width: '18rem', border: 'none' }} className="text-center">
          <Card.Body className="d-flex flex-column align-items-center text-primary">
            <Card.Title>Card Title 2</Card.Title>
           
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </Col>

      <Col md={4} className="mb-4">
        <Card style={{ width: '18rem', border: 'none' }} className="text-center">
          <Card.Body className="d-flex flex-column align-items-center text-primary">
            <Card.Title>Card Title 3</Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle 3</Card.Subtitle> */}
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>

<Row className="mt-5 mb-5">
<Col md={4} className="mb-1">
  <Card style={{ width: '18rem', border: 'none' }} className="text-center">
    <Card.Body className="d-flex flex-column align-items-center text-primary">
      <Card.Title>Card Title 1</Card.Title>
      
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </Card.Text>
      <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
  </Card>
</Col>

<Col md={4} className="mb-1">
  <Card style={{ width: '18rem', border: 'none' }} className="text-center">
    <Card.Body className="d-flex flex-column align-items-center text-primary">
      <Card.Title>Card Title 2</Card.Title>
      
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </Card.Text>
      <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
  </Card>
</Col>

<Col md={4} className="mb-1">
  <Card style={{ width: '18rem', border: 'none' }} className="text-center">
    <Card.Body className="d-flex flex-column align-items-center text-primary">
      <Card.Title>Card Title 3</Card.Title>
      {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle 3</Card.Subtitle> */}
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </Card.Text>
      <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
  </Card>
</Col>
</Row>
</Container>
  );
}

export default TeamPp;
