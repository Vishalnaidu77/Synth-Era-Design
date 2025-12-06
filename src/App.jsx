import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Section2 from './Components/Section2'

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
    <main className='min-h-screen'>
      <div className="relative">
        <Navbar />
        {/* Responsive Gradients */}
        <Gradient left="2" top="-50"/>
        <div className="hidden sm:block">
          <Gradient left="300" top="-80"/>
        </div>
        <div className="hidden md:block">
          <Gradient left="600" top="-100"/>
        </div>
        <div className="hidden lg:block">
          <Gradient left="1200" top="-100"/>
        </div>
        <div className="hidden xl:block">
          <Gradient left="1500" top="-100"/>
        </div>
        <Gradient left="150" top="250"/>
        <div className="hidden md:block">
          <Gradient left="500" top="400"/>
        </div>
        <Hero />
      </div>
      <Section2 />
    </main>
  )
}

export default App
