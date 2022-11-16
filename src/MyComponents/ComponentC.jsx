import React, { useContext } from 'react'
import { CountContext } from '../App'
export default function ComponentC() {

  const countContext = useContext(CountContext)
  return (

    <div>
      <div>
        -----------------------CompC----------------------- <br />
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
