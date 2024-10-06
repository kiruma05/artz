import React from "react";
import ButtonCard from "../features/dashbord/ButtonCard";
import Bkgroung from "../features/dashbord/Bkgroung";
import DashCard from "../features/dashbord/DashCard";
import DashCard2 from "../features/dashbord/DashCard2";
import SlideCard from "../ui/SlideCard";
import { Container, Row, Col } from "react-bootstrap";

function Dashboard() {
  return (
    <Container fluid className="p-3">
      <Row className="mb-3">
        <Col xs={12}>
          <Bkgroung />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xs={12} md={12}>
          <DashCard />
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={12}>
          <DashCard2 />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xs={12}>
          <SlideCard />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xs={12}>
          <ButtonCard />
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
