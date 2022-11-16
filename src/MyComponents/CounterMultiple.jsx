import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        case "reset":
            return initialState

        default:
            return state
    }
}
export default function CounterMultiple() {
    const [count, dispatch] = useReducer(reducer, initialState)
    const [secondcount, seconddispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>count : {count}</div>
            <br />
            <button onClick={() => dispatch('increment')}>
                Increment
            </button>
            <button onClick={() => dispatch('decrement')}>
                Decriment
            </button>
            <button onClick={() => dispatch('reset')}>
                Reset
            </button>
            <br />
            <div>count : {secondcount}</div>
            <br />
            <button onClick={() => seconddispatch('increment')}>
                Increment
            </button>
            <button onClick={() => seconddispatch('decrement')}>
                Decriment
            </button>
            <button onClick={() => seconddispatch('reset')}>
                Reset
            </button>
        </div >
    )
}
