import Hero from '../components/Hero.jsx'
import Problem from '../components/Problem.jsx'
import Pipeline from '../components/Pipeline.jsx'
import Steps from '../components/Steps.jsx'
import FullFlow from '../components/FullFlow.jsx'
import WeekPreview from '../components/WeekPreview.jsx'
import FullSystem from '../components/FullSystem.jsx'
import YourJob from '../components/YourJob.jsx'
import QuickMaths from '../components/QuickMaths.jsx'
import WhySolar from '../components/WhySolar.jsx'
import FAQ from '../components/FAQ.jsx'
import FinalCTA from '../components/FinalCTA.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Problem />
        <Pipeline />
        <Steps />
        <FullFlow />
        <WeekPreview />
        <FullSystem />
        <YourJob />
        <QuickMaths />
        <WhySolar />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
