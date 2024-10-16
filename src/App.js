import Landing from './components/Landing'
import Features from './components/Features'
import About from './components/About'
import Tokenomics from './components/Tokenomics'
import Roadmap from './components/Roadmap'
import Footer from './components/Footer'

import './App.css'

const App = () => (
  <>
    <Landing />
    <section id="features">
      <Features />
    </section>
    <section id="why-us">
      <About />
    </section>
    <section id="tokenomics">
      <Tokenomics />
    </section>
    <section id="roadmap">
      <Roadmap />
    </section>
    <Footer />
  </>
)

export default App