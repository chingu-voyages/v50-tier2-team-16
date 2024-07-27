import React, {useState} from 'react';
import { getMenuAPI } from './getMenuAPI'
import './MenuResults.css'
import { useLocation } from "../../contexts/LocationContext"

export function MenuResults() {
    const [data, setData] = useState([])
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
        function FilterByCountry(){
            if (data){
                // console.log('data', [...Object.values(data)].flat())
                const results = [...Object.values(data)].flat().filter((item)=> {
                    
                    if(item.country === `${city}, ${state}`){
                        return true
                        // return (
                        //     <div className="data-map-div">
                        //         <h1>{item.name}</h1>
                        //         <img src={item.img} height="250px"/>
                        //         <h2>{item.country}</h2>
                        //     </div>)
                    }
                })
               
                setData(results)
                // console.log('data', data)
                console.log('results', results)
                console.log(Array.isArray(`${results}`));
            }
            // console.log('data', data)
        }

    //     function FilterByFoodtype(){
    //         if(data){
    //             const filteredFoodtype = data
    //             if(data[foodtype] === foodtype){
    //                 return  filteredFoodtype
    //             }
    //             setData(filteredFoodtype)
    //         }
        
    // FilterByFoodtype() 
    FilterByCountry()

    }, [foodtype, state, city])

    console.log('data', data)
    // console.log(Array.isArray(data));
    // console.log('foodtype', foodtype)
 

    return (
        <div>

             <h1>Results:</h1>
            {/* <div className="location-container">
               {data.map((item) => {  
                    <h1>{item.name}</h1>
                    JSON.stringify(item)
                })}
            </div>   */}

            {JSON.stringify(data)}

            {/* {data.map((item, index) => {
                    return (
                    <div key={index} className="data-map-div">
                        <h1>{item.name}</h1>
                        <img src={item.img} height="250px"/>
                        <h2>{item.country}</h2>
                    </div>)
            })} */}

            {/* {data.map((item, index) => {
                JSON.stringify(item)
                return(
                
                <div key={index}>
                    <h1>{item.name}</h1> 
                    <img src={item.img} height="250px"></img>
                    <h2>{item.country}</h2>
                </div>
                )
            })} */}

        {/* {data.map((item, index) => (
            <div key={index} className="data-map-div">
                <h1>{item.name}</h1>
                <img src={item.img} height="250px" alt={item.name}></img>
                <h2>{item.country}</h2>
            </div>
        ))} */}

        </div>
    );
}

export default MenuResults;