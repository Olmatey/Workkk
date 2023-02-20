import React from 'react';  
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import logo from '../assets/drinks.svg'


const Nav = () => {
function openMenu() {
    document.body.classList += 'menu--open'
}

function closeMenu() {
    document.body.classList.remove( 'menu--close')
}

    return (
        <nav>
            <div className="nav__container">
                <a href="/">
                    <img src={logo} className='logo' alt="" />
                </a>
                <ul className="nav__links">
                    <li className="nav__list">
                        <a href="/" className="nav__link">
                            Home
                        </a>
                    </li>
                    <li className="nav__list">
                        <a href="/drinks" className="nav__link">
                            Drinks
                        </a>
                    </li>
                    <button className="btn__menu" onClick={openMenu}>
                        <FontAwesomeIcon icon='bars'/>
                    </button>
                    <li className="nav__icon">
                    <a href="/" className='nav__link'>
                        <FontAwesomeIcon icon='shopping-cart'/>
                    </a>
                </li>
                </ul>

                <div className="menu__backdrop">
                <button className="btn__menu btn__menu--close" onClick={closeMenu} >
                    <FontAwesomeIcon icons='times'/>
                </button>
                <ul className="menu__links">
                    <li className="menu__link">
                        <a href="/" className="menu__links">
                            Home
                        </a>
                    </li>
                    <li className="menu__link">
                        <a href="/drinks" className="menu__links">
                            drinks
                        </a>
                    </li>
                    <li className="menu__link">
                        <a href="/cart" className="menu__links">
                            Cart
                        </a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    );
}

export default Nav;
