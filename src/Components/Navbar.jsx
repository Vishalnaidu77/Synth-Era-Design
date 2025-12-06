import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    let a = ["Collection", "Concept", "Editorials", "Lookbook"]

    const navbar = useRef()

    useGSAP(() => {
    gsap.from('.logo-img', { 
      x: -40, 
      opacity: 0, 
      duration: 1, 
      ease: 'power2.out' 
    })
    
    gsap.from('.nav-link', { 
      y: -20, 
      opacity: 0, 
      duration: 0.8, 
      stagger: 0.2, 
      ease: 'power2.out', 
      delay: 0.2 
    })
    
    gsap.fromTo('.preorder-btn', 
      { 
        x: 50, 
        opacity: 0,
      },
      { 
        x: 0, 
        opacity: 1,
        duration: 1, 
        ease: 'circ.out',
        delay: 0.4
      }
    )
  }, { scope: navbar })

  return (
      <nav ref={navbar} className='w-full h-16 sm:h-20 flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 relative z-[100]'>
        <div className="logo">
           <img src="../LOGO.svg" alt="Logo" className='logo-img h-6 sm:h-7 md:h-8'/>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex links gap-4 lg:gap-8 xl:gap-20">
            {a.map((val, idx) => {
                return <a href="#" key={idx} className='nav-link text-[#fffdfa] text-sm lg:text-base hover:text-[#ABA29A] transition-colors'>{val}</a>
            })}
        </div>
        <button className='preorder-btn opacity-0 hidden md:block border border-[#ABA29A] py-1 px-3 lg:py-2 lg:px-4 rounded text-[#fffdfa] text-sm lg:text-base hover:bg-[#ABA29A] hover:text-[#232222] transition-all'>Preorder</button>
        
        {/* Mobile Menu Button */}
        <button 
          className='md:hidden text-[#fffdfa] text-2xl z-[101]'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <IoClose /> : <HiMenuAlt3 />}
        </button>
        
        {/* Mobile Menu */}
        <div className={`md:hidden fixed top-0 right-0 h-screen w-64 bg-[#1a1a1a] transform transition-transform duration-300 ease-in-out z-[100] ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col items-start gap-6 pt-24 px-8">
            {a.map((val, idx) => {
                return <a href="#" key={idx} className='text-[#fffdfa] text-lg hover:text-[#ABA29A] transition-colors' onClick={() => setIsMenuOpen(false)}>{val}</a>
            })}
            <button className='r border-[#ABA29A] py-2 px-6 rounded text-[#fffdfa] mt-4 w-full hover:bg-[#ABA29A] hover:text-[#232222] transition-all'>Preorder</button>
          </div>
        </div>
      </nav>
  )
}

export default Navbar
