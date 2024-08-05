
import React, {useState} from 'react';
import { getMenuAPI } from './getMenuAPI'
import './MenuResults.css'
import { useLocation } from "../../contexts/FilterContext"
import { ContentCutOutlined, SettingsSuggestRounded } from '@mui/icons-material';
import Rating from '@mui/material/Rating'

export function MenuResults() {
    const [data, setData] = useState([])
    const user = JSON.parse(localStorage.getItem('currentUser'))
    const [order , setOrder] = useState([])
    const { foodtype, state, city, filteredData, setFilteredData } = useLocation();
    let result = []

    React.useEffect(() => {
        async function getResults() {
            const menuData = await getMenuAPI();
            setData(menuData);
        }
        getResults();
    }, []);

    React.useEffect(() => {
        // console.log("city", city);

        function FilterData() {
            return FilterDownByType(ByCountry());
        }

        function FilterDownByType(intermediateArray) {
            return ByFoodType(intermediateArray);
        }

        setFilteredData(FilterData())

    }, [foodtype, state, city]);

    function ByCountry() {

        if (true) {

            result = [...Object.values(data)].flat().filter((item, index) => {

                if (index < [...Object.values(data)].flat().length - 1) {
                    const splitCountry = item.country.split(", ");
                    let cityOrStateMatched = (splitCountry[0] === (`${ city }`) || splitCountry[1] === (`${ state }`));
                    return (cityOrStateMatched);
                }
            })
        }
        return result;
    }

    function ByFoodType(cityFilteredArray) {
        if (foodtype !== "Select a food category") {

            return cityFilteredArray.filter((item) => {

                for (let i = 0; i < data[`${ foodtype }`].length; i++) {
                    if (item.id === data[`${ foodtype }`][i].id) {
                        return true
                    }
                }
                return false;
            })

        } else {
            return cityFilteredArray
        }
    }

    function getOrder() {
        if (user) {
            setOrder(user.order)
        } else {
            null
        }
      getOrder();
    }

    return (

        <div className="grid grid-cols-4 gap-4">
            <h1>Results:</h1>
            {!filteredData?.length && <h1>Filter criteria cannot find a match.</h1>}

            {filteredData && filteredData?.map((item, index) => (
                <div key={index} className="data-map-div ">
                    <h1>{item.name}</h1>
                    <Rating defaultValue={item.rate}/>
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
    );

}

export default MenuResults;
