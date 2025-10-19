import { Menu } from 'lucide-react'
import React from 'react'

const Services: React.FC = () => {
  const services = [
    {
    title: 'Health Monitoring Program',
    desc: 'We offer a continious health monitoring program that allows you to track your health progress in real-time.',
    },
  ]
  return (
    <section>
      <h1>Discover the Power of Our Services</h1>
      <p>Explore a variety of tailored services aimed at enhancing your overall health and wellness</p>
      <div>
        {services[0].title}
      </div>
    </section>
  )
}

export default Services