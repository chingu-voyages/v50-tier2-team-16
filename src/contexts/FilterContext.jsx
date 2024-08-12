import React from 'react'
import { createContext, useContext } from 'react'
import { states } from '../../data/states.jsx'
import { foodtypes } from '../../data/foodtypes.jsx'

const FilterContext = createContext()

export function useLocation() {

    return useContext(FilterContext)
}

export const FilterProvider = ({ children }) => {
    const [foodtype, setFoodtype] = React.useState(foodtypes[0])
    const [state, setState] = React.useState(states[0])
    const [city, setCity] = React.useState("")
    const [filteredData, setFilteredData] = React.useState([]);

    const selectFoodtype = (foodtype) => {
        setFoodtype(foodtype)
    }

    const selectState = (state) => {
        setState(state)
    }

    const selectCity = (city) => {
        setCity(city)
    }

    return (
        <FilterContext.Provider value={{ useLocation, foodtype, selectFoodtype, state, selectState, city, selectCity, filteredData, setFilteredData }}>
            {children}
        </FilterContext.Provider>
    )
}