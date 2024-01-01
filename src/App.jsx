import React, { useCallback, useState } from "react"
import icon_close from "./assets/images/icon-close.svg"
import icon_delete from "./assets/images/icon-delete.svg"
import Header from "./components/Header"
import Slider from "./components/Slider"
import ProductDetails from "./components/ProductDetails"
import Quantity from "./components/Quantity"


function App() {
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
                <ProductDetails/>
                <Quantity/>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
