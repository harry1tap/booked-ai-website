import Hero from '../components/Hero.jsx'
import Problem from '../components/Problem.jsx'
import Steps from '../components/Steps.jsx'
import Guarantee from '../components/Guarantee.jsx'
import WhoIsFor from '../components/WhoIsFor.jsx'
import FinalCTA from '../components/FinalCTA.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Problem />
        <Steps />
        <Guarantee />
        <WhoIsFor />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
