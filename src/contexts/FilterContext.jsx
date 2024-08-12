import React from 'react'
import { createContext, useContext } from 'react'
import { states } from '../../data/states.jsx'
import { foodtypes } from '../../data/foodtypes.jsx'
import { pricerange } from '../../data/pricerange.jsx'

const FilterContext = createContext()

export function useLocation() {

    return useContext(FilterContext)
}

export const FilterProvider = ({ children }) => {
    const [foodtype, setFoodtype] = React.useState(foodtypes[0])
    const [state, setState] = React.useState(states[0])
    const [city, setCity] = React.useState("")
    const [priceRange, setPriceRange] = React.useState(pricerange[0])
    const [isChecked, setIsChecked] = React.useState(false)
    const [filteredData, setFilteredData] = React.useState([]);

    const selectFoodtype = (foodtype) => {
        setFoodtype(foodtype)
    }

    const selectState = (state) => {
        setState({
            Abbreviation: state
        })
    }

    const selectCity = (city) => {
        setCity(city)
    }

    const selectPrice = (price) => {
        console.log("price selected")
        setIsChecked(!isChecked)
        setPriceRange({
            name: price,
            num: price,
            checked: isChecked
        })
    }

    // console.log("pricerange-outside", priceRange)

    return (
        <FilterContext.Provider value={{ useLocation, foodtype, selectFoodtype, state, selectState, city, selectCity, priceRange, isChecked, setIsChecked, selectPrice, filteredData, setFilteredData }}>
            {children}
        </FilterContext.Provider>
    )
}