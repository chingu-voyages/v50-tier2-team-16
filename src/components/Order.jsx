import { React, useState, useEffect } from 'react';
import './Order.css'
import { useUser } from '../contexts/UserContext';


function OrderList() {

    const { user, clearOrder, decrementOrder } = useUser();
    const [order, setOrder] = useState([])
    const [item, setItem] = useState({})

    function getOrder() {
        if (user) {
            setOrder(user.order)
        } else {
            null
        }
        getOrder();
    }

    let totalPrice = 0;

    if (user) {
        user.order.forEach(value => {
            totalPrice += value.price * value.qty;
        });
    } else {null}

    return (
        <div className="order-list-container overflow-auto">
            <h1 className="order-title">Order</h1>
            <div className="order-list-items">
                {user && user.order.map(item =>
                    <div key={item.id} className="order-map-div">
                        <img className="order-map-div-left"
                            src={item.img} width="100px" />
                        <div className="order-map-div-right">
                            <h1 className="order-name">{item.name}</h1>
                            <div className="order-qty-div">
                                <button className="subtract-qty-button"
                                        onClick={() => {
                                            const test = user.order.find(a => a.id === item.id)
                                            console.log(test.qty)
                                            if (test.qty > 0) {
                                            test.qty = test.qty - 1
                                            } else if (test.qty = 0) {
                                                setOrder(user.order.filter(a => a.id === item.id))
                                            } else {null}
                                            }}
                                >-</button>
                                <p className="order-qty">{item.qty}</p>
                                <button className="add-qty-button"
                                    onClick={() => {
                                        const test = user.order.find(a => a.id === item.id)
                                        console.log(test.qty)
                                        test.qty = test.qty + 1
                                        }}>
                                +</button>
                            </div>
                            <button className="order-remove-button"
                                onClick={() => {
                                    setOrder(
                                        user.order.filter(a =>
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
                onClick={() => {clearOrder()}}
                >Checkout</button>
            <h1 className="order-total">Total: ${totalPrice} </h1>
        </div>
    );
}

export default OrderList;
