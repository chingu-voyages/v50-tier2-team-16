import React, {useState} from 'react';
import { getMenuAPI } from './getMenuAPI'
import './MenuResults.css'
import { useLocation } from "../../contexts/FilterContext"
import { ContentCutOutlined, SettingsSuggestRounded } from '@mui/icons-material';
import Rating from '@mui/material/Rating'

export function MenuResults() {
    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const { foodtype, state, city } = useLocation()
    
    const user = JSON.parse(localStorage.getItem('currentUser'))

    // console.log(user.order)

    const [order , setOrder] = useState([])

    console.log(order)

    function getOrder() {
        if (user) {
            setOrder(user.order)
        } else {
            null
        }
      getOrder();
    }


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
                results = [...Object.values(data)].flat().filter((item)=> {
                    if (item.country === `${city}, ${state}`){
                        return item.country
                    } else if (item.country) {
                        const splitCountry = item.country.split(', ')
                        console.log('splitCountry', splitCountry)
                        if (splitCountry[0] === city || splitCountry[1] === state){
                            return item.country
                        }
                    } else {
                        return results=[]
                    }
                    })
                    
                }
                    console.log('results', results)
                    return results

                }


               
                setFilteredData(FilterByCountry())
            }, [foodtype, state, city, data])
               
 

    return (
        <div>
                <div className="menu-container">
                    {filteredData.map((item, index) => (
                        <div key={index} className="menu-map-div">
                            <h1>{item.name}</h1>
                            <Rating value={item.rate}/>
                            <img src={item.img} height="250px" alt={item.name}></img>
                            <h2>{item.country}</h2>
                            <h2>{item.dsc}</h2>
                            <p className="items-price">${item.price}</p>
                            {!user ? null : <button className="add-to-order-button"
                                    onClick = { ()  => { const orderExist = order.find(a => a.id === item.id) 
                                        if(!orderExist) {setOrder([
                                            ...order,
                                            {
                                            id: item.id,
                                            name: item.name,
                                            img: item.img,
                                            country: item.country,
                                            price: item.price,
                                            rate: item.rate,
                                            qty: 1,
                                        }])} else {null}
                                    localStorage.setItem('order', order)
                                }}
                                    >Add to Order</button> }

                        </div>
                    ))}
                </div>
        </div>
    );
}

export default MenuResults;