import React from 'react'

export default function ProductCardComponent(props) {
    return (
        <li className="cart-wrapper flex-auto">
            <div className="img-wrapper item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-c55V6m76mZO70mKepsOn4P2gcDPq5fsod3FzOCRr0g&s" />
            </div>
            <div className="text-wrapper item">
                <span>
                    {props.product.product.title}
                </span>
                <span>
                    Price: $ {props.product.product.price}
                </span>
            </div>
            <div className="btn-wrapper item">
                <button
                    onClick={
                        () => { props.product.addToCartHandler({ id: props.product.product.id, pice: props.product.product.price, name: props.product.product.title }) }
                    }>
                    Add To Cart</button>
                <button
                    onClick={
                        () => { props.product.removeToCartHandler({ id: props.product.product.id }) }
                    }>
                    Remove To Cart</button>
            </div>
        </li>
    )
}
