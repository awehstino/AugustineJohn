import React from 'react'
import CV from "../../assets/AugustineJohnResume.pdf"
const Btn = () => {
  return (
    <div className="cta">
        <a data-aos="fade-right" data-aos-duration="4000" href={CV} download className='btn'>Download CV</a>
        <a data-aos="fade-left"  data-aos-duration="4000" href="#contact" className='btn btn-primary'>Let`s Talk</a>
    </div>
  )
}

export default Btn