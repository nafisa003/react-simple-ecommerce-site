import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    const totalPrice=cart.reduce((total,price)=> total+price,0);
    // let total=0;
    // for(let i=0;i<cart.length;i++)
    // {
    //     let el=cart[i];
    //     total+=el;
    // }//this is how totalPrice is updated by reduce method
    let shipping=0;
    if(totalPrice>955)
    {
        shipping=0;
    }
    else if(totalPrice>555)
    {
        shipping=4.99;
    }
    else if(totalPrice>0)
    {
        shipping=12.99;
    }
    const formatNum=num=>{
        return Number(num.toFixed(2));
    }
    const tax=formatNum(totalPrice/10);
    
    const grandTotal=(totalPrice+shipping+Number(tax)).toFixed(2);
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items ordered: {cart.length}</p>
            <p>Product price: ${formatNum(totalPrice)}</p>
            <p><small>Shipping cost: ${shipping}</small></p>
            <p><small>Tax: ${tax}</small></p>
            <p>Total Price: ${grandTotal}</p>
        </div>
    );
};

export default Cart;