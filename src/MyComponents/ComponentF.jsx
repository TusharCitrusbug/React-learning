import React, { useContext } from 'react'
import { CountContext } from '../App'
export default function ComponentF() {

    const countContext = useContext(CountContext)
    return (

        <div>
            <div>
                -----------------------CompF----------------------- <br />
                <div>count : {countContext.countState}</div>
                <br />
                <button onClick={() => countContext.countDispatch('increment')}>
                    Increment
                </button>
                <button onClick={() => countContext.countDispatch('decrement')}>
                    Decriment
                </button>
                <button onClick={() => countContext.countDispatch('reset')}>
                    Reset
                </button>
            </div>
        </div>
    )
}
