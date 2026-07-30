import React from 'react'
import'../Components/Footer.css'
import { MdLocalPhone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";


const Footer = () => {
  return (
    <>
        <div className="footer">
            <div className="footer-one">
                <h1>Shop<span>Mate</span></h1>
                <p>Your one-stop destination for quality products at the best prices. Shop more, save more.</p>
                <div><div className="one-icon"><MdLocalPhone size={20}/></div> +91 9845890298</div>
                <div><div className="one-icon"><IoIosMail size={20}/></div> support@shopmate.com</div>
                <div><div className="one-icon"><IoLocationSharp size={20}/></div>123, MG Road, Lucknow, 
                Uttar Pradesh, 226001</div>

            </div>
            <div className="footer-two">
                <h3>Quick Links</h3>
                <p>Home</p>
                <p>Shop</p>
                <p>Categories</p>
                <p>Deals</p>
                <p>contacts</p>
            </div>
            <div className="footer-three">
                <h3>Customer Support</h3>
                <p>FAQs</p>
                <p>Shipping & Delivery</p>
                <p>Return & Refunds</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditons</p>
            </div>
            <div className="footer-four">
                <div className="follow-us">
                    <h3>Follow Us</h3>
                    <div>
                        <i class="bi bi-instagram"></i>
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-twitter-x"></i>
                        <i class="bi bi-linkedin"></i>
                    </div>
                </div>
                <div className="we-accept">
                    <h3>We Accept</h3>
                    <div>
                        <img src="visa.png" alt="" />
                        <img src="mastercard.jpeg" alt="" />
                        <img src="upi.png" alt="" />
                        <img src="Rupay-Logo.png" alt="" />
                    </div>
                </div>
            </div>
            
        </div>
        <div className="copyright">
                © 2026 ShopMate. All Rights Reserved.
            </div>








    </>
  )
}

export default Footer