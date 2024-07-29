import React, {useState} from 'react';
import { getMenuAPI } from './getMenuAPI'
import './MenuResults.css'
import { useLocation } from "../../contexts/LocationContext"

export function MenuResults() {
    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const { foodtype, state, city } = useLocation()

    React.useEffect(()=> {
        async function getResults() {
            const menuData = await getMenuAPI()
            setData(menuData)
        }
        getResults()
    }, [])

    React.useEffect(()=> {
      console.log('city', city)
      console.log('state', state)
      let results= []
        function FilterByCountry(){
            if (data){
                // console.log('data', [...Object.values(data)].flat())
                results = [...Object.values(data)].flat().filter((item)=> {
                    
                    return item.country === `${city}, ${state}`
                })} else {
                    results =[]
                }
                    return results
                }
               
                setFilteredData(FilterByCountry())
            }, [foodtype, state, city, data])
                // console.log('data', data)
                // console.log('results', results)
                // console.log(Array.isArray(`${results}`));
            
            // console.log('data', data)
      

    //     function FilterByFoodtype(){
    //         if(data){
    //             const filteredFoodtype = data
    //             if(data[foodtype] === foodtype){
    //                 return  filteredFoodtype
    //             }
    //             setData(filteredFoodtype)
    //         }
        
    // FilterByFoodtype() 
 

    return (
        <div>

             <h1>Results:</h1>
          
             {filteredData.map((item, index) => (
                <div key={index} className="data-map-div">
                    <h1>{item.name}</h1>
                    <img src={item.img} height="250px" alt={item.name}></img>
                    <h2>{item.country}</h2>
                </div>
             ))}

        </div>
    );
}

export default MenuResults;