import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCream } from '../actions/index'
export default function HookIceCreamContainer(props) {
    const numberOficeCreams = useSelector(state => state.iceCream.numberOficeCreams)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of Ice-Creams - {numberOficeCreams}</h2>
            <button onClick={() => dispatch(buyIceCream())}>Buy a ice-creams</button>
        </div>
    )
}
