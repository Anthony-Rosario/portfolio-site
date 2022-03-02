import { forwardRef } from 'react';
import {Image, Transformation } from 'cloudinary-react';
import './about.css';

const About = forwardRef((props, ref) => {
    return (
      <section ref={ref} className='aboutContainer'>
        <h1 className='sectionHeader'>About</h1>
        <div className='innerContainer'>
          <div className='aboutContent'>
            <p>  
            Striving to build a more intuitive and accessible world of technology through collaboration and innovation.
            </p>
            <p>  
            Coming from a background in logistics and distribution has strengthened my ability to communicate effectively in a team based environment and meet essential deadlines.
            </p>
            <p>  
            Incredibly excited to dive into new documentation involving ambiguous frameworks and experiment accordingly. I believe being open minded and gaining new perspectives through peer programming leads to a better development lifecycle. 
            </p>
          </div>
          <div className='imageContainer'>
            <Image 
              className='myCatImage' src='./assets/2-eyez-gamin-min.jpg' alt="My Cat 2 Eyez" >
              <Transformation width='700' quality='90' crop="scale"/>
            </Image>
          </div>
        </div>
      </section>
    )
})
export default About;
