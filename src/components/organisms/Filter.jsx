import StateDropdown  from '../molecules/filter/StateDropdown'
import CitySearch from '../molecules/filter/CitySearch'
import FoodDropdown from '../molecules/filter/FoodDropdown'

export default function Filter(){
    return(
        <div className='m-2 w-5/6 border-black black border-2 py-2 px-2 grid grid-cols-3 gap-1'>
            <div className='firstFilter'>
                Filter by food category:
                <FoodDropdown />
            </div>
            <div>
            <div className='secondFilter'>
                <h1>Choose your state:</h1>
                <StateDropdown />
            </div>
        
            <div>
                <h1>Want to check if we deliver in your city?:</h1>
                <CitySearch />
            </div>
            </div>
        </div>
    )
}