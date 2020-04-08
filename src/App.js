import React from 'react';
import './App.scss';
import Header from './components/header/header';
import AllProjects from './components/all-projects/allProjects';
import About from './components/about/about';
import Home from './components/home/home';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="page-layout">
      <Header />
      <Home />
      <About />
      <AllProjects />
      <Contact />
      <Footer />
    </div>

  )
}

export default App;
