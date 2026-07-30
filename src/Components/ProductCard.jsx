import React from 'react'
import './ProductCard.css'
import { FaCartArrowDown } from "react-icons/fa6";


const ProductCard = ({product}) => {
  return (
    <>
    <div className="product-card">
        <span className="bedge">{product.productBadge}</span>
        <img src={product.image} alt="" />
        <h3>{product.productTitle}</h3>
        <h2>{product.productPrice}</h2>
        <button>
            <FaCartArrowDown size={18} />
            Add to cart
        </button>
    </div>
    
    
    
    
    
    
    
    </>
  )
}

export default ProductCard