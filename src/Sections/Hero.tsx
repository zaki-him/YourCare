import React from 'react'
import { assets } from '../assets/assets'

const Hero: React.FC = () => {
  return (
    <section id='#' className='py-16 px-8 flex items-center justify-between flex-wrap'>
      <div className='flex flex-col gap-10 md:gap-14'>
        <h1 className='text-5xl font-semibold'>Transform <span className='background bg-clip-text text-transparent'>Your Health</span></h1>
        <p className='max-w-xl text-xl text'>Explore a variety of tailored services aimed at enhancing your overall health and wellness.</p>

        <div className='flex items-center gap-6'>
          <a href="#about" className='background text-white px-6 py-4 rounded-full'>Learn more</a>
          <a href="#contact" className='bg-white px-6 py-4 rounded-full border-2 border-blue-400'>Contact us</a>
        </div>
      </div>

      <div className='max-w-xl hidden'>
        <img src={assets.hero_img} alt=""  className='w-full'/>
      </div>
    </section>
  )
}

export default Hero