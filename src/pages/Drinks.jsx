import React, {useState, useEffect} from 'react'
import Drink from '../components/ui/Drink'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'





const Drinks = ({drinks: initialDrinks}) => {
const [drinks, setDrinks] = useState(initialDrinks)


    function filterDrinks(filter){


        if(filter === "ALL_DRINKS") {
            setDrinks(drinks.filter((drink) => drink.type ))
        }
       
        if(filter === "BEER") {
            setDrinks(drinks.filter((drink) => drink.type === "Beer" ))
        }

        
        if (filter === "WINE") {
            setDrinks(drinks.filter((drink) => drink.type === "Wine" ))
        }
            }

    return (
       
            <div id="drinks__body">
        <main className="drinks__main">
            <section>
                <div className="drinks__container">
                    <div className="row">
                        <div className="drinks__header">
                            <h2 className='section__title drinks__header--title'>All Drinks</h2>

                            <div className="box__container">
                                <table className="element__container">
                                    <tr>
                                        <td>
                                            <input type="text" placeholder='Search' className="search" />
                                        </td>
                                        <td>
                                            <a href="#" className="icon">
                                            <FontAwesomeIcon icon="fa-magnifying-glass" />
                                            </a>
                                        </td>
                                    </tr>
                                </table>
                            </div>


                            
                            <select name="" id="filter" defaultValue='DEFAULT' onChange={(event) => filterDrinks(event.target.value)}>
                                <option value="" disabled>Sort</option>
                                <option value="ALL_DRINKS">All Drinks</option>
                                <option value="BEER">Beer</option>
                                <option value="WINE">Wine</option>


                            </select>
                        </div>
                        <div className="drinks">
                            {
                           drinks.map((drink) => ( <Drink drink={drink} key={drink.id}/>))

                            } 

                        </div>
                    </div>
                </div>

            </section>
        </main>
    </div>
        
    );
}

export default Drinks;


