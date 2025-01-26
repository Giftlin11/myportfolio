import React from 'react'
import './App.css';
import Header from './Components/header/Header';
import Home from './Components/home/Home';
import About from './Components/about/About';
import Skills from './Components/skills/Skills';
import Qualification from './Components/qualification/Qualification';
import Work from './Components/work/Work';
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';
import ScrollUp from './Components/scrollup/ScrollUp';


const App = () => {
  return (
    <>
    <Header/>
    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Work/>
      <Contact/>
      <Footer/>
      <ScrollUp/>
    </main>
    </>
  )
}

export default App