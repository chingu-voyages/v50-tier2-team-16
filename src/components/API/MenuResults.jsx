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
      
      setFilteredData(ByCountry())
      setFilteredData(ByFoodtype())
      // return data
    }
   
    console.log("filteredData", filteredData);
   
    FilterData();
  }, [foodtype, state, city]);

  function ByCountry() {
   
    if (data) {
      result = [...Object.values(data)].flat().filter((item) => {
        if (item.country === `${city}, ${state}`) {
          return item.country;
        } else if (item.country) {
          const splitCountry = item.country.split(", ");
          // console.log("splitCountry[0]", splitCountry[0]);
          // console.log("splitCountry[1]", splitCountry[1]);
          console.log('city', city)
          console.log('state', state)
         
          if (splitCountry[0] === city || splitCountry[1] === state) {
            console.log('state or city registered')
            // console.log("state", state);
            return item.country;
          }
        } else {
            console.log('nada')
          return result;
        }
        return result;
      });
    }
  }

  function ByFoodtype() {
    
    if (data) {
      result = [...Object.values(data)].flat().filter((item) => {
        if (item[foodtype] === foodtype) {
          return item[foodtype];
        }
        return result;
      });
    }
  }
  console.log('city', city)
  console.log("data", data);
  console.log("filteredData", filteredData);

  return (
    <div className="grid grid-cols-4 gap-4">
      <h1>Results:</h1>

      {filteredData && filteredData.map((item, index) => (
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
