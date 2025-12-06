import react from 'react';

const Section2 = () => {
    return(
        <div className='bg-[#232222] mt-10'>
            <div className="heading w-full flex items-center flex-col">
                <h1 className='text-white racing-sans text-6xl tracking-tight' >DESIGNED BY PROFESSIONALS.</h1>
                <h2 className='text-[#762193] bilbo text-4xl font-bold'>CREATED FOR YOU</h2>
            </div>
            <div className="info-section h-96">
                <div className="section1 w-96">
                    <h1 className='racing-sans text-3xl text-white'>UNIQUE DESIGN</h1>
                    <p className='text-lg text-[#c6c6c6]'>Each piece is a crafted as a statement - no mass production, only limited drops.</p>
                    <h1 className='racing-sans text-3xl text-white'>LIGHTWEAR COMFORT</h1>
                    <p className='text-lg text-[#c6c6c6]'>Engineered for freedom of movement and efforless wear.</p>
                </div>
                <div className="section2">
                    <h1 className='racing-sans text-3xl text-white'>ADVANCE MATERIAL</h1>
                    <p className='text-lg text-[#c6c6c6]'>Exceptional waterproof and wind-resistancefabrics for any conditions.</p>
                    <h1 className='racing-sans text-3xl text-white'>FUTURE CRAFTSMANSHIP</h1>
                    <p className='text-lg text-[#c6c6c6]'>Precision design meets innovation - built to last, made to inspire.</p>
                </div>
            </div>
        </div>
    )
}

export default Section2;