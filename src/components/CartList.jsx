import React from 'react'

export default function CartList(props) {
    console.log(props.product.product.cartData, "ppppppppppppppppppppp");
    return (
        <li>
            <span>{props.product.product.cartData.id}</span>
            <span>{props.product.product.cartData.pice}</span>
            <span>{props.product.product.cartData.name}</span>
        </li>

    )
}
