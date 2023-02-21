import React, {useState, useEffect} from 'react'
import Drink from '../components/ui/Drink'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'





const Drinks = ({drinks: initialDrinks}) => {
const [drinks, setDrinks] = useState(initialDrinks)

const [search, setSearch] = useState()




    function filterDrinks(filter){


        if(filter === "ALL_DRINKS") {
            setDrinks(initialDrinks.filter((drink) => drink.type ))
        }
       
        if(filter === "BEER") {
            setDrinks(initialDrinks.filter((drink) => drink.type === "Beer" ))
        }

        
        if (filter === "WINE") {
            setDrinks(initialDrinks.filter((drink) => drink.type === "Wine" ))
        }
        if (filter === "SPIRITS") {
            setDrinks(initialDrinks.filter((drink) => drink.type === "Spirits" ))
        } 
        if (filter === "SALE") {
            setDrinks(initialDrinks.filter((drink) => drink.isSale))
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
                                    <tbody> 
                                    <tr >
                                        <td>
                                            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
                                             className="search" />
                                        </td>
                                        <td>
                                            <a href="#" className="icon no-cursor">
                                            <FontAwesomeIcon className='no-cursor' icon="fa-magnifying-glass" />
                                            </a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            
   

                            
                            <select name="" id="filter" defaultValue='DEFAULT' onChange={(event) => filterDrinks(event.target.value)}>
                                <option value="" disabled>Sort</option>
                                <option value="ALL_DRINKS">All Drinks</option>
                                <option value="BEER">Beer</option>
                                <option value="WINE">Wine</option>
                                <option value="SPIRITS">Spirits</option>
                                <option value="SALE">Sale Items</option>


                            </select>
                        </div>
                        <div className="drinks">
                            {
                         drinks
                        .filter((drink) => { 
                            return !search  ? (drink) : drink.productName.includes(search) 
                            
                           }) 
                           .map((drink) => ( <Drink drink={drink} key={drink.id}/>))
                           

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


