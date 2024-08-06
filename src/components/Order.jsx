import {React, useState, useEffect} from 'react';
import './Order.css'

function OrderList() {

    const [order , setOrder] = useState([])
    const [balance, setBalance] = useState()

    const user = JSON.parse(localStorage.getItem('currentUser'))

    console.log(order)

    function getOrder() {
        if (user) {
            setOrder(user.order)
        } else {
            null
        }
      getOrder();
    }

    function getBalance() {
        if (user) {
            setBalance(user.balance)
        } else {
            null
        }
      getBalance()
    }

    let totalPrice = 0;

    order.forEach(value => {
      totalPrice += value.price * value.qty;
    });

    return (
        <div className="order-list-container">
            <h1 className="order-title">Order</h1>
            <div className="order-list-items">
                {order.map(item =>
                    <div key={item.id} className="order-map-div">
                        <img className="order-map-div-left"
                             src={item.img} width="100px"/>
                        <div className="order-map-div-right">
                            <h1 className="order-name">{item.name}</h1>
                            <div className="order-qty-div">
                                <button className="subtract-qty-button"
                                        >-</button>
                                <p className="order-qty">{item.qty}</p>
                                <button className="add-qty-button"
                                        onClick={() => { const test = order.find(a => a.id === item.id)
                                            console.log(test.qty)
                                        test.qty = test.qty + 1}}>
                                +</button>
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
                    onClick={() => { getBalance();
                        if (balance < totalPrice) {
                            alert("insufficient funds!")
                        } else {
                            setOrder([])
                            alert("purchase successful!")
                        }}}
            >Checkout</button>
            <h1 className="order-total">Total: ${totalPrice} </h1>
        </div>
    );
}

export default OrderList;