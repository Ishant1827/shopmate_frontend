import React, { useState } from 'react'
import './CSS/SignUp.css'
import Header from "../Components/Header";
import { Link } from 'react-router-dom';
import axios from 'axios';
import {toast } from 'react-toastify';
const SignUp = () => {
  const [formData,setFormData]= useState({
    fname:"",
    lname:"",
    email:"",
    phone:"",
    password:"",
    dob:"",
    gender:""
  })

  const api_url = import.meta.env.VITE_API_URL

  const handleSubmit =async(e)=>{
    e.preventDefault()
    try {
      const response = await axios.post(`${api_url}/api/user/signup`,formData)
      toast.success("User Registered Successfully!")
      
    } catch (error) {
      console.log(error);
      
    }
    
  }
  const handleChange =(e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }
  return (
    <>
    <Header/>
    <div className="signup-page">
      <div className="signup-left">
        <img src="signup-pic.jpeg" alt="" />
      </div>
      <div className="signup-right">
        <div className="signup-box">
          <h1>Create Account</h1>
          <p>Fill in the details to create your account</p>
          <div className="signup-inputs">
            <div className="signup-inputs-left">
              <label htmlFor="">First Name</label>

              <input type="text" placeholder='Enter your first name' name='fname' onChange={handleChange}/>

              <label htmlFor="">Email</label>
              <input type="email" placeholder='Enter your email' name='email'  onChange={handleChange}/>

              <label htmlFor="">Password</label>
              <input type="password" placeholder='Enter password'  name='password' onChange={handleChange}/>

              <label htmlFor="">Genter</label>
              <select name="gender" onChange={handleChange}>
                <option value=''>Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="signup-inputs-right">
              <label htmlFor="">Last name</label>
              <input type="text" placeholder='Enter your last name' name='lname' onChange={handleChange}/>

              <label htmlFor="">Phone Number</label>
              <input type="tel" placeholder='Enter your phone number' name='phone' onChange={handleChange} />

              <label htmlFor="">Confirm Password</label>
              <input type="password" placeholder='Re-enter your password' name='confirmPassword' onChange={handleChange}/>

              <label htmlFor="">Date of Birth</label>
              <input type="date" placeholder='Select date' name='dob' onChange={handleChange} />

            </div>

          </div>
          <button className="sign-btn" onClick={handleSubmit}>Sign Up</button>
          <div className="or">
            <span>or signup with</span>
          </div>
          <div className="social-btn">
            Continue with Google
          </div>
          <div className="social-btn">
            Continue with Facebook
          </div>
          <p className="log-in">
            Already have an account? <span>Login</span>
          </p>

        </div>
      </div>
    </div>
   
    




    </>
  )
}

export default SignUp