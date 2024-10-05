import React from 'react';
import ButtonCard from '../features/dashbord/ButtonCard';
import Bkgroung from '../features/dashbord/Bkgroung';
import DashCard from '../features/dashbord/DashCard';
import DashCard2 from '../features/dashbord/DashCard2';
import SlideCard from '../ui/SlideCard';

import { Container } from 'react-bootstrap';

function Dashboard() {
  return (
    <Container fluid style={{ padding: '5px', margin: '5px', width: '100vw' }}>
    <Bkgroung />
    <DashCard />
    <div style={{ margin: '20px 0' }}>
        <DashCard2 />
      </div>
      
      <div style={{ margin: '20px 0', paddingBottom: '95px' }}>
        <SlideCard />
      </div>

    <div style={{ margin: '60px 0' }}>
    <ButtonCard />
    </div>
    
      <div style={{ margin: '20px 0' }}>
       
      </div>
    </Container>
  );
}

export default Dashboard;
