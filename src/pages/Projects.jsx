import React from 'react';
import ProjDash1 from '../features/project/ProjDash1';
import ProCardRow from '../features/project/ProCardRow';

function Projects() {
  return (
  <>
    <ProjDash1 />
    <div style={{ margin: '20px 0' }}>
    <ProCardRow />
    </div>
    
    </>
  )
}

export default Projects