import React from 'react'

interface Service{
  id: number,
  title: string,
  description: string,
  icon: React.ReactNode
  featured: boolean,
}

interface ServiceProps {
  service: Service
}

const ServiceCard: React.FC<ServiceProps> = ({service}) => {
  return (
    <div
              key={service.id}
              className={`${
                service.featured
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-900'
              } rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
            >
              {/* Icon */}
              <div
                className={`${
                  service.featured
                    ? 'bg-white/20 text-white'
                    : 'bg-blue-100 text-blue-600'
                } w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}
              >
                {service.icon}
              </div>

              {/* Content */}
              <h3
                className={`text-xl md:text-2xl font-bold mb-4 ${
                  service.featured ? 'text-white' : 'text-gray-900'
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`leading-relaxed ${
                  service.featured ? 'text-white/90' : 'text-gray-600'
                }`}
              >
                {service.description}
              </p>
            </div>
  )
}

export default ServiceCard