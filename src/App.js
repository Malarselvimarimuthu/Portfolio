import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Skills from './pages/Skills';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Achievements from './pages/Achievements';
import Experience from './pages/Experience';
import About from './pages/About';
import CustomCursor from './components/customCursor';
import './App.css';
function App() {
  return (
    <div className="App cursor-none">
      <CustomCursor />
      <Navbar />

      {/* Main Content Area */}
      <main className="pt-16"> {/* Added padding-top to account for fixed navbar */}
        <section id="home">
          <Home />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="achievements">
          <Achievements />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="about">
          <About />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;