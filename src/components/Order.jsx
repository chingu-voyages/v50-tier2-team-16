import { React, useState, useEffect } from 'react';
import './Order.css'
import { useUser } from '../contexts/UserContext';


function OrderList() {

    const { user, clearOrder, decrementOrder } = useUser();
    const [ order, setOrder ] = useState([]);

    useEffect(() => {
        if (user) {
        setOrder(user.order)
        } else {null}
    }, [user])

    let totalPrice = 0;

    if (user) {
        user.order.forEach(value => {
            totalPrice += value.price * value.qty;
        });
    } else {null}

    let totalPriceRounded = totalPrice.toFixed(2)
console.log(order)
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
                            <p className="order-desc">{item.dsc}</p>
                            <div className="order-qty-div">
                                <button className="subtract-qty-button"
                                        onClick={() => {
                                            const getOrder = user.order.find(a => a.id === item.id)
                                            console.log(getOrder.qty)
                                            if (getOrder.qty > 1) {
                                                getOrder.qty = getOrder.qty - 1
                                            } else if (getOrder.qty <= 1) {
                                                const decOrder = 
                                                    user.order.filter(a =>
                                                        a.id !== item.id
                                                        )
                                                    decrementOrder(decOrder)
                                            } else {null}
                                            }}
                                >-</button>
                                <p className="order-qty">{item.qty}</p>
                                <button className="add-qty-button"
                                        onClick={() => {
                                            const getOrder = user.order.find(a => a.id === item.id)
                                            console.log(getOrder.qty)
                                            getOrder.qty = getOrder.qty + 1
                                            }}
                                >+</button>
                            </div>
                            <button className="order-remove-button"
                                    onClick={() => {
                                        const decOrder = 
                                            user.order.filter(a =>
                                                a.id !== item.id
                                            )
                                        decrementOrder(decOrder)
                                    }}
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
