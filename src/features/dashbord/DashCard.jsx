import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import capture1 from "../../asset/capture1.jpeg";
import image3 from "../../asset/image3.jpg";

function DashCard() {
  return (
    <Container fluid className="p-3">
      <Row className="mb-5">
        {/* First Card */}
        <Col xs={12} md={6} className="mb-4">
          <div
            style={{
              backgroundImage: `url(${capture1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "60vh", // Increased height for the background image
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card
              style={{
                backgroundColor: "white",
                padding: "1.5rem",
                borderTop: "4px solid blue",
                borderBottom: "4px solid blue",
                width: "80%", // Adjusted width
              }}
            >
              <Card.Body className="text-center">
                <h2 className="text-primary">Vision Statement</h2>
                <p className="text-primary">
                  Safe roads, Save life and Environment
                </p>
              </Card.Body>
            </Card>
          </div>
        </Col>

        {/* Second Card */}
        <Col xs={12} md={6} className="mb-4">
          <div
            style={{
              backgroundImage: `url(${image3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "60vh", // Increased height for the background image
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card
              style={{
                backgroundColor: "white",
                padding: "1rem",
                borderTop: "4px solid blue",
                borderBottom: "4px solid blue",
                width: "80%", // Adjusted width
              }}
            >
              <Card.Body className="text-center">
                <h2 className="text-primary">Mission Statement</h2>
                <p className="text-primary">
                  To ensure safety of roads, vehicle and pedestrian through
                  effective road safety management.
                </p>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default DashCard;
