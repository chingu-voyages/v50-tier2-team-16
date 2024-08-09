import { React, useState, useEffect } from 'react';
import './Order.css'
import { useUser } from '../contexts/UserContext';
import imageNotFound from '../assets/YumSpot-no-image-found.png'


function OrderList() {

    const { user, clearOrder, incrementOrder, decrementOrder, removeSpecificItem } = useUser();

    let totalPrice = 0;

    if (user) {
        user.order.forEach(value => {
            totalPrice += value.price * value.qty;
        });
    } else {null}

    let totalPriceRounded = totalPrice.toFixed(2)
  
    return (
        <div className="overflow-auto max-h-96">
            <div className="order-list-items">
                {user && user.order.map(item =>
                    <div key={item.id} className="order-map-div">
                        <img className="order-map-div-left"
                            src={item.img} width="100px" onError={({ currentTarget }) => {
                                currentTarget.onerror = null; // prevents looping
                                currentTarget.src = imageNotFound;
                            }} />
                        <div className="order-map-div-right">
                            <h1 className="order-name">{item.name}</h1>
                            <p className="order-desc">{item.dsc}</p>
                            <div className="order-qty-div">
                                <button className="subtract-qty-button"
                                        onClick={() => { decrementOrder(item) }}
                                >-</button>
                                <p className="order-qty">{item.qty}</p>
                                <button className="add-qty-button"
                                    onClick={() => { incrementOrder(item) }}>
                                    +</button>
                            </div>
                            <button className="order-remove-button"
                                onClick={() => { removeSpecificItem(item) }}
                            >Remove</button>
                        </div>
                    </div>
                )}
            </div>
            <button className="clear-all-button"
                onClick={() => {clearOrder()}}
                >Checkout</button>
            <h1 className="order-total">Total: ${totalPriceRounded} </h1>
        </div>
    );
}

export default OrderList;
