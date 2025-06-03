import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedResearch from './components/FeaturedResearch'
import Departments from './components/Departments'
import Publications from './components/Publications'
import Newsletter from './components/Newsletter'
import Team from './components/Team'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedResearch />
        <Departments />
        <Publications />
        <Team />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App