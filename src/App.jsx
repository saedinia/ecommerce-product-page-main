import React from "react"
import logo from "./assets/images/logo.svg"
import icon_cart from "./assets/images/icon-cart.svg"
import avatar from "./assets/images/image-avatar.png"
import product1 from "./assets/images/image-product-1.jpg"
import product2 from "./assets/images/image-product-2.jpg"
import product3 from "./assets/images/image-product-3.jpg"
import product4 from "./assets/images/image-product-4.jpg"
import product1Thumbnail from "./assets/images/image-product-1-thumbnail.jpg"
import product2Thumbnail from "./assets/images/image-product-2-thumbnail.jpg"
import product3Thumbnail from "./assets/images/image-product-3-thumbnail.jpg"
import product4Thumbnail from "./assets/images/image-product-4-thumbnail.jpg"
import icon_plus from "./assets/images/icon-plus.svg"
import icon_minus from "./assets/images/icon-minus.svg"

function App() {
  return (
    <>
      <main>
        <div className="wrapper">
          <header>
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <nav>
              <ul>
                <li>Collections</li>
                <li>Men</li>
                <li className="active">Women</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
            <div className="cart">
              <img src={icon_cart} alt="" />
            </div>
            <div className="avatar">
              <img src={avatar} alt="" />
            </div>
          </header>
          <div className="wrapper-narrow">
            <div className="layout-grid">
              <div className="col">
                <div className="product-images layout-grid">
                  <div className="image">
                    <img src={product1} alt="" />
                  </div>
                  <div className="image-thumbnail layout-grid">
                    <img src={product1Thumbnail} alt="" />
                    <img src={product2Thumbnail} alt="" />
                    <img src={product3Thumbnail} alt="" />
                    <img src={product4Thumbnail} alt="" />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="product-details">
                  <h3>Sneaker Company</h3>
                  <h1>Fall Limited Edition Sneakers</h1>
                  <p>
                    These low-profile sneakers are your perfect casual wear companion. Featuring a 
                    durable rubber outer sole, they’ll withstand everything the weather can offer.
                  </p>
                  <div className="price">
                    $125.00 <span className="discount">50%</span>
                  </div>
                  <div className="prive-no-discount">
                    $250.00
                  </div>
                  <footer>
                    <button>
                      <img src={icon_minus} alt="" />
                    </button>
                    <input type="number" name="" id="" value="0" />
                    <button>
                      <img src={icon_plus} alt="" />
                    </button>
                    <div className="add-to-cart">
                      <button className="add-to-cart-btn"><img src={icon_cart} alt="" /> Add to cart</button>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
