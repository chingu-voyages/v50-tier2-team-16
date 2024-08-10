import React from 'react'
import { useLocation } from "../../../contexts/FilterContext"
import { pricerange } from '../../../../data/pricerange.jsx'

export default function PriceRange(){

    const [isChecked, setIsChecked] = React.useState(false)
    const { priceRange, selectPrice } = useLocation()

    const checkbox = () => {
       console.log("priceRange", priceRange)
        return pricerange.map((price, index) => {
            return (<div>
                <input
                type="checkbox"
                name={price.name}
                // id={`checkbox-${index}`}
                id={price.name.split("$", 3)}
                checked={isChecked}
                onChange={(e)=>updateChecked(e)}
                />
                <label htmlFor={`checkbox-${index}`}>{price.name}</label>
            </div>)
        }
        )
      }

    function updateChecked(e) {
        setIsChecked(!isChecked)
        if (isChecked === true) {
             // const value = e.target.getAttribute('name').split("$", 3)
            selectPrice(e.currentTarget.id)
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