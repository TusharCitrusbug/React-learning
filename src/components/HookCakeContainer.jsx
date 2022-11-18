import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../actions/index'

function HookCakeContainer() {
    const numberOfCakes = useSelector(state => state.cake.numberOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of Cakes2 - {numberOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy a Cake2</button>
        </div>
    )
}

export default HookCakeContainer