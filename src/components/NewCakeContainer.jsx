import { React, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../actions/index'

export default function NewCakeContainer() {
    const [number, setNumber] = useState(1)
    const numberOfCakes = useSelector(state => state.cake.numberOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <br />
            <br />
            <br />

            <input type="text" value={number} onChange={e => { setNumber(e.target.value) }} />
            <h2>Number of Cakes by input - {numberOfCakes}</h2>
            <button onClick={() => dispatch(buyCake(number))}>Buy a Cake</button>
        </div>
    )
}
