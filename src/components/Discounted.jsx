import React from 'react'
import {books, drinks} from '../data'
import Drink from './ui/Drink'

export default function Discounted() {
  return (
    <section id="recent">
        <div className="container">
            <div className="row">
                <h2 className="section__title">
                    Discounted <span className='purple'>Drinks</span>
                </h2>
                <div className="drinks">
                    {
                          
                            drinks.filter((drink) => drink.isSale  ).slice(0,4)
                            .map((drink) => (<Drink drink={drink} key={drink.id}/>))
                            
                    }

                </div>
            </div>
        </div>
    </section>
  )
}
