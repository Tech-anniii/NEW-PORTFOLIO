import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Personal from './components/Personal'
import Contact from './components/Contact'
import Footer from './components/footer'

function App() {
  return (
    <div className="app">
      <Navbar />
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
