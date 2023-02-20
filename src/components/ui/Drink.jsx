import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'




const Drink = ({drink}) => { 
    function imageLoaded(){

    }
   

 
    return (
       <div className="drink">
        
    <a href="">
        <figure className='drink__img--wrapper'>
            <img className='drink__img' onLoad={imageLoaded} src="https://d3avoj45mekucs.cloudfront.net/rojakdaily/media/letchumy-tamboo/daily%20stories/heineken.jpg" alt="" />
        </figure>
    </a>
    <div className="drink__title">
        <a href="/" className='drink__title--link'>
            {drink.productName}
        </a>
    </div>
    <div className="drink__ratings">
        <FontAwesomeIcon icon='star' />
        <FontAwesomeIcon icon='star' />
        <FontAwesomeIcon icon='star' />
        <FontAwesomeIcon icon='star' />
        <FontAwesomeIcon icon='star-half-alt' />
    </div>
    <div className="drink__price">
        {
            drink.isSale ? <> <span className='drink__price--normal'>SALE</span>
        {drink.price}</> : drink.price

        }
    

 
       
    </div>
</div>
    );
}

export default Drink;


