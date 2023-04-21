import Header from "./components/header/Header.jsx"
import Nav from "./components/nav/Nav.js"
import About from "./components/about/About.js"
import Experience from "./components/experience/Experience.js"
import Services from "./components/services/Services.js"
import Testimonials from "./components/testimonials/Testimonials.js"
import Contact from "./components/contact/Contact.js"
import Footer from "./components/footer/Footer.js"
import Portfolios from "./components/portfolios/Portfolios.js"
import Loader from "./components/loader/Loader.jsx"
import { useEffect, useState } from "react"
function App() {
  const [loading, setloading] = useState(true)
  useEffect(()=>{
    fetch(" https://awehstino.github.io/my_portfolio/").then(response =>{
      console.log(response)
       setloading(false)
    }) 
  },[])
  return (
    <>
   {
        loading ? <Loader/> :
          <>  
           <Header />
           <Nav/>
           <About/>
           <Experience/>
           <Services/>
           <Portfolios/>
           <Testimonials />
           <Contact />
           <Footer/>          
          </>
      }
    
    </>
  )
 
}

export default App;     
