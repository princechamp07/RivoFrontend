import HeroSection from '../HeroSection'
import Header from '../Header'
import Navbar from '../Navbar'
import Section from '../Section'
import Footer from '../Footer'

const Home = () => {
  return (
    
    <div className="bg-green-200 w-full overflow-hidden">
    <Navbar/>
  <Header/>
<HeroSection/>
<Section/>
<Footer/>
</div>
    
  )
}

export default Home