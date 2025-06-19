import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';

function App() {

  return (
    <>
      <div className="font-sans overflow-x-hidden">
      <ThemeToggle />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Menu />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
