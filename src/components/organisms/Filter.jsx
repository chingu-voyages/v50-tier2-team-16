import StateDropdown from '../molecules/filter/StateDropdown'
import CitySearch from '../molecules/filter/CitySearch'
import FoodDropdown from '../molecules/filter/FoodDropdown'

export default function Filter() {
    return (
        <div className='sm:mt-28 mt-44 m-2 w-5/6 border-black black border-2 py-2 px-2 grid sm:grid-cols-3 grid-cols-1 gap-1;'>
            <div className='firstFilter mt-4 m-0'>
                Filter by food category:
                <FoodDropdown />
            </div>

            <div className='secondFilter mt-4'>
                <h1>Choose your state:</h1>
                <StateDropdown />
            </div>

            <div className='thirdFilter mt-4'>
                <h1>Want to check if we deliver in your city?:</h1>
                <CitySearch />
            </div>

        </div>
    )
}