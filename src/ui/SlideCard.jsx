import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image from "../asset/image.jpeg";
import image1 from "../asset/image1.jpeg";
import image22 from "../asset/image22.jpg";

function SlideCard() {
  const captionStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "80%",
    textAlign: "center",
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0)",
    padding: "1rem",
    borderRadius: "10px",
  };

  // Image style for larger screens
  const imageStyle = {
    width: "100%",
    height: "500px", // Height for desktop screens
    objectFit: "cover",
  };

  // Image style for smaller devices
  const smallScreenImageStyle = {
    height: "250px", // Smaller height for mobile screens
    objectFit: "cover",
  };

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={image}
          alt="First slide"
          style={window.innerWidth < 768 ? smallScreenImageStyle : imageStyle}
        />
        <Carousel.Caption style={captionStyle}>
          <h2 className="text-info">GOALS</h2>
          <h3>
            Whereas the founder of this Organization TANZANIA ROAD ACCIDENT
            COMBUSTION are desirous of participating in the National development
            processes by sharing knowledge, skills, experience, and expertise to
            provide services to the Community.
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={image22}
          alt="Second slide"
          style={window.innerWidth < 768 ? smallScreenImageStyle : imageStyle}
        />
        <Carousel.Caption style={captionStyle}>
          <h2 className="text-info">KNOWLEDGE</h2>
          <h3>
            The majority of people lack knowledge about road safety education
            and their legal rights. Additionally, accidents cause significant
            losses to life, health, property, and the environment.
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={image1}
          alt="Third slide"
          style={window.innerWidth < 768 ? smallScreenImageStyle : imageStyle}
        />
        <Carousel.Caption style={captionStyle}>
          <h2 className="text-info">CHALLENGE</h2>
          <h3>
            Recognition of the challenges and problems faced by citizens,
            particularly children, youth, women, and the elderly, in ensuring
            road safety, access to justice, human rights, and knowledge of
            governance and the rule of law.
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SlideCard;
