import StateDropdown  from '../molecules/filter/StateDropdown'
import CitySearch from '../molecules/filter/CitySearch'
import FoodDropdown from '../molecules/filter/FoodDropdown'
import PriceRange from '../molecules/filter/PriceRange'

export default function Filter(){
    return(
        
            
        <div className='mt-28 m-2 w-5/6 border-black black border-2 py-2 px-2 grid grid-rows-2 gap-1;'>
            <h1 className="text-center">Filter results</h1>
            <div className="grid grid-cols-4">
                <div className='firstFilter mt-4 m-0'>
                    By food category:
                    <FoodDropdown />
                </div>
                
                <div className='secondFilter mt-4'>
                    <h1>By state:</h1>
                    <StateDropdown />
                </div>
            
                <div className='thirdFilter mt-4'>
                    <h1>By city search:</h1>
                    <CitySearch />
                </div>

                <div className='fourthFilter mt-4'>
                    By price range:
                    <PriceRange />
                </div>
            </div>
        </div>
        
    )
}