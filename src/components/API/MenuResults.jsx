import React, {useState} from 'react';
import { getMenuAPI } from './getMenuAPI'
import './MenuResults.css'
import { useLocation } from "../../contexts/FilterContext"
import { ContentCutOutlined, SettingsSuggestRounded } from '@mui/icons-material';

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

                    return item.country === `${city}, ${state}`
                })} else {
                    results =[]
                }
                    return results
                }

               
                setFilteredData(FilterByCountry())
            }, [foodtype, state, city, data])
               
 

    return (
        <div className="grid grid-cols-4 gap-4">

             <h1>Results:</h1>
          
             {filteredData.map((item, index) => (
                <div key={index} className="data-map-div ">
                    <h1>{item.name}</h1>
                    <img className = "h-auto max-w-lg rounded-lg" src={item.img} height="250px" alt={item.name}></img>
                    <h2>{item.country}</h2>
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
    );
}

export default MenuResults;