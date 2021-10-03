import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setdisplayProducts] = useState ([]) 


    useEffect(() => {
        fetch(`./products.JSON `)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setdisplayProducts(data) } )
    }, [])


    const handleAddToCart = (product) => {

        const newCart = [...cart, product]

        setCart(newCart)
        addToDb(product.key)
    }

    useEffect(() => {

        if (products.length) {
            const savedCart = getStoredCart();

            const storedCart = []
            for (const key in savedCart) {
                
                const addedProduct = products.find(product => product.key === key)
                
                if(addedProduct) {
                    const quantity = savedCart[key]
                    addedProduct.quantity = quantity 
                    storedCart.push(addedProduct);
                } 
                
                
            }

            setCart(storedCart);
        }


    }, [products])



const handleSearch = (event) => {
    const searchText = event.target.value 
    const matchedProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
    
    setdisplayProducts(matchedProduct);
}

    return (
        <div>

            <div className="search-container">
                <input type="text" 
                
                onChange = {handleSearch}
                
                placeholder="search product"/>
            </div>
            <div className="products-container">
            <div></div>
            <div >
                {displayProducts.map(product => <Product
                    key={product.key}
                    product={product}
                    handleAddToCart={handleAddToCart}>

                </Product>)}
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>

        </div>
        </div>
    );
};

export default Shop;