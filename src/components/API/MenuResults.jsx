import React, { useState } from "react";
import { getMenuAPI } from "./getMenuAPI";
import "./MenuResults.css";
import { useLocation } from "../../contexts/FilterContext";

export function MenuResults() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const { foodtype, state, city } = useLocation();
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
            setData(ByCountry())
            // setData(ByFoodtype())
            // return data
        }
        setFilteredData(FilterData())

    }, [foodtype, state, city]);

    function ByCountry() {

        if (data) {

            result = [...Object.values(data)].flat().filter((item) => {

                item.country === `${ city }, ${ state }`


                const splitCountry = item.country.split(", ");
                console.log("splitCountry", splitCountry);

                let test = splitCountry.every(loc => {
                    loc[0] === city || loc[1] === state
                    console.log('state or city registered')

                });
            }
            )
        }
    }

    // function ByFoodtype() {

    //   if (data) {
    //     result = [...Object.values(data)].flat().filter((item) => {
    //       if (item[foodtype] === foodtype) {
    //         return item[foodtype];
    //       }
    //       return result;
    //     });
    //   }
    // }
    // console.log('city', city)
    console.log("data", data);
    console.log("filteredData", filteredData);

    return (
        <div className="grid grid-cols-4 gap-4">
            <h1>Results:</h1>
            {!filteredData?.length && <h1>Filter criteria cannot find a match.</h1>}

            {filteredData && filteredData?.map((item, index) => (
                <div key={index} className="data-map-div ">
                    <h1>{item.name}</h1>
                    <img
                        className="h-auto max-w-lg rounded-lg"
                        src={item.img}
                        height="250px"
                        alt={item.name}
                    ></img>
                    <h2>{item.country}</h2>
                    <h2>{item.dsc}</h2>
                </div>
            ))}
        </div>
    );

}

export default MenuResults;
