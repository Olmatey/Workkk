import React from 'react'
import wine from '../assets/drinks.svg'
export default function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="row row__column">
                <a href="">
                    <figure className='footer__logo'>
                       <img className='footer__logo--img' src={wine} alt="" />

                    </figure>
                </a>
                <div className="footer__list">
                    <a href="/" className='footer__link'>Home</a>
                    <span className='footer__link no-cursor'>About</span>
                    <a href="/drinks" className='footer__link'>Drinks</a>
                    <span className="footer__link no-cursor">Contact</span>
                </div>
                <div className="footer__copyright">
                    Copyright &copy; 2023 Startstruck Liquor
                </div>
            </div>
        </div>
    </footer>
  )
}
