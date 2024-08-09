
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Card from './components/Card'
import Slider from './components/Slider'
import WebContext from './ContextProvider'
import reviews from './data/changeabledata'
import services from './data/services'
import Footer from './components/Footer'

function App() {

  return (

      <main>
        <div className='bg'>
          <Nav />
          <Hero />
          <WebContext.Provider value={reviews}>
            <Slider />
          </WebContext.Provider>
          </div>
          <WebContext.Provider value={services}>
            <Card />
          </WebContext.Provider>
          <Footer />
      </main>
  )
}

export default App
