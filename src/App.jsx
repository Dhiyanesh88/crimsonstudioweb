import React from 'react';
import Header from './components/header';
import Homepage from './components/homepage';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import News from './components/News';
import './App.css';
import Contact from './components/Contact';
import ClipsPage from './components/ClipsPage';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Homepage />
        <About />
        <Projects />
        <Services />
        <News />
        <ClipsPage />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

