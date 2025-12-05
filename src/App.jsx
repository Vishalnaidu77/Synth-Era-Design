import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'

const Gradient = ({ left, top }) => {
  return (
    <div 
      className="gradient absolute" 
      style={{ left: `${left}px`, top: `${top}px` }}
    ></div>
  )
}

function App() {

  return (
    <>
      <Navbar />
      <Gradient left="2" top="-100"/>
      <Gradient left="1200" top="-100"/>
      <Gradient left="500" top="400"/>
      <Hero />
    </>
  )
}

export default App
