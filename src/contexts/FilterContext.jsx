import React from 'react'
import { createContext, useContext } from 'react'
import { states } from '../../data/states.jsx'
import { foodtypes } from '../../data/foodtypes.jsx'

const FilterContext = createContext()

export function useLocation() {
    // const locContext = useContext(FilterContext)
    // const {foodtype, state, city, selectState} = locContext
    // return locContext
    return useContext(FilterContext)
}

export const FilterProvider = ({ children }) => {
    const [foodtype, setFoodtype] = React.useState(foodtypes[0])
    const [state, setState] = React.useState(states[0])
    const [city, setCity] = React.useState("Los Angeles")

    React.useEffect(()=> {
        selectFoodtype()
    }, [foodtype])

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
        <FilterContext.Provider value={{ useLocation, foodtype, selectFoodtype, state, selectState, city, selectCity }}> 
            { children }
        </FilterContext.Provider>
    )
}