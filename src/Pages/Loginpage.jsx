import React, { useState } from 'react'
import './CSS/Loginpage.css'
import Header from "../Components/Header";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Loginpage = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const api_url = import.meta.env.VITE_API_URL 
  const navigate = useNavigate()
  const [loading,setLoading] = useState(false)

  const handleLogin=async(e)=>{
      setLoading(true)
      e.preventDefault()
      try {
        const res = await axios.post(`${api_url}/api/user/login`,{email,password})
        if(res.data.role=="admin"){
          setLoading(false)
          return toast.error("User not found");
        }
        
        if(res.data.token){
          sessionStorage.setItem('sessionId',res.data.token)
          toast.success(res.data.message)
            setLoading(false)
            navigate('/profile')
        }else{
          setLoading(false)
          toast.error(res.data.message)
        } 
      } catch (error) {
        setLoading(false)
        toast.error(res.data.message)
      }
  }
  return (
    <>
    <Header/>
    <div className="login-page">
      <div className="login-left">
        <img src="/login-pic.png" alt="" />
      </div>
      <div className="login-right">
        <div className="login-box">
          <h1>Log in</h1>
          <p>Enter your credentials to access your account</p>

        <label htmlFor="">Email address</label>
        <input type="email" id="" placeholder='Enter your email..' name='email' onChange={(e)=>setEmail(e.target.value)}/>

        <label htmlFor="">Password</label>
        <input type="password" id="" placeholder='Enter yoyr password...' name='password' onChange={(e)=>setPassword(e.target.value)}/>
        <div className="forgot">
          <Link to='#' className='forgot-link' >Forgot Password?</Link>
        
        </div>

          <button className="login-btn" onClick={handleLogin} disabled={loading}>
            {loading? "Logging..." : "Log in"}
          </button>
          <div className="or">
            <span>or continue with</span>
          </div>
          <div className="social-btn">
            Continue with Google
          </div>
          <div className="social-btn">
            Continue with Facebook
          </div>
          <p className="register">
            Don't have an account? <span>Register</span>
          </p>



        



        </div>

      </div>
      
    </div>
    
    




    </>
  )
}

export default Loginpage