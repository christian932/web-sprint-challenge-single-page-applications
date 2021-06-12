import React from "react";

export default function ShowOrders(props){
    const {order}= props;
    if (!order) {
        return <h3>Working fetching your friend&apos;s details...</h3>
    }
    return(
        <div className='container'>
        <h2>{order.name}</h2>
        <p>Size: {order.size}</p>
        <p>Extra Cheese: {order.extracheese}<br/>
            Bacon: {order.pepperoni}<br/>
            Pepperoni: {order.bacon}<br/>
            Mushrooms: {order.mushrooms}<br/>
            Pineaple: {order.pineaple}<br/>
            Special Instructions: {order.instructions}<br/>
        </p>
      </div>
    )
} 