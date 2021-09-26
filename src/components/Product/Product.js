import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'

const Product = (props) => {

    const {name , img , seller ,price } = props.product
    const element = <FontAwesomeIcon icon={faShoppingCart} />


    return (
        <div className ="product">
            <div><img src={img} alt="" /> </div>
            <div className = "product-name">
                <h2 >{name}</h2>
                <p>By:{seller}</p>
                <p>Price:${price}</p>
                <button onClick = {()=>props.handleAddToCart(props.product)}>{element}Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;