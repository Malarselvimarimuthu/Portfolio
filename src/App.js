// src/App.js

import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Skills from './pages/Skills';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Achievements from './pages/Achievements';
import Experience from './pages/Experience';
import About from './pages/About'
import Divider from './components/GradeintDivider'

function App() {
  return (
    <div className="App">
      {/* Header Component */}
      <Header />

      {/* Main Content Area */}
      <main className="">
        <Home />
        {/* <Divider/> */}
        <Skills />
        
        <Projects/>
        <Education/>
        <Achievements/>
        <Experience/>
        <About/>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default App;