import React, { useState } from 'react'

export default function ClassCounter() {
    const init_count = 0;
    const [count, setCount] = useState(init_count)
    function incriment(params) {
        setCount(previousCount => previousCount + 1);
    }
    function decriment(params) {
        setCount(previousCount => previousCount - 1);
    }
    return (
        <div>
            <button onClick={() => {
                incriment()
            }}>
                +
            </button>
            <h3>{count}</h3>
            <button onClick={() => {
                decriment()
            }}>
                -
            </button>
        </div>
    )
}
