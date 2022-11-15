import React, { useState, useEffect } from 'react'

export default function GetSIzeUsingCleanUpFunction() {
    const [size, setSize] = useState(window.screen.width)
    const actualWidth = () => {
        setSize(window.screen.width);
    }
    useEffect(() => {
        window.addEventListener("resize", actualWidth)
    })
    return (
        <div>{size}</div>
    )
}
