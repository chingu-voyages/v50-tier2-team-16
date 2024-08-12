
import React, { useState } from 'react';
import { getMenuAPI } from './getMenuAPI'
import './MenuResults.css'
import { useLocation } from "../../contexts/FilterContext"
import { useUser } from '@/contexts/UserContext';
import { ContentCutOutlined, SettingsSuggestRounded } from '@mui/icons-material';
import Rating from '@mui/material/Rating'
import toast from 'react-hot-toast';

export function MenuResults() {

    const { foodtype, state, city, priceRange, filteredData, setFilteredData } = useLocation();
    const { user, updateOrder, incrementOrder } = useUser();

    const [data, setData] = useState([])
    const [addedFilters, setAddedFilters] = useState([])

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
        
        // FilterDownByType(ByPrice());

        setFilteredData(FilterData())

    }, [foodtype, state, city, priceRange]);

    function ByCountry() {
        if (state.Abbreviation !== "none" || city !== ""){
            if (!addedFilters.includes("location")){
                setAddedFilters(prev => [...prev, "location"])
            }
        }
        console.log('state', state)
            result = [...Object.values(data)].flat().filter((item, index) => {

                if (index < [...Object.values(data)].flat().length - 1) {
                    const splitCountry = item.country.split(", ");
                    let cityOrStateMatched = (splitCountry[0] === (`${ city }`) || splitCountry[1] === (`${ state }`));
                    return (cityOrStateMatched);
                }
            })
       
        return result;
    }
    

    function ByFoodType(FilteredArray) {
        if (foodtype !== "Select a food category") {
            if (!addedFilters.includes("foodtype")){
                setAddedFilters(prev => [...prev, "foodtype"])
            }
            return FilteredArray.filter((item) => {

                for (let i = 0; i < data[`${ foodtype }`].length; i++) {
                    if (item.id === data[`${ foodtype }`][i].id) {
                        return true
                    }
                }
                
                return false;
            })

        } else {
            return FilteredArray
        }
    }
    console.log("pricerange", priceRange)
    console.log('addedFilters', addedFilters)

    function ByPrice(FilteredArray) {
        console.log("inside price")
        if (priceRange.num > 0) {
            console.log("inside price2")
            return FilteredArray.filter(item => {

                for (let i=0; i < data.price.length; i++) {
                    if (priceRange.name > item.price) {
                        return true
                    } 
                }
                setAddedFilters(prev => [...prev, "price"])
                return true
            })
        } else {
            return FilteredArray
        }
    }

    const tags = () => {
        addedFilters.map((tag, index) => {
            return <h2 key={index}>{tag}</h2>
        })
    }

    return (

        <div className="grid grid-cols-4 gap-4 mt-10 m-2 ">
            <h1>Results:</h1>
            {tags}
            {!filteredData?.length && <h1>Filter criteria cannot find a match.</h1>}

            {filteredData && filteredData?.map((item, index) => (
                <div key={index} className="data-map-div ">
                    <h1>{item.name}</h1>
                    <Rating defaultValue={item.rate} value={item.rate} />
                    <img src={item.img} height="250px" alt={item.name}></img>
                    <h2>{item.country}</h2>
                    <h2>{item.dsc}</h2>
                    <p className="items-price">${item.price}</p>
                    {!user ? null : <button className="add-to-order-button"
                        onClick={() => {
                            const orderExist = user.order.find(a => a.id === item.id)
                            if (!orderExist) {
                                updateOrder({
                                    id: item.id,
                                    name: item.name,
                                    img: item.img,
                                    country: item.country,
                                    price: item.price,
                                    rate: item.rate,
                                    qty: 1,
                                })
                            } else {
                                incrementOrder(user.order[user.order.findIndex((u) => u.id === item.id)])
                            }
                            toast.success(`Successfully added to cart!`)
                        }}
                    >Add to Order</button>}
                </div>
            ))}
        </div>
    );

}

export default MenuResults;
