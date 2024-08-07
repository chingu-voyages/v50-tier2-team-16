import React from 'react'
import { useLocation } from "../../../contexts/FilterContext"

export default function CitySearch() {

  const { selectCity } = useLocation()

    function search(e) {
      e.preventDefault()
      const formData = new FormData(e.target)
      const query = formData.get("query")
      selectCity(query)
    }

    return (
      <form onSubmit={search}>
        <label>
          City:
          <input name="query" placeholder=" San Francisco" />
        </label>
        <button type="submit"  className="m-2 p-2 bg-slate-200 rounded-md">Search</button>
      </form>
    )
  }