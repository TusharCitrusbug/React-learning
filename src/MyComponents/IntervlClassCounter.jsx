// import React, { Component } from 'react'

// export default class IntervlClassCounter extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          count:0
//       }
//     }

//     componentDidMount(){
//         this.interval = setInterval(this.tick,1000)
//     }
//     tick=()=>{
//         this.setState({
//             count:this.state.count + 1
//         })
//     }
//     componentWillUnmount(){
//         clearInterval(this.interval)
//     }
//   render() {
//     return (
//       <div>{this.state.count}</div>
//     )
//   }
// }


import React,{useState,useEffect} from 'react'

export default function IntervlClassCounter() {
    const [count, setcount] = useState(0);
   const tick=()=>{
               setcount(previousCount => previousCount+1)
            }
    useEffect(() => {
      const interval = setInterval(tick,1000);
      return () => {
        clearInterval(interval)
      }
    }, [])
    
  return (
    <div>
        {count}
    </div>
  )
}
