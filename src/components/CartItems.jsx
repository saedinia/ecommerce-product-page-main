import React from 'react'
import icon_delete from "./../assets/images/icon-delete.svg"
import product1Thumbnail from "./../assets/images/image-product-1-thumbnail.jpg"

function CartItems(props) {
    const cartShowStatus = props.show | false

    return (
    <div className={`cart-items ${cartShowStatus ? ' show' : ''}`}>
        <div className="cart-container">
            <div className="cart-header">
                <h4>Cart</h4>
            </div>
            <div className="items">
                <div className="item">
                    <div className="col">
                        <img className="item-image" src={product1Thumbnail} alt="" />
                    </div>
                    <div className="col">
                        <div className="item-name">Fall Limited Edition Sneakers</div>
                        <div className="item-prices">
                            <span className='item-price'>$125.00</span>x<span className="item-quanity">3</span><span className="item-sum">$375.00</span>
                        </div>
                    </div>
                    <div className="col">
                        <img className="delete-item" src={icon_delete} alt="" />
                    </div>
                </div>

                <div className="item">
                    <div className="col">
                        <img className="item-image" src={product1Thumbnail} alt="" />
                    </div>
                    <div className="col">
                        <div className="item-name">Fall Limited Edition Sneakers</div>
                        <div className="item-prices">
                            <span className='item-price'>$125.00</span>x<span className="item-quanity">3</span><span className="item-sum">$375.00</span>
                        </div>
                    </div>
                    <div className="col">
                        <img className="delete-item" src={icon_delete} alt="" />
                    </div>
                </div>

                <div className="item">
                    <div className="col">
                        <img className="item-image" src={product1Thumbnail} alt="" />
                    </div>
                    <div className="col">
                        <div className="item-name">Fall Limited Edition Sneakers</div>
                        <div className="item-prices">
                            <span className='item-price'>$125.00</span>x<span className="item-quanity">3</span><span className="item-sum">$375.00</span>
                        </div>
                    </div>
                    <div className="col">
                        <img className="delete-item" src={icon_delete} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems