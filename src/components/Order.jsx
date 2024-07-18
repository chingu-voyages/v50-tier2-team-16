import {React, useState, useEffect} from 'react';
import './Order.css'

function OrderList( {order} ) {

    useEffect (() => {

    }, [order])

    console.log(order)

    return (
        <div className="order-list-container">
            <h1 className="order-title">Order</h1>
            <div className="order-list-items">
                {order.map(item =>
                    <div>{item.name}</div>
                )}
                <div>TEST2</div>
                <div>TEST3</div>
            </div>
        </div>
    );
}

export default OrderList;