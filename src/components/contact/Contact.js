import "./contact.css"
import {MdOutlineMail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"
import  { useRef } from 'react';
import emailjs from "emailjs-com"
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kj2mxj9', 'template_p2qubd4', form.current, '77z-pRzHPPFlkW84q')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section id="contact">
      <h5 data-aos="zoom-in">Get in Touch</h5>
      <h2 data-aos="fade-up">Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article data-aos="fade-left" className="contact_option">
            <MdOutlineMail className="contact_option-icon"/>
            <h4>Email</h4>
            <h5>Augusthne123@gmail.com</h5>
            <a href="mailto:Augusthne123@mail.com">send a message</a>
          </article>

          <article data-aos="zoom-out" className="contact_option">
            <RiMessengerLine className="contact_option-icon"/>
            <h4>Messenger</h4>
            <h5>Black Fugee</h5>
            <a href="http://m.me/awehdino/">send a message</a>
          </article>

          <article data-aos="fade-right" className="contact_option">
            <BsWhatsapp className="contact_option-icon"/>
            <h4>WhatsApp</h4>
            <h5>Blackfugee</h5>
            <a href="http://wa.me/+2348159277797">send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input data-aos="fade-left" type="text" name="name" placeholder="Your Full Name"  required/>
          <input data-aos="fade-rightt" type="email" name="email" placeholder="Your Email"  required/>
          <textarea data-aos="zoom-out" name="message"  rows="7" required placeholder="Your Message Here"></textarea>
          <button data-aos="zoom-in" type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact