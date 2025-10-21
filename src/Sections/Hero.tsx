import React from 'react'
import { assets } from '../assets/assets'

const Hero: React.FC = () => {
  return (
    <section 
      id='#' 
      className='py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between flex-col lg:flex-row gap-8 lg:gap-12'
    >
      {/* Left Content */}
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

        {/* Stats Section */}
        <div className='flex items-center gap-8 md:gap-12 pt-4'>
          <div>
            <h3 className='text-2xl md:text-3xl font-bold text-gray-900'>13+</h3>
            <p className='text-sm text-gray-600'>Years of experience</p>
          </div>
          <div>
            <h3 className='text-2xl md:text-3xl font-bold text-gray-900'>3.6M+</h3>
            <p className='text-sm text-gray-600'>Trusted by patients</p>
          </div>
          <div>
            <h3 className='text-2xl md:text-3xl font-bold text-gray-900'>85+</h3>
            <p className='text-sm text-gray-600'>Professional Doctor</p>
          </div>
        </div>
      </div>
      
      <div className='w-full lg:w-1/2 relative'>
        <div>
          <img 
            src={assets.hero_img} 
            alt="Health and wellness illustration" 
            className='w-full h-auto rounded-[19%_81%_16%_84%_/_47%_12%_88%_53%]'
          />
        </div>

        {/* Overlapping Card - Best Services */}
          <div 
            className='absolute bottom-4 left-4 bg-white rounded-2xl shadow-lg p-4 max-w-xs'
            style={{
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)'
            }}
          >
            <div className='flex items-start gap-3'>
              <div className='bg-blue-100 p-2 rounded-lg flex-shrink-0'>
                <svg className='w-6 h-6 text-blue-600' fill='currentColor' viewBox='0 0 20 20'>
                  <path d='M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z'/>
                </svg>
              </div>
              <div>
                <h4 className='font-semibold text-gray-900 mb-1'>Best Services</h4>
                <p className='text-sm text-gray-600'>
                  <span className='flex items-center gap-1'>
                    <svg className='w-4 h-4 text-blue-600' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd'/>
                    </svg>
                    Flexible Appointment Scheduling
                  </span>
                </p>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Hero