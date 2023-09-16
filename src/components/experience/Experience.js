import "./experience.css"
import {BsPatchCheckFill} from "react-icons/bs"
import "aos/dist/aos.css"
import { useEffect } from "react"
import  aos  from "aos"

const Experience = () => {
 useEffect(() => {
   aos.init({duration: 400})
 
   
 }, [])
 
 
  
  return (
<section id="experience">
  <h5 data-aos="zoom-in">The Skills I Have</h5>
  <h2 data-aos="fade-up">My Experience</h2>
  <div className="container experience_container">
    <div  data-aos="fade-right"  className="experience_frontend">
     <h3>Frontend Development</h3>
     <div className="experience_content">
      <article className="experience_details">
        <BsPatchCheckFill  className="experience_details-icon"/>
        <div>
        <h4>HTML</h4>
        <small className="text-light">Experienced</small>
        </div>
      </article>
      <article className="experience_details">
        <BsPatchCheckFill className="experience_details-icon"/>
        <div>
        <h4>CSS</h4> 
        <small className="text-light">Experienced</small>
        </div>
      </article>
      <article className="experience_details">
        <BsPatchCheckFill className="experience_details-icon"/>
        <div>
        <h4>JavaScript</h4>
        <small className="text-light">Experienced</small>
        </div>
      </article>
      <article className="experience_details">
        <BsPatchCheckFill className="experience_details-icon"/>
        <div>
        <h4>React</h4>
        <small className="text-light">Experienced</small>
        </div>
      </article>
      <article className="experience_details">
        <BsPatchCheckFill className="experience_details-icon"/>
        <div>
        <h4>JQuery</h4>
        <small className="text-light">Basics</small>
        </div>
      </article>
      <article className="experience_details">
        <BsPatchCheckFill className="experience_details-icon"/>
        <div>
        <h4>Git</h4>
        <small className="text-light">Basics</small>
        </div>
      </article>
      
     </div>
    </div>
    <div  data-aos="fade-left" className="experience_backend">
       <h3>Backend Development</h3>
       <h2 className="comingsoon">COMING SOON</h2>
    </div>
  </div>

</section>
  )
}

export default Experience