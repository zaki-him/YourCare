import React from 'react'
import { assets } from '../assets/assets'

const Hero: React.FC = () => {
  return (
    <section 
      id='#' 
      className='py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between flex-col lg:flex-row gap-8 lg:gap-12'
    >
      <div className='flex flex-col max-lg:items-center gap-6 md:gap-10 lg:gap-14 w-full lg:w-1/2'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight'>
          Transform <span className='background bg-clip-text text-transparent'>Your Health</span>
        </h1>
        <p className='max-w-xl text-base sm:text-lg md:text-xl text-gray-600'>
          Explore a variety of tailored services aimed at enhancing your overall health and wellness.
        </p>
        <div className='flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6'>
          <a 
            href="#about" 
            className='background text-white px-6 py-3 md:py-4 rounded-full text-center font-medium hover:opacity-90 transition-opacity'
          >
            Learn more
          </a>
          <a 
            href="#contact" 
            className='bg-white px-6 py-3 md:py-4 rounded-full border-2 border-blue-400 text-center font-medium hover:bg-blue-50 transition-colors'
          >
            Contact us
          </a>
        </div>
      </div>
      
      <div className='w-full lg:w-1/2 max-w-xl'>
        <img 
          src={assets.hero_img} 
          alt="Health and wellness illustration" 
          className='w-full h-auto rounded-lg'
        />
      </div>
    </section>
  )
}

export default Hero