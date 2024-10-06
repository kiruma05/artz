import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import image4 from "../../asset/image4.jpeg";
import image5 from "../../asset/image5.jpg";

function DashCard2() {
  return (
    <Container fluid className="p-3">
      <Row className="mb-5">
        {/* First Card */}
        <Col xs={12} md={7} className="mb-4">
          <div
            style={{
              backgroundImage: `url(${image4})`,
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
                padding: "2rem",
                borderTop: "4px solid blue",
                borderBottom: "4px solid blue",
                width: "80%", // Adjusted width for responsiveness
              }}
            >
              <Card.Body className="text-center">
                <h2 className="text-primary">Objectives</h2>
                <p className="text-primary">
                  1. To enhance digital systems to reduce and prevent road
                  accidents.
                  <br />
                  2. To promote road safety policy and plans to reduce and
                  prevent accidents.
                </p>
              </Card.Body>
            </Card>
          </div>
        </Col>

        {/* Second Card */}
        <Col xs={12} md={5} className="mb-4">
          <div
            style={{
              backgroundImage: `url(${image5})`,
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
                width: "80%", // Adjusted width for responsiveness
              }}
            >
              <Card.Body className="text-center">
                <h2 className="text-primary">Objectives</h2>
                <p className="text-primary">
                  3. To raise awareness in the community on the correct use of
                  roads and their signs.
                  <br />
                  4. To create a conducive environment for research and promote
                  national accident policy development.
                </p>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default DashCard2;
