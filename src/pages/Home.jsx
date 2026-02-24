import Hero from '../components/Hero.jsx'
import Solution from '../components/Solution.jsx'
import Pipeline from '../components/Pipeline.jsx'
import FinalCTA from '../components/FinalCTA.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Solution />
        <Pipeline />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
