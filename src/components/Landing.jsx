import React from 'react';
import Beer from '../assets/page.svg'


const Landing = () => {
    return (
        <section id="landing">
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h1>Australias most awarded online beverage platform</h1>
                        <h2>Find your Drink with <span  className='purple'>Startstruck Liquor</span></h2>
                        <a href="#features">
                            <button className="btn">
                               Browse Drinks 
                            </button>
                        </a>
                    </div>
                    <figure className='header__img--wrapper'>
                        <img src={Beer} alt="" />
                    </figure>
                </div>
            </header>
        </section>
    );
}

export default Landing;
