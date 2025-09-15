import { useState } from 'react'
import Nav from './component/Nav'
import Hero from './component/Hero'
import About from './component/About'
import Skills from './component/Skills'
import Achievements from './component/Achievements'
import Projects from './component/project'
import Contact from './component/Contact'
import Footer from './component/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]'>
     <Nav/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Achievements/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
