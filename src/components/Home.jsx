import React from 'react'

export const Home = (props) => {
    console.log(props, "lllllllllllllllllllllllll");
    return (
        <div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-c55V6m76mZO70mKepsOn4P2gcDPq5fsod3FzOCRr0g&s" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button
                        onClick={
                            () => { props.addToCartHandler({ pice: 1000, name: 'i phone 11' }) }
                        }>
                        Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
