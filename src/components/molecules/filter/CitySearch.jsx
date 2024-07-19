import React from 'react'
// import { getMenuAPI } from '../../MenuAPI'

export default function CitySearch() {

  const [searchQuery, setSearchQuery] = React.useState()

    function search(formData) {
      const query = formData.get("query");
      setSearchQuery(query)
    }

    // React.useEffect(()=>{
    //   getMenuAPI()
    //   // getByCity(searchQuery){
    //   //   const city = data.country.includes(searchQuery)
    //   // }
    // },[searchQuery])
    
    return (
      <form action={search}>
        <input name="query" placeholder="90210"/>
        <button type="submit">Search</button>
      </form>
    )
  }