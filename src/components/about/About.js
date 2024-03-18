import "./about.css"
import Me from "../../assets/IMG-20221204-WA0010.jpg"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"
const About = () => {
  return (
    <section id="about">
      <h5 >Get To Know</h5>
      <h2 >About Me</h2>
      <div className="container about__container">
        <div className="about_me">
          <div  className="about_me-image">
            <img  src={Me} alt="" />
          </div>
        </div>
  
        <div className="about_content">
          <div  className="about_cards">
            <article  className="about_card">
              <FaAward  className="about_icon"/>
               <h5>Experience</h5>
               <small>can i get experience from your organization?</small>
            </article>
            <article  className="about_card">
              <FiUsers className="about_icon"/>
               <h5>Clients</h5>
               <small>Be My First Client</small>
            </article>
            <article  className="about_card">
              <VscFolderLibrary className="about_icon"/>
               <h5>Projects</h5>
               <small>1+ Completed</small>
            </article>
          </div>
          <p >My name`s are Augustine, Aweh, JayJay I`m from plateau(jos) state 
             Nigeria basing in Lagos state. I`m not well
             educated but i like researching on things that 
             i don`t know and also taking correction and learning from others.
             I like watching anime,cartoon and also playing game on my free time.
          </p>
          
         <a  href="#contact" className="btn btn-primary">Let`s Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About