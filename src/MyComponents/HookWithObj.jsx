import React, { useState } from 'react'


export default function HookWithObj() {
    const nameObj = {
        firstName: '',
        lastName: ''
    }
    const [name, SetName] = useState(nameObj)
    return (
        <div>
            <form >
                <label htmlFor="">First Name</label>
                <input type="text" value={name.firstName} onChange={e => SetName({
                    ...name,
                    firstName: e.target.value
                })} />
                <label htmlFor="">Last Name</label>
                <input type="text" value={name.lastName} onChange={e => SetName({
                    ...name,
                    lastName: e.target.value
                })} />
                <h4>{name.firstName} and {name.lastName}</h4>
            </form>
        </div>
    )
}
