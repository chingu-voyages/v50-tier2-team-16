import React, { useState, useEffect } from 'react'
import './App.css'
import Menu from './components/MenuAPI'
import OrderList from './components/Order'

function App() {

  const [ order, setOrder ] = useState([])

  useEffect (() => {

  }, [order])

  return (
    <>
      <div className="app-container">
        <div className="app-left">
          <Menu order={order}/>
        </div>
          <OrderList order={order}/>
      </div>
    </>
  )
}

export default App;
