import { useState } from 'react'
import icon_plus from "./../assets/images/icon-plus.svg"
import icon_minus from "./../assets/images/icon-minus.svg"
import icon_cart_white from "./../assets/images/icon-cart-white.svg"

function Quantity() {
    const [count, setCount] = useState(0)
    return (
    <div className="quantity">
        <div className="quantity-container">
            <button className="minus-btn" onClick={() => setCount((prevCount) => prevCount > 0 ? prevCount - 1 : prevCount)}>
                <img src={icon_minus} alt="" />
            </button>
            <input type="number" name="count" id="count" value={count} disabled/>
            <button className="plus-btn" onClick={() => setCount((prevCount) => prevCount + 1)}>
                <img src={icon_plus} alt="" />
            </button>
        </div>
        <div className="add-to-cart">
            <button className="add-to-cart-btn"><img src={icon_cart_white} /> Add to cart</button>
        </div>
    </div>
  )
}

export default Quantity