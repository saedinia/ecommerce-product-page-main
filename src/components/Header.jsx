import React, { useEffect, useState } from 'react'
import logo from "./../assets/images/logo.svg"
import avatar from "./../assets/images/image-avatar.png"
import icon_cart from "./../assets/images/icon-cart.svg"
import icon_menu from "./../assets/images/icon-menu.svg"
import icon_close from "./../assets/images/icon-close.svg"

function Header(props) {
    const cartCount = props.cartCount | 0;
    
    const [cartShow, setCartShow] = useState(false)

    const handleMenuMobile = (show) => {
        const nav = document.querySelector('header nav')
        show ? nav.classList.add('show') : nav.classList.remove('show')
    }

    const handleCartShow = () => {
        
        if (cartShow) {
            setCartShow(false)
        } else {
            setCartShow(true)
        }
    }
    
    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 800)
                handleMenuMobile(false)
        });
        props.onChangeState({'cartShow': cartShow})
    }, [cartShow])

    return (
    <header>
        <div className="logo-nav">
            <img src={icon_menu} alt="" className="menu-icon" onClick={() => handleMenuMobile(true)} />
            <img className="logo"src={logo} alt="" />
            <nav>
                <img src={icon_close} alt="" className='close-menu' onClick={() => handleMenuMobile(false)}/>
                <ul>
                    <li><a href="#">Collections</a></li>
                    <li><a href="#">Men</a></li>
                    <li><a href="#" className="active">Women</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
        <div className="cart-avatar">
            <div className="cart">
                <img src={icon_cart} alt="" onClick={() => handleCartShow()}/>
                <span className={`cart-count ${cartCount > 0 ? ' show' : ''}`}>{cartCount}</span>                
            </div>
            <div className="avatar">
                <img src={avatar} alt="" />
            </div>
        </div>
    </header>
  )
}

export default Header