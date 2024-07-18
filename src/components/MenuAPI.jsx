import {React, useState, useEffect} from 'react';
import './MenuAPI.css'

async function getMenuAPI() {
    try {
        const res = await fetch("https://menus-api.vercel.app/");
        const data = await res.json();
        return data;

    } catch {
        console.error('trouble fetching data')
    }
  }
  
    const data = await getMenuAPI();

function Menu( {order} ) {

    console.log(data)
    const bbqs = data.bbqs
    const bestFoods = data['best-foods']
    const breads = data.breads
    const burgers = data.burgers
    const chocolates = data.chocolates
    const desserts = data.desserts
    const drinks = data.drinks
    const friedChicken = data['fried-chicken']
    const iceCream = data['ice-cream']
    const ourFoods = data['our-foods']
    const pizzas = data.pizzas
    const porks = data.porks
    const sandwitches = data.sandwitches
    const sausages = data.sausages
    const steaks = data.steaks

    useEffect (() => {

    }, [order])

    console.log(order)

    return (
        <div>
            <div className="bbqs-container">
            {bbqs.map(item => 
                <div key={item.id} className="bbqs-map-div">
                    <h1>{item.name}</h1>
                    <img src={item.img} height="250px"/>
                    <h2>{item.country}</h2>
                    <button className="add-to-order-button"
                            onClick = { ()  => {order.push({
                                id: item.id,
                                name: item.name,
                                img: item.img,
                                country: item.country,
                            })}}
                            >Add to Order</button>
                </div>
            )}
            </div>
        </div>
    );
}

export default Menu;