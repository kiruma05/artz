import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image from '../asset/image.jpeg'; 
import image1 from '../asset/image1.jpeg'; 
import image22 from '../asset/image22.jpg';

function SlideCard() {
  const captionStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '60%',
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    padding: '1rem',
    borderRadius: '10px', 
    
  };

  const imageStyle = {
    height: '400px', 
    objectFit: 'cover',
    padding: '3rem' 
  };

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image} 
          alt="First slide" 
          style={imageStyle}
        />
        <Carousel.Caption style={captionStyle}>
          <h2 className='text-info'>GOALS</h2>
          <h3>Whereas the founder of this Organization TANZANIA ROAD ACCIDENT COMBUSTION are desirous of participating in the National development processes by Sharing knowledge skills, experience and expertise to provide services to the Community</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image22} 
          alt="Second slide" 
          style={imageStyle}
        />
        <Carousel.Caption style={captionStyle}>
        <h2 className='text-info'>KNOWLEDGE</h2>
          <h3>The Majority of people lacks knowledge on the roads education information and 
          their legal rights while on other hand people are faced with accidents in their daily 
          life which result to loss of their life, health, property and environmental issues as well.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1} 
          alt="Third slide"
          style={imageStyle}
        />
        <Carousel.Caption style={captionStyle}>
        <h2 className='text-info'>CHALLENGE</h2>
          <h3>The recognition of the challenging demands and existing problems of the Citizen in Tanzania particularly Children, youth, Women and old people towards Safety of the roads on their daily uses access to justice human rights and general knowledge on matter pertaining governance and rule of Law.</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SlideCard;
