// import React from 'react'
// import buyCake from '../actions/cakeaction'
// import { connect } from 'react-redux'
// function CakeContainer(props) {
//     return (
//         <div>
//             <h2>{props.numberOFCakes}</h2>
//             <button onClick={props.buyCake}>Buy a Cake</button>

//         </div>
//     )
// }

// const mapStateToProps = state => {
//     return {
//         numberOFCakes: state.numberOfCakes
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         buyCake: () => dispatch(buyCake())
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)