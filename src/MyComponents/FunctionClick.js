import React from 'react'

export default function FunctionClick() {
    function click_handler(e) {
        console.log(e);
    }
    return (
        <div>
            <button onClick={click_handler}>
                Click
            </button>
        </div>
    )
}
