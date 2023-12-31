import React, { useCallback, useState } from "react"
import icon_cart from "./assets/images/icon-cart.svg"
import icon_close from "./assets/images/icon-close.svg"
import icon_delete from "./assets/images/icon-delete.svg"
import icon_plus from "./assets/images/icon-plus.svg"
import icon_minus from "./assets/images/icon-minus.svg"
import Header from "./components/Header"
import Slider from "./components/Slider"


function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <main>
        <div className="wrapper">
          <Header />
          <div className="wrapper-narrow">
            <div className="main-content layout-grid">
              <div className="col">
               <Slider />
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
                    <button onClick={() => setCount((prevCount) => prevCount - 1)}>
                      <img src={icon_minus} alt="" />
                    </button>
                    <input type="number" name="count" id="count" value={count} disabled/>
                    <button onClick={() => setCount((prevCount) => prevCount + 1)}>
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
