import "./about.css"
import Me from "../../assets/IMG-20221204-WA0010.jpg"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Me} alt="" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon"/>
               <h5>Experience</h5>
               <small>+1 Years Working</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon"/>
               <h5>Clients</h5>
               <small>Be My First Client</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon"/>
               <h5>Projects</h5>
               <small>1+ Completed</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Veritatis, ex. Optio omnis, 
             voluptatibus deserunt eveniet reiciendis
              quo earum sint doloribus sunt, vero eum 
             ea ullam voluptates voluptate veniam molestiae.
          </p>
          
         <a href="#contact" className="btn btn-primary">Let`s Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About