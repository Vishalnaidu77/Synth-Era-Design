import React from 'react'

const Navbar = () => {
    let a = ["Collection", "Concept", "Editorials", "Lookbook"]
  return (
      <nav className='w-full h-20 flex justify-between items-center px-12'>
        <div className="logo ">
           <img src="../LOGO.svg" alt="Logo" className='h-8'/>
        </div>
        <div className="links flex gap-8 lg:gap-20">
            {a.map((val, idx) => {
                return <a href="#" key={idx} className=' text-[#fffdfa]'>{val}</a>
            })}
        </div>
        <button className='border border-[#ABA29A] py-1 px-3 rounded text-[#fffdfa]'>Preorder</button>
      </nav>
  )
}

export default Navbar
