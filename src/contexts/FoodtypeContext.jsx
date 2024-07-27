import React from 'react'
import { createContext, useContext } from 'react'

const FoodtypeContext = createContext()

export function useFoodtype() {
    return useContext(FoodtypeContext)
}

export const FoodtypeProvider = ({ children }) => {
    const [foodtype, setFoodtype] = React.useState(null)

    React.useEffect(()=> {
        selectFoodtype()
    }, [foodtype])

    const selectFoodtype = (foodtype) => {
        setFoodtype(foodtype)
    }

    return (
        <FoodtypeContext.Provider value={{ useFoodtype, foodtype, selectFoodtype }}> 
            { children }
        </FoodtypeContext.Provider>
    )
}