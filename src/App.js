import React from 'react';
import './App.scss';
import Header from './components/header';
import Projects from './components/projects';
import About from './components/about';
import Home from './components/home';
import Contact from './components/contact';

function App() {
  return (
    <div className="page-layout">
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>

  )
}

export default App;
