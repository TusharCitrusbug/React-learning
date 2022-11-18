import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyChocolate } from '../actions'

export default function HookChocolateComponent() {
    const numberOfChocolates = useSelector(state => state.chocolate.numberOfChocolates)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of chocolates - {numberOfChocolates}</h2>
            <button onClick={() => dispatch(buyChocolate())}>Buy a chocolate</button>
        </div>
    )
}
