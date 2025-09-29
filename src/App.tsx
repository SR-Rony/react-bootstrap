import './App.css'
import Block from './components/Block';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import CustomNavbar from './components/Navbar';
import SendInquiry from './components/Send';
import Testimonials from './components/Testimonial';
import ViewProjects from './components/ViewProjects';
import Work from './components/Work';



function App() {

  return (
    <>
      <CustomNavbar />
      <HeroSection/>
      <Work/>
      <ViewProjects/>
      <Block/>
      <Testimonials/>
      <SendInquiry/>
      <Footer/>
    </>
  )
}

export default App
