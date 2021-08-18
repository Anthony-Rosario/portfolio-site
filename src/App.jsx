import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route } from 'react-router-dom';
import LandingPage from './components/Landing/LandingPage';
import Techstack from './components/Tech Stack/Techstack';
import Projects from './components/Projects/Projects';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/" >
          <LandingPage />
        </Route>
        <Route exact path = "/tech-stack" >
          <Techstack />
        </Route>
        <Route exact path = "/projects" >
          <Projects />
        </Route>
      </Switch>
    </Router>
  );
}
