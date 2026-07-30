import React, {useEffect, useState} from "react";
import Header from "../Components/Header";
import Footer from '../Components/Footer'
import './CSS/Home.css'
import { TbTruckDelivery } from "react-icons/tb";
import { GoShieldCheck } from "react-icons/go";
import { MdSupportAgent } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate()
      const [isShop, setisShop] = useState(false)
      const [isAbout, setisAbout] = useState(false)
  
      const handleProduct = () => {
          navigate('/product')
      }
      const handleAbout = () => {
          navigate('/about')
      }
  return (
    <>
    <Header/>
    {/* hero start */}
    <section className="hero">
      <div className="hero-left">
        <span className="hero-tag">
          Best Quality Products
        </span>
        <h1>Discover:Fashion <br />
            That <span>Defines</span>You
        
         </h1>
         <p>Explore the latest trends & fashion, accessiories and more. Explore the latest trends & fashion, accessiories and more.</p>
         <div className="hero-button">
          <button onClick={handleProduct} className="shop-btn">Shop Now</button>
          <button onClick={handleAbout} className="explore-btn">Explore Details</button>
         </div>

         <div className="hero-features">
          
            <div className="hero-feature-card">
              <div className="hero-feature-icon"><TbTruckDelivery /></div>
              <div className="hero-feature-text">
                <h4>Free shipping</h4>
                <small>On order over $50</small>
              </div>
            </div>
            
          
            <div className="hero-feature-card">
              <div className="hero-feature-icon"><GoShieldCheck /></div>
              <div className="hero-feature-text">
                <h4>100 secure</h4>
                <small>Secure checkout</small>
              </div>
            </div>
          
            <div className="hero-feature-card">
              <div className="hero-feature-icon"><MdSupportAgent /></div>
              <div className="hero-feature-text">
                <h4>24/7 support</h4>
                <small>Secure checkout</small>
              </div>
            </div>
          
         </div>

      </div>
      <div className="hero-right">
        <img src="hero.jpeg" alt="hero image" />
      </div>
    </section>
    {/* hero end */}
    



    <Footer/>
    </>
  )
}

export default Home