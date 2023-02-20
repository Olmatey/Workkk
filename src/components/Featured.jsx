import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Drink from './ui/Drink'
import { drinks } from '../data'

export default function Featured() {
    console.log(drinks.filter(drink => drink.price !== 'null' ).slice(0,4))


  return (
    <section id="features">
        <div className="container">
            <div className="row">
                <h2 className="section__title">
                    Featured <span className='purple'>Drinks</span>
                </h2>
                <div className="drinks parent__grid ">
                    {
                    drinks.filter((drink) => drink.type  ).slice(0,4)
                    .map((drink) => (<Drink drink={drink} key={drink.id}/>))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

