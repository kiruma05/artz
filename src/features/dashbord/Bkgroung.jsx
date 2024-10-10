import React from "react";
import video3 from "../../asset/video3.mp4";
import { Container } from "react-bootstrap";

function Bkgroung() {
  return (
    <Container
      fluid
      className="p-0 overflow-hidden"
      style={{ padding: "0", height: "100vh" }}
    >
      <div
        style={{
          position: "absolute",
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          margin: "5px",
          overflow: "hidden",
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "80%",
            objectFit: "cover",
            zIndex: "-1",
            borderBottomLeftRadius: "120px",
            borderBottomRightRadius: "120px",
          }}
        >
          <source src={video3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div
          style={{
            position: "relative",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(27, 155, 177, 0.3)",
            padding: "20px",
            borderBottomLeftRadius: "280px",
            borderBottomRightRadius: "280px",
            boxShadow: "0 30px 30px rgba(8, 8, 8, 0.941)",
            color: "white",
            zIndex: "1",
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          <h1 className="text-primary" style={{ fontSize: "2.5rem" }}>
            WELCOME TO TRAC WEBSITE
          </h1>
        </div>
      </div>
    </Container>
  );
}

export default Bkgroung;
