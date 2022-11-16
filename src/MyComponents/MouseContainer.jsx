import React,{useState} from 'react'
import ClassMouse from './ClassMouse';

export default function MouseContainer() {
    const [state,setState] = useState(true);

  return (
    <div>
        <button onClick={()=> setState(!state)}>Toggle</button>
        {state && <ClassMouse/>}
    </div>
  )
}
