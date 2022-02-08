import React, { forwardRef } from 'react';
import ProjectList from './ProjectList';


const Portfolio = forwardRef((props, ref) => (
  <section ref={ref} className='projectContainer'>
    <h1 className='sectionHeader'>Projects</h1>
    <ProjectList/>
    <h1 className='sectionHeader'>Tech Stack</h1>
  </section>
));
  
export default Portfolio;
