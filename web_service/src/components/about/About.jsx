import React, { forwardRef } from 'react';
import {Image, Transformation } from 'cloudinary-react';

import './about.css';

const About = forwardRef((props, ref) => {
    return (
      <section ref={ref} className='aboutContainer'>
        <h1 className='sectionHeader'>About</h1>
        <div className='innerContainer'>
          <div className='aboutContent'>
            <p>  
            
            </p>
            <p>  
            Striving to build a more intuitive and accessible world of technology through collaboration and innovation. 
            </p>
            <p>  
            Coming from a background in logistics and distribution has strengthened my ability to communicate effectively in a team based environment and meet essential deadlines.
            </p>
          </div>
          <div className='imageContainer'>
            <Image 
              className='myselfImage' src='https://placekitten.com/300/400' alt="kitten" >
              <Transformation width='700' quality='90' crop="scale"/>
            </Image>
          </div>
        </div>
      </section>
    )
})
export default About;
