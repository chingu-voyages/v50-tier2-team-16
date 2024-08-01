import { foodtypes } from '../../../../data/foodtypes.jsx'
import { useLocation } from "../../../contexts/FilterContext"

export default function FoodDropdown(){

    const {selectFoodtype}  = useLocation()

    function selected(e){
        // console.log('e.target', e.target)
        e.preventDefault()
        selectFoodtype(e.target.value)
    }

    const foodtypesDropdown = () => {
        // console.log(foodtypes)
        return foodtypes.map((food, index) => {
            return <option key = {index} value={food}>{food}</option>
        })
    }

    return(
        <form>
            <label>
                <select onChange={selected}>
                    {foodtypesDropdown()}
                </select>
            </label>
        </form>
    )
}