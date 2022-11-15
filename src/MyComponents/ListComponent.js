import React from 'react'

export default function ListComponent(props) {
    return (
        <li>{props.data.email}  {props.data.password}
        </li>
    )
}
