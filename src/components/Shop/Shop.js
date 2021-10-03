import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css';
import {useEffect} from 'react';

const Shop = () => {
    // console.log(fakeData)
    let first10=fakeData.slice(0,10);

    let [products,setProducts]=useState(first10);
    const [cart,setCart]=useState([]);

   const handleAddProduct=(product)=>{
    //    console.log('product added',product);
       const newCart=[...cart,product];
       setCart(newCart)
   }

    // console.log(products);
    return (
        <div className="shop-container">
            <div className="product-container">
             {
                 // eslint-disable-next-line array-callback-return
                 products.map((el) => <Product stock={el.stock} price={el.price} seller={el.seller} 
                 product={el.name} key={el.key} img={el.img}
                 handleAddProduct={handleAddProduct}></Product>)
               
             }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
               
     </div>
    );
};

export default Shop;