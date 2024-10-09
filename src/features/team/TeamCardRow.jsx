import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import imagetem3 from "../../asset/imagetem3.png";
import imagetem4 from "../../asset/imagetem4.jpeg";
import imagetem5 from "../../asset/imagetem5.jpeg";
import { Link } from "react-router-dom";

function TeamCardRow() {
  const [showMore, setShowMore] = useState({
    chairperson: false,
    directorGeneral: false,
    financialManager: false,
  });

  const toggleText = (role) => {
    setShowMore((prevState) => ({ ...prevState, [role]: !prevState[role] }));
  };

  const backgroundStyle3 = {
    backgroundImage: `url(${imagetem5})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
    width: "300px",
    borderRadius: "60%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
    padding: "3rem",
    position: "relative",
    margin: "0rem 2",
  };

  const backgroundStyle4 = {
    backgroundImage: `url(${imagetem4})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
    width: "300px",
    borderRadius: "60%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
    padding: "3rem",
    position: "relative",
    margin: "0rem 0",
  };

  const backgroundStyle5 = {
    backgroundImage: `url(${imagetem3})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
    width: "300px",
    borderRadius: "60%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
    padding: "3rem",
    position: "relative",
    margin: "0rem 0",
  };

  const cardStyle = {
    backgroundColor: "white",
    padding: "2rem",
    width: "80%",
    maxWidth: "800px",
    borderTop: "4px solid blue",
    marginTop: "2rem",
    marginBottom: "0.5rem",
  };

  return (
    <Container>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <Col md={3} className="mb-4">
          <div style={backgroundStyle4}></div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={cardStyle}>
              <h4
                style={{
                  color: "blue",
                  textAlign: "center",
                  marginBottom: "1rem",
                }}
              >
                Chairperson
                <br />
                <br />
              </h4>
              <p style={{ lineHeight: "2.2" }}>
                {showMore.chairperson ? (
                  <>
                    There shall be Chairperson of the Organization who; Shall
                    preside over General Meeting of the Organization; Be the
                    spokesman for the Organization; Shall be a signatory to the
                    bank account; Shall be overseer of the Organization's daily
                    activities;
                    <br />
                    <br />
                  </>
                ) : (
                  "There shall be Chairperson of the Organization who; Shall preside over General Meeting..."
                )}
              </p>
              <Link
                className="text-primary text-decoration-none"
                onClick={() => toggleText("chairperson")}
              >
                {showMore.chairperson ? "Show Less" : "Explore"}
              </Link>
            </div>
          </div>
        </Col>

        <Col md={3} className="mb-4">
          <div style={backgroundStyle5}></div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={cardStyle}>
              <h4
                style={{
                  color: "blue",
                  textAlign: "center",
                  marginBottom: "1rem",
                }}
              >
                Director General
                <br />
                <br />
              </h4>
              <p style={{ lineHeight: "2.2" }}>
                {showMore.directorGeneral ? (
                  <>
                    There shall be Director General of the Organization who;
                    Shall call meetings in consultation with the Chairperson;
                    Shall arrange schedule of duties in the office; Shall
                    receive all letters including application letters from new
                    members and to submit them to the General Meeting for
                    approval; Shall keep all documents of the Organization;
                    Shall be a signatory to the Organizations bank account;
                    Shall keep records of all assets of the Organization;
                    <br />
                    <br />
                  </>
                ) : (
                  "There shall be Director General of the Organization who; Shall call meetings..."
                )}
              </p>
              <Link
                className="text-primary text-decoration-none"
                onClick={() => toggleText("directorGeneral")}
              >
                {showMore.directorGeneral ? "Show Less" : "Explore"}
              </Link>
            </div>
          </div>
        </Col>

        <Col md={3} className="mb-4">
          <div style={backgroundStyle3}></div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={cardStyle}>
              <h4
                style={{
                  color: "blue",
                  textAlign: "center",
                  marginBottom: "1rem",
                }}
              >
                Financial Manager
                <br />
                <br />
              </h4>
              <p style={{ lineHeight: "2.2" }}>
                {showMore.financialManager ? (
                  <>
                    There shall be financial Manager of the Organization who;
                    Shall receive and keep all the money of the Organization;
                    Shall prepare the annual budget and estimates of the
                    Organization to be presented to the General Meeting; Shall
                    prepare the financial records of assets, records of accounts
                    and books of account; Shall prepare financial records of
                    statements of income and expenditure and submit the said
                    documents together with audited report to the General
                    Meeting; Shall be a signatory to the bank account;
                    <br />
                    <br />
                  </>
                ) : (
                  "There shall be financial Manager of the Organization who; Shall receive and keep..."
                )}
              </p>
              <Link
                className="text-primary text-decoration-none"
                onClick={() => toggleText("financialManager")}
              >
                {showMore.financialManager ? "Show Less" : "Explore"}
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default TeamCardRow;
