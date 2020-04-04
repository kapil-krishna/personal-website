import React from 'react';
import './App.scss';
import Header from './components/header';
import Projects from './components/projects';
import About from './components/about';
import Home from './components/home';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="page-layout">
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>

  )
}

export default App;
