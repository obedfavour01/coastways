import React from 'react'

const Hero = () => {
  return (
    <div className='flex justify-between items-center h-[97vh] bg-cw-gray bg-local bg-no-repeat'>


      <div className='flex justify-center w-full'>
        <h1 className="xs:text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-center xs:max-lg:flex xs:max-lg:flex-col xs:gap-6">
          <span className='text-cw-black'>Cargo.</span>
          <span className='text-cw-yellow'>Delivery.</span>
          <br className='xs:hidden lg:block' />
          <span className='g:mt-6 lg:block'></span>
          <span className='text-cw-tourq'>Worldwide.</span>
        </h1>
      </div>
    </div>
  )
}

export default Hero