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
            return ByCountry();
        }
        setFilteredData(FilterData())

    }, [foodtype, state, city]);

    function ByCountry() {

        if (data) {

            result = [...Object.values(data)].flat().filter((item, index) => {
                if (index < (1455)) {
                    const splitCountry = item.country.split(", ");
                    let cityOrStateMatched = (splitCountry[0] === (`${ city }`) || splitCountry[1] === (`${ state }`));
                    return (cityOrStateMatched);
                }
            })
        }
        return result;
    }

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
