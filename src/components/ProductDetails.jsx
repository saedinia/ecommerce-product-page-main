import React from 'react'
import Quantity from './Quantity'

function ProductDetails(props) {
  return (
    <>
    <div className="product-details">
        <h3>Sneaker Company</h3>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
        These low-profile sneakers are your perfect casual wear companion. Featuring a 
        durable rubber outer sole, they’ll withstand everything the weather can offer.
        </p>
        <div className="price-section">
            <div className="price">
                $125.00 <span className="discount">50%</span>
            </div>
            <div className="price-no-discount">
                $250.00
            </div>
        </div>
    </div>
    <Quantity onChangeQuanity={props.onChangeState}/>
    </>
  )
}

export default ProductDetails