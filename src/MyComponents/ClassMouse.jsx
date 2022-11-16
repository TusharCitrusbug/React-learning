// import React, { Component } from 'react'

// export default class ClassMouse extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          x:0,
//          y:0      }
//     }
//     logMousePosition = e => {
//         this.setState({
//             x:e.clientX,
//             y:e.clientY
//         })
//     }

//     componentDidMount(){
//         window.addEventListener('mousemove',this.logMousePosition)
//     }
//     // componentDidUpdate(prevProps,prevState){

//     // }
//   render() {
//     return (<>
//         <div>x{this.state.x}</div>
//         <div>Y{this.state.y}</div>
//     </>
//     )
//   }
// }

import React,{useState,useEffect} from 'react'

export default function ClassMouse() {
    const [axis,setAxis]=useState({x:0,y:0})
    const   logMousePosition=e=>{
        setAxis({x:e.clientX,y:e.clientY})
    }
    useEffect(()=>{
        window.addEventListener('mousemove',logMousePosition)
        return ()=>{
            console.log("unmounted successfully");
            window.removeEventListener('mousemove',logMousePosition)
    }
},[])
  return (
    <>
        <div>X {axis.x}</div>
        <div>Y {axis.y}</div>    
    </>
  )
}
