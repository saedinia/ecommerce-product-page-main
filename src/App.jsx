import React, { useCallback, useState } from "react"
import Header from "./components/Header"
import Slider from "./components/Slider"
import ProductDetails from "./components/ProductDetails"
import CartItems from "./components/CartItems"

function App() {
  const [cartCount, setCartCount] = useState(0)
  const [cartShow, setCartShow] = useState(false);
  
  const onChangeState= (newValues) => {
    setCartCount(newValues['cartCount']);
    setCartShow(newValues['cartShow']);
  }

  return (
    <>
      <main>
        <div className="wrapper">
          <Header cartCount={cartCount} onChangeState={onChangeState}/>
          <div className="wrapper-narrow">
            <div className="main-content layout-grid">
              <div className="col">
               <Slider />
              </div>
              <div className="col">
                <ProductDetails onChangeState={onChangeState}/>
              </div>
            </div>
          </div>

          <CartItems show={cartShow}/>
        </div>
      </main>
    </>
  )
}

export default App
