import StateDropdown  from '../molecules/filter/StateDropdown'
import CitySearch from '../molecules/filter/CitySearch'
import FoodDropdown from '../molecules/filter/FoodDropdown'

export default function LocationFilter(){
    return(
        <div className='m-2 w-5/6 border-black black border-2 py-2 px-2 grid grid-cols-3 gap-1'>
            <div className='firstFilter'>
                <FoodDropdown />
            </div>
            <div>
            <div className='secondFilter'>
                <h1>Search State by Dropdown:</h1>
                <StateDropdown />
            </div>
        
            <div>
                <h1>Search by City:</h1>
                <CitySearch />
            </div>
            </div>
        </div>
    )
}