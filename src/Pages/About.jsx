import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import './CSS/About.css'
import { BsHandbag } from "react-icons/bs";
import { FaBoxesPacking } from "react-icons/fa6";
import { LuBadgeCheck } from "react-icons/lu";
import { CiGlobe } from "react-icons/ci";

import { LuFileBadge2 } from "react-icons/lu";
import { IoPerson } from "react-icons/io5";
import { FaShieldHeart } from "react-icons/fa6";
import { IoIosRocket } from "react-icons/io";

const About = () => {

  let count1 =0;
  let target1 =10;

  let x = setInterval(function(){
    count1++
    document.getElementById('happy-customers').innerHTML=count1
    if(count1==target1) clearInterval(x)
  })

  let count2 =0;
  let target2 =5;

  let y = setInterval(function(){
    count2++
    document.getElementById('products').innerHTML=count2
    if(count2==target2) clearInterval(y)
  })

  let count3 =0;
  let target3 =99;

  let z = setInterval(function(){
    count3++
    document.getElementById('satisfaction').innerHTML=count3
    if(count3==target3) clearInterval(z)
  })

  let count4 =0;
  let target4 =50;

  let w = setInterval(function(){
    count4++
    document.getElementById('cities-delivered').innerHTML=count4
    if(count4==target4) clearInterval(w)
  })
  return (
    <>
        <Header/>
        
        <div className="about-page">
          <div className="about-top">
          <div className="about-top-left">
            <div className="about-img-top">
              <div className="about-img-top-box1"></div>
              <img src="about-img1.jpeg" alt="" />
              <div className="about-img-top-box2"></div>
            </div>
            <div className="about-img-bottom">
              <img src="about-img2.jpeg" alt="" />
              <img src="about-img3.jpeg" alt="" />
            </div>

          </div>
          <div className="about-top-right">
            <span>OUR STORY</span>
            <h1>Built with Passion,</h1>
            <h1>Delivered with Care</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam earum, unde saepe voluptatem quidem aliquam, fugit similique laudantium, tempore odio repellat incidunt nemo nesciunt esse temporibus ab culpa nisi amet.
            </p>
            <br />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta suscipit eaque magni omnis vel, quam expedita saepe perspiciatis.</p>
            <button>Learn More</button>
          </div>
        </div>

        <div className="counters">
          <div className='coun'>
            <BsHandbag />
            <div>
              <span id="happy-customers">0</span> <span>k+</span>
            </div>
            <p>Happy Customers</p>
          </div>

          <div className='coun'>
            <FaBoxesPacking />
            <div>
              <span id="products">0</span> <span>k+</span>
            </div>
            <p>Products</p>
          </div>

          <div className='coun'>
            <LuBadgeCheck />
            <div>
              <span id="satisfaction">0</span> <span>%</span>
            </div>
            <p>Satisfaction Rate</p>
          </div>

          <div className='coun'>
            <CiGlobe />
            <div>
              <span id="cities-delivered">0</span><span>k+</span>
            </div>
            <p>Cities Delivered</p>
          </div>

        </div>

        <div className="about-shop-team">
          <div className="our-team">OUR TEAM</div>
          <h1>The People Behind <span>ShopMate</span></h1>
          <p>A passionate team working everyday to bring you the best shopping experience.</p>
          <div className="team-card">
            <div className="card">
              <img src="about-rohit.jpeg" alt="" />
              <h4>Rohit sharma</h4>
              <p>Founder & CEO</p>
              <div className="card-icons">
                <i class="bi bi-instagram"></i>
              <i class="bi bi-linkedin"></i>
              <i class="bi bi-twitter-x"></i>
              </div>

            </div>
            <div className="card">
              <img src="about-anjali.jpeg" alt="" />
              <h4>Anjali Verma</h4>
              <p>Marketing Head</p>
              <div className="card-icons">
                <i class="bi bi-instagram"></i>
              <i class="bi bi-linkedin"></i>
              <i class="bi bi-twitter-x"></i>
              </div>
              
            </div>
            <div className="card">
              <img src="about-vikram.jpeg" alt="" />
              <h4>Vikram Singh</h4>
              <p>Product Manager</p>
              <div className="card-icons">
                <i class="bi bi-instagram"></i>
              <i class="bi bi-linkedin"></i>
              <i class="bi bi-twitter-x"></i>
              </div>
              
            </div>
            <div className="card">
              <img src="about-neha.jpeg" alt="" />
              <h4>Neha Kapoor</h4>
              <p>Customer Support Lead</p>
              <div className="card-icons">
                <i class="bi bi-instagram"></i>
              <i class="bi bi-linkedin"></i>
              <i class="bi bi-twitter-x"></i>
              </div>
              
            </div>
          </div>
        </div>

        <div className="about-shop-features">
          <div className="our-values">OUR VALUES</div>
          <h1>What Deives Us</h1>
          <div className="about-shop-features-card">
            <div className="card2">
              <div className="card2-icon">

                <LuFileBadge2 size={32}/>
              </div>
            <h4>Quality First</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, sint labore nam, nisi cupiditate accusamus.</p>
          </div>
          <div className="card2">
            <div className="card2-icon">

              <IoPerson size={32}/>
            </div>
            <h4>Customer Focused</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, sint labore nam, nisi cupiditate accusamus.</p>
          </div>
          <div className="card2">
            <div className="card2-icon">

              <FaShieldHeart size={32}/>
            </div>
            <h4>Trust & Integrity</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, sint labore nam, nisi cupiditate accusamus.</p>
          </div>
          <div className="card2">
            <div className="card2-icon">

              <IoIosRocket size={32} />
            </div>
            <h4>Always Improving</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, sint labore nam, nisi cupiditate accusamus.</p>
          </div>
          </div>
        </div>




        </div>
      <Footer/>
    
    </>
  )
}

export default About