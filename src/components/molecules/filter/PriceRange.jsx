import React from 'react'
import { useLocation } from "../../../contexts/FilterContext"
import { pricerange } from '../../../../data/pricerange.jsx'

export default function PriceRange(){

    const { priceRange, selectPrice, isChecked, setIsChecked } = useLocation()

    const checkbox = () => {
       console.log("priceRange", priceRange)
        return pricerange.map((price, index) => {
            return (<div key={price.index}>
                <input
                type="checkbox"
                name={price.name}
                id={`checkbox-${index}`}
                // id={price.name.split("$", 3)}
                checked={price.isChecked}
                onChange={(e)=>updateChecked(e)}
                />
                <label htmlFor={`checkbox-${index}`}>{price.name}</label>
            </div>)
        }
        )
      }

    function updateChecked(e) {
        console.log("e.target.getAttribute('name')", e.target.getAttribute('name'))
        console.log('e.target.checked', e.target.checked)
       
        if (e.target.checked === true) {
            const getNum = parseInt(e.target.getAttribute('name').substring(1, 5))
            console.log("getNum", getNum)
            // console.log(typeof getNum)
            selectPrice(getNum)
        } else {
            console.log("price range not specified")
        }
        
    }

    return (
        <form>
            {checkbox()}
        </form>
    )
    
}