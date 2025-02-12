import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Experience from './pages/Experience';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark bg-gray-900 text-white' : "bg-white text-gray-900"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/about' element={ <About/> } />
        <Route path='/projects' element={ <Projects/> } />
        <Route path='/contact' element={<Contact />} />
        <Route path='/experience' element={<Experience />} />
      </Routes>
      <Footer />

    </div>

  );
}

export default App;


