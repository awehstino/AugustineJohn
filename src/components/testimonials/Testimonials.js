import "./testimonials.css"
import lucho from "../../assets/lucho.jpg"


import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section >
      <h5>Review from partners</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimony_container"   modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>

        <SwiperSlide className="testimonial">
          <div className="partner_avatar">
            <img src={lucho} alt="" />
          </div>
          <h5 className="partner_name">Luciano Lupo</h5>
            <small className="partner_review">Lorem ipsum dolor sit amet 
            consectetur adipisicing elit. Minima amet dolore impedit?
             Libero, quaerat! Similique vitae hic, dicta sit quos dolorum, 
             in aut, error veniam minus repudiandae
             perferendis quo laudantium!</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="partner_avatar">
            <img src={lucho} alt="" />
          </div>
          <h5 className="partner_name">Luciano Lupo</h5>
            <small className="partner_review">Lorem ipsum dolor sit amet 
            consectetur adipisicing elit. Minima amet dolore impedit?
             Libero, quaerat! Similique vitae hic, dicta sit quos dolorum, 
             in aut, error veniam minus repudiandae
             perferendis quo laudantium!</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="partner_avatar">
            <img src={lucho} alt="" />
          </div>
          <h5 className="partner_name">Luciano Lupo</h5>
            <small className="partner_review">Lorem ipsum dolor sit amet 
            consectetur adipisicing elit. Minima amet dolore impedit?
             Libero, quaerat! Similique vitae hic, dicta sit quos dolorum, 
             in aut, error veniam minus repudiandae
             perferendis quo laudantium!</small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials