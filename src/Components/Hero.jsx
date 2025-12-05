import React from 'react'
import { MdOutlineRemoveRedEye } from "react-icons/md";

const Hero = () => {
  return (
    <div className='relative w-full h-[60%] flex justify-center'>
      <h1 className='text-[19rem] absolute -top-24 racing-sans z-22 brand uppercase'>Synth Era</h1>
      <img src="../Jacket.svg" alt="Jacket" className='h-[650px] z-55 absolute'/>
      <div className="sub-heading flex gap-[420px] absolute top-36">
        <h1 className='text-[13rem] text-[#762193] bilbo z-66'>Modern</h1>
        <h1 className='text-[13rem] text-[#762193] bilbo z-66'>Armor</h1>
      </div>
      <h1 className='text-white text-6xl bilbo absolute left-34 top-90'>Created for you</h1>
      <div className='text-white w-full flex justify-between h-52 items-center px-22 absolute top-[430px]'>
        <div className="">
            <h1 className='racing-sans text-2xl'>LIMITED PRE-ORDER</h1>
            <h3 className='font-[helvetica] text-[#c6c6c6] text-base tracking-wider'>
                Own the next-generation <br />
                jacket engineered for you <br />
                comfort and bold individuality
            </h3>
        </div>
      </div>
      <div className="h-52 w-42 bg-[#ffffff1c] text-white rounded-3xl absolute right-32 top-[420px] flex flex-col gap-2 justify-center items-start px-5.5">
            <h1 className='racing-sans text-lg'>THIS MONTH'S EXCLUSIVE</h1>
            <p className='text-sm text-[#c6c6c6]'>Pre-order now and unlock exclusive pricing this month.</p>
            <div className="call-to-action flex items-center text-sm font-bold gap-2">
                <h5>See more info</h5> 
                <div className="circle border p-1 rounded-full">
                    <MdOutlineRemoveRedEye />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
