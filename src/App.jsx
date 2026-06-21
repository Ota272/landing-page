import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import LangMarquee from './components/sections/LangMarquee'
import About from './components/sections/About'
import Stats from './components/sections/Stats'
import Courses from './components/sections/Courses'
import Pricing from './components/sections/Pricing'
import LevelTest from './components/sections/LevelTest'
import Testimonials from './components/sections/Testimonials'
import FAQ from './components/sections/FAQ'
import Consultation from './components/sections/Consultation'
import FinalCTA from './components/sections/FinalCTA'
import Footer from './components/sections/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <LangMarquee />
        <About />
        <Stats />
        <Courses />
        <Pricing />
        <LevelTest />
        <Testimonials />
        <FAQ />
        <Consultation />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
