import React from 'react'
import CartList from './CartList';
import ProductCardComponent from './ProductCardComponent'

export const Home = (props) => {
    console.log(props.cartData, "KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK");
    return (
        <div>
            <h1>Home Component</h1>
            <ul className='d-flex'>
                {
                    props.productData.map(product => (
                        < ProductCardComponent key={product.id} product={{ product: product, addToCartHandler: props.addToCartHandler, removeToCartHandler: props.removeToCartHandler }} />
                    ))
                }
            </ul>

            <br />
            <br />
            <br />
            <ul>

                {
                    props.cartData.map(product => (
                        < CartList key={product.id} product={{ product: product }} />
                    ))
                }l

            </ul>
        </div >
    )
}
