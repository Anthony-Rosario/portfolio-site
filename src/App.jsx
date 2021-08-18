import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route } from 'react-router-dom';
import LandingPage from './components/Landing/LandingPage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/" >
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}
