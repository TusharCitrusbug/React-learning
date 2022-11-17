import React from 'react'

export const Header = (props) => {
    console.log(props);
    return (
        <div>
            <div className="add-to-cart">
                <span className="cart-count">{props.cartData.length}</span>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
            </div>
        </div>
    )
}
