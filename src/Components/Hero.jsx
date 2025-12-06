import React from 'react'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);


const Hero = () => {

const container = useRef()

  useGSAP(() => {

    gsap.from('.brand', {
      y: -500,
      opacity: 0,
      ease: 'bounce.out',
      delay: 1,
      duration: 1.5
    })

    gsap.from('.jacket', {
      scale: 0,
      rotate: 360,
      delay: 2.5,
      duration: 1
    })

    gsap.from(".sub-heading > h1, .side-text", {
      opacity: 0,
      duration: 1,
      stagger: 0.4,
      delay: 3
    })
    
  })
  return (
    <div ref={container} className='relative w-full h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] flex justify-center overflow-hidden'>
      {/* Main Brand Text */}
      <h1 className='text-[4rem] sm:text-[6rem] md:text-[10rem] lg:text-[15rem] xl:text-[19rem] 2xl:text-[22rem] absolute -top-8 sm:-top-12 md:-top-16 lg:-top-24 xl:-top-28 racing-sans z-[22] brand uppercase whitespace-nowrap'>Synth Era</h1>
      
      {/* Jacket Image */}
      <img src="../Jacket.svg" alt="Jacket" className='jacket h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] xl:h-[750px] 2xl:h-[850px] z-[55] absolute mt-4 sm:mt-0'/>
      
      {/* Sub-heading: Modern & Armor */}
      <div className="sub-heading flex gap-[100px] sm:gap-[150px] md:gap-[250px] lg:gap-[420px] xl:gap-[500px] 2xl:gap-[600px] absolute top-16 sm:top-24 md:top-28 lg:top-36 xl:top-40">
        <h1 className='text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[13rem] xl:text-[15rem] 2xl:text-[17rem] text-[#762193] bilbo z-[66]'>Modern</h1>
        <h1 className='text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[13rem] xl:text-[15rem] 2xl:text-[17rem] text-[#762193] bilbo z-[66]'>Armor</h1>
      </div>
      
      {/* Created for you */}
      <h1 className='side-text text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl bilbo absolute left-4 sm:left-8 md:left-16 lg:left-34 xl:left-40 top-48 sm:top-60 md:top-72 lg:top-90 xl:top-[440px]'>Created for you</h1>
      
      {/* Bottom Content Container */}
      <div className='text-white w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-4 sm:px-6 md:px-12 lg:px-22 xl:px-28 absolute bottom-4 sm:bottom-8 md:bottom-12 lg:top-[430px] xl:top-[500px] 2xl:top-[580px]'>
        {/* Limited Pre-order */}
        <div className="w-full md:w-auto">
            <h1 className='racing-sans text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl'>LIMITED PRE-ORDER</h1>
            <h3 className='font-[helvetica] text-[#c6c6c6] text-xs sm:text-sm md:text-base lg:text-base xl:text-lg tracking-wider mt-1 sm:mt-2'>
                Own the next-generation <br className='hidden sm:block' />
                jacket engineered for you <br className='hidden sm:block' />
                comfort and bold individuality
            </h3>
        </div>
        
        {/* Exclusive Card */}
        <div className="w-full md:w-auto md:h-52 md:min-w-[280px] lg:w-42 xl:w-[250px] bg-[#ffffff1c] text-white rounded-2xl md:rounded-3xl md:absolute md:right-8 lg:right-32 xl:right-48 2xl:right-24 flex flex-col gap-4 justify-center items-start p-4 sm:p-5 md:px-5.5 mt-4 md:mt-0">
            <h1 className='racing-sans text-base sm:text-lg md:text-lg lg:text-3xl leading-7'>THIS MONTH'S EXCLUSIVE</h1>
            <p className='text-xs sm:text-sm md:text-sm lg:text-base text-[#c6c6c6] leading-5'>Pre-order now and unlock exclusive pricing this month.</p>
            <div className="call-to-action flex items-center text-xs sm:text-sm md:text-sm lg:text-base font-bold gap-6 mt-1">
                <h5>See more info</h5> 
                <div className="circle border p-1 rounded-full hover:bg-white hover:text-[#232222] transition-all cursor-pointer">
                    <MdOutlineRemoveRedEye />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
