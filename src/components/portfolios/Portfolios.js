import React from 'react'
import "./portfolio.css"
import Folio from "../../assets/IMG_20230204_170914.jpg"
import food_univers from "../../assets/IMG_20230916_102030.jpg"
const Portfolios = () => {
  return (
    <section id='portfolio'>
      <h5>My Works </h5>
      <h2>Portfolio</h2>
      <div  className="container portfolio_container">
        <article data-aos="zoom-in" className='portfolio_item'>
            <div className="portfolio_item-image">
              <img src={Folio} alt="" />
            </div>
            <h3>To Do list Manager</h3>
            <div className="portfolio_item-cta">
            <a href="http://github.com/awehstino/to-do-manager" className='btn' target="_blank">source Code</a>
            <a href="" className='btn btn-primary'onClick={()=> alert("Sorry No live Demo on this project yet click on the sourceCode to see the source files")}>Live Demo</a>
            </div>
        </article>
        <article data-aos="zoom-in" className='portfolio_item'>
            <div className="portfolio_item-image">
              <img src={food_univers} alt="" />
            </div>
            <h3>food univers</h3>
            <div className="portfolio_item-cta">
            <a href="http://github.com/awehstino/food_univers" className='btn' target="_blank">source Code</a>
            <a href="" className='btn btn-primary'onClick={()=> alert("Sorry No live Demo on this project yet click on the sourceCode to see the source files")}>Live Demo</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolios