import React from 'react'
import { createContext, useContext } from 'react'

const LocationContext = createContext()

export function useLocation() {
    // const locContext = useContext(LocationContext)
    // const {foodtype, state, city, selectState} = locContext
    // return locContext
    return useContext(LocationContext)
}

export const LocationProvider = ({ children }) => {
    const [foodtype, setFoodtype] = React.useState(null)
    const [state, setState] = React.useState("CA")
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
        <LocationContext.Provider value={{ useLocation, foodtype, selectFoodtype, state, selectState, city, selectCity }}> 
            { children }
        </LocationContext.Provider>
    )
}