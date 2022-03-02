import { useScroll } from '../../hooks/useScroll';
import { BsArrowDownShort } from 'react-icons/bs'
import About from '../about/About';
import Header from '../header/Header';
import Projects from '../projects/Projects';
import Tech from '../techstack/TechStack';
import ContactForm from '../contact/ContactForm';
import Particle from './Particles';
import './landing.css'

export default function LandingPage() {
  const {
    handlePortfolioScroll,
    handleAboutScroll,
    handleTechScroll,
    handleContactScroll,
    portfolioRef,
    aboutRef,
    techRef,
    contactRef
  } = useScroll();
  return (
    <main>
      <Particle />
      <Header 
        handlePortfolioScroll={handlePortfolioScroll}
        handleAboutScroll={handleAboutScroll}
        handleTechScroll={handleTechScroll}
        handleContactScroll={handleContactScroll}
      />
      <section
        className='landingContainer' >
        <div className='centerContent'>
          <img className='landing-img' src='./assets/headshot-min.jpg' alt="Anthony Rosario - Developer" />
          <h3 className='greeting'>Hello! My Name is</h3>
          <h1 className='name'>Anthony Rosario</h1>
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
      <Tech ref={techRef}/>
      <ContactForm ref={contactRef}/>
    </main>
  )
}

