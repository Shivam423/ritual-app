import React from 'react'
import multivitamin from './images/Multivitamin.webp'
import Protein from './images/Protein.webp'
import Pregnancy from './images/Pregnancy.webp'
import Bundles from './images/Bundles.webp'
import feat from './images/feat.webp'
import {NavLink} from "react-router-dom"

const Home = () => {
  return (
    <>
      <div className="home">
        <h1>
          <div>The Future</div>
          <span>of health</span>
        </h1>
        <div className="clear"><h1><hr /> is clear.</h1></div>
        <button className="shop-button">Shop All</button>
      </div>
      <section className="box-card">
        <div className="boxes">
          <div className="box">
            <img src={multivitamin} alt=""></img>
            <p>Shop Multivitamin</p>
          </div>
          <div className="box">
            <img src={Protein} alt=""></img>
            <p>Shop Protein</p>
          </div>
          <div className="box">
            <img src={Pregnancy} alt=""></img>
            <p>Shop Pregnancy</p>
          </div>
          <div className="box">
            <img src={Bundles} alt=""></img>
            <p>Shop Bundles</p>
          </div>
        </div>
      </section>
      <section className="routes">
        <h1>Daily essentials with good intentions — for living life or creating it.</h1>
        <div className="icons">
          <div className="icon">
            <i class="far fa-check-circle"></i>
            <p>Traceable<br /> Ingredients</p>
          </div>
          <div className="icon">
            <i class="far fa-check-circle"></i>
            <p>Non-GMO</p>
          </div>
          <div className="icon">
            <i class="far fa-check-circle"></i>
            <p>Third Party Tested</p>
          </div>
          <div className="icon">
            <i class="far fa-check-circle"></i>
            <p>Vegan</p>
          </div>
          <div className="icon">
            <i class="far fa-check-circle"></i>
            <p>No Artificial <br />flavors or <br />Synthetic Fillers</p>
          </div>
        </div>
      </section>
      <div className="content-page">
        <div className="featured-1">
          <img src={feat} alt="" />
        </div>
        <div className="featured-2">
          <h2>We're not about<br/>
           pseudoscience and half-<br/>
           truths</h2>
           <p>From Omega-3 DHA from microalgae to regeneratively-<br/>farmed pea protein, 
           our scientists studied diets and genetics<br/> to make daily essentials based on what we need.</p>
           <NavLink to="/" className="who">Who We are</NavLink>
        </div>
      </div>
    </>
  )
}

export default Home
