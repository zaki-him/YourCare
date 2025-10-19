import React from 'react'
import Header from './components/Header'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Services from './Sections/Services'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <About/>
      <Services />
    </>
  )
}

export default App