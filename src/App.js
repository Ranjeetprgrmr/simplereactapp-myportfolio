import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 
'react-router-dom';


import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Service from './Service';
import Project from './Project';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';


export default function App() {
  return (
    
    
    <div className="App">
      <Router>
        
            <Navbar />

        <Switch>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/service">
            <Service />
          </Route>

          <Route path="/blog">
            <Blog />
          </Route>

          <Route path="/project">
            <Project />
          </Route>

            <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/">
            <Home />
          </Route>

            
        </Switch>
            <Footer />
    </Router>

  </div>






   
  )
}


