import { foodtypes } from '../../../../foodtypes.jsx'

export default function FoodDropdown(){

    const foodtypesDropdown = () => {
        console.log(foodtypes)
        foodtypes.map(food => {
            <option value={food}>{food}</option>
        })
    }

    return(
        <form>
            <label>
                First, choose your food category:
                <select>
                    {foodtypesDropdown}
                </select>
            </label>
        </form>
    )
}