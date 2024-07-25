import {React, useState, useEffect} from 'react';
import './Order.css'

function OrderList( {order, setOrder} ) {

    // const updateQuantity = () => {
    //     order.filter((a) => a.id === item.id) &&
    //     order.qty + 1;
    // };

    console.log(order)

    let totalPrice = 0;

    order.forEach(value => {
      totalPrice += value.price * value.qty;
    });

    return (
        <div className="order-list-container">
            <h1 className="order-title">Order</h1>
            <div className="order-list-items">
                {order.map(item =>
                    <div id={item.id} className="order-map-div">
                        <img className="order-map-div-left"
                             src={item.img} width="100px"/>
                        <div className="order-map-div-right">
                            <h1 className="order-name">{item.name}</h1>
                            <div className="order-qty-div">
                                <button className="subtract-qty-button"
                                        onClick={() => {order.find((a) => a.id === item.id) &&
                                            order.qty + 1;}}>-</button>
                                <p className="order-qty">{item.qty}</p>
                                <button className="add-qty-button"
                                        // onClick={() => updateQuantity()}
                                >+</button>
                            </div>
                            <button className="order-remove-button"
                                    onClick={() => {
                                setOrder(
                                    order.filter(a =>
                                        a.id !== item.id
                                    )
                                )
                            }}
                            >Remove</button>
                            
                        </div>
                    </div>
                )}
            </div>
            <button className="clear-all-button"
                    onClick={() => {
                        setOrder([])}}
            >Clear All</button>
            <h1 className="order-total">Total: ${totalPrice} </h1>
        </div>
    );
}

export default OrderList;