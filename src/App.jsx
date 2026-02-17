import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Personal from './components/Personal'
import Contact from './components/Contact'
import Footer from './components/footer'

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  const storedTheme = localStorage.getItem('theme')
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme
  }

  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.style.colorScheme = theme
    localStorage.setItem('theme', theme)

    document.documentElement.classList.add('theme-transition')
    const transitionTimeout = window.setTimeout(() => {
      document.documentElement.classList.remove('theme-transition')
    }, 300)

    return () => window.clearTimeout(transitionTimeout)
  }, [theme])

  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="app">
      <Navbar theme={theme} onToggleTheme={handleToggleTheme} />
      <div id="hero">
        <Hero />
      </div>
      <About />
      <Skills />
      <Projects />
      <Personal />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
