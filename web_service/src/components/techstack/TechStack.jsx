import React, { forwardRef } from 'react';
import './TechStack.css';

const Tech = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="tech-stack-container">
      <h1 className="techstack-header">Tech Stack</h1>
      <section className='tech-stack'>
        <article className='languages-grid'>
          <h4 className="cont">Languages</h4>
          <ul className="languages">
            <li>JavaScript</li>
            <li>HTML/CSS</li>
            <li>TypeScript</li>
          </ul>
        </article>
        <article className='libraries-grid'>
          <h4 className="cont">Libraries</h4>
          <ul className="libraries">
            <li>React</li>
            <li>Redux</li>
            <li>Node</li>
            <li>Express</li>
          </ul>
        </article>
        <article className='devtools-grid'>
          <h4 className="cont">Dev Tools</h4>
          <ul className="tools">
            <li>Git/GitHub</li>
            <li>Heroku</li>
            <li>Postman</li>
          </ul>
        </article>
        <article className='database-grid'>
          <h4 className="cont">Databases</h4>
          <ul className="databases">
            <li>PostgreSQL</li>
            <li>Firebase</li>
          </ul>
        </article>
        <article className='testing-grid'>
          <h4 className="cont">Testing Suites</h4>
          <ul className="testing">
            <li>Jest</li>
            <li>QUnit</li>
            <li>Mocha</li>
          </ul>
        </article>
      </section>
    </section>
  );
});

export default Tech;
