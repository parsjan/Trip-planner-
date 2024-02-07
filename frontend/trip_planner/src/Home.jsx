
import NavBar from './NavBar'
import Hero from "./Hero"
import Hero1 from "./Hero1"
import Features from './Features';
import Start_trip from './Start_trip';
import Footer from "./Footer.jsx"
function Home() {
  console.log("home render");
  return (
    <>
     <NavBar/>
     <Hero/>
     <Hero1/>
     <Features/>
     <Start_trip/>
     <br/><br/><br/><br/>
     <Footer/>
    </>
  )
}

export default Home
