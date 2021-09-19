import React from 'react';
import About from '../about/About';
import Header from '../header/Header';
import './landing.css'
import Projects from '../projects/Projects';
import ContactForm from '../contact/ContactForm';
import { useScroll } from '../../hooks/useScroll';
import { BsArrowDownShort } from 'react-icons/bs'

export default function LandingPage() {
  const {
    handlePortfolioScroll,
    handleAboutScroll,
    handleContactScroll,
    portfolioRef,
    aboutRef,
    contactRef
  } = useScroll();
  return (
    <main>
      <Header 
        handlePortfolioScroll={handlePortfolioScroll}
        handleAboutScroll={handleAboutScroll}
        handleContactScroll={handleContactScroll}
      />
      <section
        className='landingContainer' >
        <div className='centerContent'>
          <img className='landing-img' src='https://placekitten.com/200/300' alt="kitten" />
          <h3 className='greeting'>Hello! My Name is</h3>
          <h1 className='name'>Anthony Rosario.</h1>
          <h3 className='statement'>
            I am a Software Engineer based in the Bay Area, California.  
          </h3>
        </div>
        <div className='chevronDiv'>
          <BsArrowDownShort
            onClick={handleAboutScroll}
            size='4rem' 
            style={{color:'rgba(85, 85, 85, 0.646)'}}/>
        </div>
      </section>
      <About ref={aboutRef}/>
      <Projects ref={portfolioRef}/>
      <ContactForm ref={contactRef}/>
    </main>
  )
}

