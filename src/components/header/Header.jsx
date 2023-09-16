import React from 'react'
import "./header.css"
import Btn from './Btn'
import Me from "../../assets/IMG-20221204-WA0008.jpg"
import Headersocials from './Headersocials'
const Header = () => {
  return (
    <header>
       <div className=" container header_container">
        <h5 data-aos="zoom-in">Hello i`m</h5>
        <h1 data-aos="fade-up">Augustine John</h1>
        <h5 data-aos="zoom-out" className="text-light">Front-End Developer</h5>
        <Btn/>
        <div className="wrapper"> 
        <Headersocials/>
          <div className="me">
           <img  src={Me} alt="" className='ME' />
          </div>
           <a  href="#footer" className='scroll_down'>scrolldown</a>

        </div>
       
      
    </div>
        
    </header>

  )
}

export default Header
