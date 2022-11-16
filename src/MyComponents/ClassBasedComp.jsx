// import React, { Component } from 'react'

// export default class ClassBasedComp extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          count:0,
//          name:''
//       }
//     }
//     componentDidMount(){
//         console.log("called at mounting-----------");
//     }
//     componentDidUpdate(prevProps,prevState){
//         if (prevState.count !== this.state.count){
//             document.title = `Clicked (${this.state.count})`
//         }
//         console.log("called at update-----------",prevProps,prevState);
        
//     }
//   render() {
//     return (
//       <div>
//         <input type="text" value={this.state.name} onChange={e=>{
//             this.setState({
//                 name:e.target.value
//             })
//         }}/>
//         <button onClick={()=> this.setState({
//             count:this.state.count + 1
//         })}>click {this.state.count}</button>
//       </div>
//     )
//   }
// }

import React,{useEffect,useState} from 'react'

export default function ClassBasedComp() {
    const [count,setCount] = useState(0);
    const [name,setName] = useState('');

    useEffect(()=>{
        console.log("called",count);
        document.title = `Clicked (${count})`
    },[count])
  return (
    <div>

<input type="text" value={name} onChange={e=>{
            setName(e.target.value)}}/>

<button onClick={()=> setCount(count + 1)}>click {count}</button>
    </div>
  )
}
