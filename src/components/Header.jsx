import React, { useEffect } from 'react'
import logo from "./../assets/images/logo.svg"
import avatar from "./../assets/images/image-avatar.png"
import icon_cart from "./../assets/images/icon-cart.svg"
import icon_menu from "./../assets/images/icon-menu.svg"
import icon_close from "./../assets/images/icon-close.svg"

function Header() {
  
    const handleMenuMobile = (show) => {
        const nav = document.querySelector('header nav')
        show ? nav.classList.add('show') : nav.classList.remove('show')
    }
    
    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 960)
                handleMenuMobile(false)
        })
    }, [])

    return (
    <header className="layout-grid">
        <div className="col logo-nav">
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
        <div className="col cart-avatar">
            <div className="cart">
                <img src={icon_cart} alt="" />
                <span>3</span>
            </div>
            <div className="avatar">
                <img src={avatar} alt="" />
            </div>
        </div>
    </header>
  )
}

export default Header