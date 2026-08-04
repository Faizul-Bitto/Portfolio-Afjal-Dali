import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Publications from './components/Publications'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import './App.css'

function App() {
  useEffect(() => {
    // Cursor Glow Follower
    const cursorGlow = document.getElementById('cursor-glow')
    if (cursorGlow) {
      const handleMouseMove = (e) => {
        cursorGlow.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`
      }
      const handleMouseLeave = () => {
        cursorGlow.style.opacity = '0'
      }
      const handleMouseEnter = () => {
        cursorGlow.style.opacity = '1'
      }

      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseleave', handleMouseLeave)
      document.addEventListener('mouseenter', handleMouseEnter)

      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseleave', handleMouseLeave)
        document.removeEventListener('mouseenter', handleMouseEnter)
      }
    }
  }, [])

  useEffect(() => {
    // Scroll Progress Bar
    const progressBar = document.getElementById('scroll-progress')
    if (progressBar) {
      const handleScroll = () => {
        const scrollTop = window.scrollY
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const progress = (scrollTop / docHeight) * 100
        progressBar.style.width = progress + '%'
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    // Scroll Reveal Animations
    const revealClasses = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-stagger'

    // Fallback: reveal everything after a short delay to ensure content is always visible
    const fallbackTimer = setTimeout(() => {
      document.querySelectorAll(revealClasses).forEach((el) => {
        el.classList.add('revealed')
      })
    }, 800)

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    )

    document.querySelectorAll(revealClasses).forEach((el) => {
      // If element is already in viewport, reveal it immediately
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight) {
        el.classList.add('revealed')
      } else {
        revealObserver.observe(el)
      }
    })

    return () => {
      clearTimeout(fallbackTimer)
      revealObserver.disconnect()
    }
  }, [])

  return (
    <>
      {/* Cursor Glow Follower */}
      <div id="cursor-glow"></div>

      {/* Background Mesh */}
      <div className="bg-mesh"></div>

      {/* Scroll Progress */}
      <div id="scroll-progress"></div>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Publications />
      <Certifications />
      <Education />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  )
}

export default App