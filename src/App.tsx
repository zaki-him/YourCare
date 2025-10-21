import React from 'react'
import Header from './components/Header'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Services from './Sections/Services'
import Contact from './Sections/Contact'
import { Toaster } from 'react-hot-toast'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <About/>
      <Services />
      <Contact />
      <Toaster />
    </>
  )
}

export default App