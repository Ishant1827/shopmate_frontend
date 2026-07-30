import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ProductCard from '../Components/ProductCard'
import { MdSearch } from "react-icons/md";
import './CSS/Product.css'
import axios from 'axios';


const Product = () => {
  const [products,setProducts] = useState([])
  const api_url = import.meta.env.VITE_API_URL
  const fetchProduct = async()=>{
    const res = await axios.get(`${api_url}/api/product/get-product`)
    setProducts(res.data.product);
  }
  useEffect(()=>{
    fetchProduct()
  },[])

  return (
    <>
        <Header/>

        <div className="product-outer">
          <div className="product-top">
            <h1>All Products</h1>
            <div className="search-box">
              <MdSearch size={25}/>
              <input type="search" placeholder='Search here'  id="" />

            </div>
            <div className="Sort-by">
              <span>Sort by: </span>
            </div>
          </div>
          <div className="product-card-outer">            
            {
              products.map((item,index)=>(
                  <ProductCard product={item} key={item._id}/>
              ))
            }
            
          </div>


          
        </div>

        
        

    <Footer/>
    </>
  )
}

export default Product