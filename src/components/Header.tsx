import { Menu } from 'lucide-react'
import React from 'react'

const Header: React.FC = () => {
  const links = [
    {
      name: "Home",
      link: "#"
    },
    {
      name: "About us",
      link: "#about"
    },
    {
      name: "Services",
      link: "#services"
    },
    {
      name: "Contact us",
      link: "#contact"
    },
  ]
  return (
    <header className='flex items-center py-3 px-6 justify-between bg-white rounded-full shadow-xl'>
      <a href="#">
        <h1 className='text-xl md:text-2xl font-semibold'>YourCare</h1>
      </a>

      <ul className='flex items-center gap-6 max-md:hidden'>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.link}>
              <h2>{link.name}</h2>
            </a>
          </li>
        ))}
      </ul>

      <div className='flex items-center gap-5 max-md:hidden'>
        <button className='cursor-pointer'>Login</button>
        <button className='rounded-3xl py-3 px-4 background text-white cursor-pointer'>Sign Up</button>
      </div>

      <Menu className='size-7 md:hidden cursor-pointer'/>
    </header>
  )
}

export default Header