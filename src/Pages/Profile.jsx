import React, { useEffect } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    if(!sessionStorage.getItem('sessionId')){
      navigate('/')
    }
  },[])



  return (
    <>
      <Header/>
      <h1>This i profile page</h1>
      <Footer/>
    </>
  )
}

export default Profile