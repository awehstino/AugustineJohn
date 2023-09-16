import "./testimonials.css"
import lucho from "../../assets/lucho.jpg"


import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  let review = [{
  name : "lucho",
  img : lucho,
  paragraph :"augustine is an amazing front-end react developer"
   }]
  return (
    <section >
      <h5 data-aos="zoom-in">Review from partners</h5>
      <h2 data-aos="fade-up">Testimonials</h2>
      <Swiper data-aos="zoom-in" className="container testimony_container"   modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        {review.map(({name,img,paragraph},index)=>{
          return (
            <SwiperSlide className="testimonial" key={index}>
          <div className="partner_avatar">
            <img src={img} alt="" />
          </div>
          <h5 className="partner_name">{name}</h5>
            <small className="partner_review">{paragraph}</small>
        </SwiperSlide>
          )
        })}

      </Swiper>
    </section>
  )
}

export default Testimonials