import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import './CSS/Contact.css'
import { TbMessages } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailOutline, IoLocationOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";


const Contact = () => {
  return (
    <>
        <Header/>
        <div className="contact-page">
          <div className="contact-page-top">
            <div className="contact-page-top-left">
              <div className="contact-us">CONTACT US</div>
              <h1>We'd Love to</h1> <h1>Hear From <span>You!</span></h1>
              <div className="contact-page-top-left-para">
                <p>Have a question, suggestion, or just want to say hello?</p>
                <p>Our team is here to help you.</p>
              </div>
              <button className='get-in-touch'><TbMessages size={15}/> Get in Touch</button>
            </div>
            <div className="contact-page-top-right">
              <img src="contact-img1.jpeg" alt="" />
            </div>
          </div>

          <div className="contact-shop-features">
            <div className="contact-shop-features-card">
              <div className="contact-card-icon">
                <FaPhoneAlt size={20}/>
              </div>
              <h4>Phone</h4>
              <p>+91 1234567890</p>
              <p>Mon-Sat, 9:00 AM - 6:00 PM</p>
            </div> 
            <div className="contact-shop-features-card">
              <div className="contact-card-icon">
                <IoMailOutline size={20}/>
              </div>
              <h4>Email</h4>
              <p>support@shopmate.com</p>
              <p>We reply within 24 hours</p>
            </div> 
            <div className="contact-shop-features-card">
              <div className="contact-card-icon">
                <IoLocationOutline size={20}/>
              </div>
              <h4>Address</h4>
              <p>123, MG road, Lucknow</p>
              <p>Uttar Pradesh, 226001</p>
            </div> 
            <div className="contact-shop-features-card">
              <div className="contact-card-icon">
                <BiSupport size={20}/>
              </div>
              <h4>Support</h4>
              <p>24/7 Customer Support</p>
              <p>We're here to help</p>
            </div>        
            
          </div>

          <div className="contact-form">
            <div className="contact-form-left">
              <div className="send-message">SEND US A MESSAGE</div>
              <h1>How Can We</h1>
              <h1><span>Help</span>You?</h1>
              <div className="contact-form-para">
                <p>Fill out the form and our team wiil get</p>
                <p>back to you as soon as possible.</p>
              </div>
              <div className="inputs">
                <div className="input-name input">
                  <i class="bi bi-person"></i>
                  <input type="text" placeholder='Your name' />
                </div>
                <div className="input-email input">
                  <i class="bi bi-envelope"></i>
                  <input type="email" placeholder='Your Email'/>
                </div>
                <div className="input-subject input">
                  <i class="bi bi-tag"></i>
                  <input type="text" placeholder='Your name' />
                </div>
                <div className="input-message input">
                  <i class="bi bi-pencil"></i>
                  <textarea placeholder='Your message' rows={4}></textarea>
                </div>
                <button className="send-msg"><i class="bi bi-send"></i>Send Message</button>

              </div>

            </div>
            <div className="contact-form-right">
              <img src="contact-img2.jpeg" alt="" />
            </div>
          </div>

          <div className="location">
            <div className="find-us">FIND US</div>
            <h1>Our Location</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28478.258511411514!2d80.92640829961843!3d26.846875248213028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd089ec0a031%3A0x1303c4d350c269c3!2sLucknow%2C%20Uttar%20Pradesh%20226001!5e0!3m2!1sen!2sin!4v1784541026009!5m2!1sen!2sin" width="1300" height="350"></iframe>
          </div>










        </div>

      <Footer/>
    </>
  )
}

export default Contact