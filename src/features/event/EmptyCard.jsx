import React from 'react';
import { Card } from 'react-bootstrap';

function EmptyCard() {
  return (
    <Card 
      style={{ 
        width: '100vw', 
        height: '80vh', 
        backgroundColor: '#f5f5f5', 
        border: 'none', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Card.Body 
        style={{ 
          textAlign: 'center', 
        }}
      >
        <h1 className='fs-1' style={{ color: 'blue', margin: '180px' }}>Upcoming Events...</h1>
      </Card.Body>
    </Card>
  );
}

export default EmptyCard;
