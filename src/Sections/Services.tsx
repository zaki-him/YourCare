import React from 'react'
import ServiceCard from '../components/ServiceCard'

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: (
        <svg className='w-8 h-8' fill='currentColor' viewBox='0 0 20 20'>
          <path d='M9 2a1 1 0 000 2h2a1 1 0 100-2H9z'/>
          <path fillRule='evenodd' d='M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z' clipRule='evenodd'/>
        </svg>
      ),
      title: 'Health Monitoring Program',
      description: 'We offer a continuous health monitoring program that keeps you in tune with your well-being, providing real-time insights.',
      featured: true,
    },
    {
      id: 2,
      icon: (
        <svg className='w-8 h-8' fill='currentColor' viewBox='0 0 20 20'>
          <path fillRule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clipRule='evenodd'/>
        </svg>
      ),
      title: 'Integrated Care Plan',
      description: 'Care plans specifically designed to help you achieve long-term health goals with personalized guidance.',
      featured: false,
    },
    {
      id: 3,
      icon: (
        <svg className='w-8 h-8' fill='currentColor' viewBox='0 0 20 20'>
          <path fillRule='evenodd' d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z' clipRule='evenodd'/>
        </svg>
      ),
      title: 'Preventive Health Services',
      description: 'Focused on disease prevention with regular health screenings, vaccinations, and wellness education programs.',
      featured: false,
    },
    {
      id: 4,
      icon: (
        <svg className='w-8 h-8' fill='currentColor' viewBox='0 0 20 20'>
          <path d='M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z'/>
        </svg>
      ),
      title: 'Holistic Health Management',
      description: 'A comprehensive includes nutrition counseling, stress management, fitness therapies, and health coaching.',
      featured: false,
    },
    {
      id: 5,
      icon: (
        <svg className='w-8 h-8' fill='currentColor' viewBox='0 0 20 20'>
          <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z' clipRule='evenodd'/>
        </svg>
      ),
      title: 'Recovery Center',
      description: 'This service offers rehabilitation programs designed to help individuals recover from illness or injury.',
      featured: false,
    },
    {
      id: 6,
      icon: (
        <svg className='w-8 h-8' fill='currentColor' viewBox='0 0 20 20'>
          <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z'/>
        </svg>
      ),
      title: 'Telemedicine Consultation',
      description: 'Telemedicine services that allow you to consult with healthcare professionals from anywhere.',
      featured: false,
    }
  ]

  return (
    <section id='services' className='py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-gray-50'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-12 md:mb-16'>
          <span className='inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4'>
            Our Services
          </span>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Discover the Power of Our Services
          </h2>
          <p className='text-gray-600 max-w-2xl mx-auto text-base md:text-lg'>
            Explore a variety of tailored services aimed at enhancing your overall health and wellness.
          </p>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services