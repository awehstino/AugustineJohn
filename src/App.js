import Header from "./components/header/Header.jsx"
import Nav from "./components/nav/Nav.js"
import About from "./components/about/About.js"
import Experience from "./components/experience/Experience.js"
import Services from "./components/services/Services.js"
import Testimonials from "./components/testimonials/Testimonials.js"
import Contact from "./components/contact/Contact.js"
import Footer from "./components/footer/Footer.js"
import Portfolios from "./components/portfolios/Portfolios.js"
function App() {
  return (
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
  );
}

export default App;     
