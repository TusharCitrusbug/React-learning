import React from 'react'
import ProductCardComponent from './ProductCardComponent'
export const Home = (props) => {
    console.log(props.productData);
    return (
        <div>
            <h1>Home Component</h1>
            <ProductCardComponent />

        </div>
    )
}
