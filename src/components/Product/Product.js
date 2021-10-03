import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'



const Product = (props) => {
    //  console.log(props);
    //  const {name,img}=props.product;
    
    return (
        <div className="product">
                
            <div>
                <img src={props.img} alt="" />
            </div>
            <div> 
                <h4 className="product-name">{props.product}</h4>

                <br/>
                <p><small>BY:{props.seller}</small></p>
                <p>${props.price}</p>
                <br />
                <p>Only {props.stock} left in stock. Order soon!</p>
                <button className="main-button" onClick={()=>props.handleAddProduct(props.price)}><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
            </div>
        </div>
    );
};

export default Product;