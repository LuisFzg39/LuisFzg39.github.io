import './App.css'
import CharacterSelect from './components/CharacterSelect/CharacterSelect'
import FirstSection from './components/FirstSection/FirstSection'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Maps from './components/Maps/Maps'
import Navbar from './components/Navbar/Navbar'
import SecondSection from './components/SecondSection/SecondSection'
import ThirdSection from './components/ThirdSection/ThirdSection'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <FirstSection />
      <SecondSection />
      <CharacterSelect />
      <ThirdSection />
      <Maps />
      <Footer />
    </div>
  )
}

export default App
