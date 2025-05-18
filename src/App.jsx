import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trending from './components/Trending'
import Plans from './components/Plans'
import Reasons from './components/Reasons'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Trending />
      <Plans />
      <Reasons />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App 