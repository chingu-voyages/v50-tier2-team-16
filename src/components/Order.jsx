import { React, useState, useEffect } from 'react';
import './Order.css'
import { useUser } from '../contexts/UserContext';
import imageNotFound from '../assets/YumSpot-no-image-found.png'


function OrderList() {

    const { user, clearOrder, incrementOrder, decrementOrder, removeSpecificItem } = useUser();


    return (
        <div className="overflow-auto max-h-96 ml-2 mr-10 order-scroll py-2 my-2 bg-[#ffffff65] rounded-lg">
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
                            <div className="order-qty-div">
                                <button className="subtract-qty-button" onClick={() => { decrementOrder(item) }}
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
                onClick={() => {
                    clearOrder()
                }}
            >Clear All</button>
        </div>
    );
}

export default OrderList;
