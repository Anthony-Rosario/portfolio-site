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
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem 
            Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem 
            Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            </p>
            <p>  
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem 
            Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum 
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem 
            Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem 
            Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            </p>
            <p>  
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem 
            Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
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
