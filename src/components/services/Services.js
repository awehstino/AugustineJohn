import "./services.css"
import {BiCheck} from "react-icons/bi"
import   aos  from "aos"
import { useEffect } from "react"
import "aos/dist/aos.css"

const Services = () => {
 useEffect(() => {
   aos.init({duration: 600})
 
   
 }, [])
 
  
  return (
    <section id="services">
      <h5 data-aos="zoom-in">What I Offer</h5>
      <h2 data-aos="fade-up">Services</h2>
      <div className="container services_container">
        <article 
        data-aos="fade-right" 
        data-aos-easing="ease-in-sine"
        className="service">
          <div className="service_head">
            <h3>UI/UX</h3>
          </div>
          <ul className="service_list">
            <li><BiCheck className="service_list-icon"/> 
              <p>Interaction Design. </p>
            </li>
            <li><BiCheck className="service_list-icon"/> 
              <p>Visual Design. </p>
            </li>
            <li><BiCheck className="service_list-icon"/> 
              <p>Information Architecture</p>
            </li>
           
          </ul>
        </article>
        <article
        data-aos="fade-left" 
        data-aos-easing="ease-in-sine" 
         className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li><BiCheck className="service_list-icon"/> 
              <p>Front-End Web development </p>
            </li>
           
          </ul>
        </article>
       
      </div>
    </section>
  )
}

export default Services