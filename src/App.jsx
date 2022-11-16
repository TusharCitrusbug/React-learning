
import './App.css';
// import ClassCounter from './MyComponents/ClassCounter';
// import HookCounterArray from './MyComponents/HookCounterArray';
// import HookUserEffect from './MyComponents/HookUserEffect';
// import GetSIzeUsingCleanUpFunction from './MyComponents/GetSIzeUsingCleanUpFunction';
// import ClassMouse from './MyComponents/ClassMouse';
// import ClassBasedComp from './MyComponents/ClassBasedComp';
// import IntervlClassCounter from './MyComponents/IntervlClassCounter';
// import MouseContainer from './MyComponents/MouseContainer';
// import DataFetching from './MyComponents/DataFetching';
import PerticularDataFatching from './MyComponents/PerticularDataFatching';
import ComponentA from './MyComponents/ComponentA';
import ComponentB from './MyComponents/ComponentB';
import ComponentC from './MyComponents/ComponentC';
import ComponentD from './MyComponents/ComponentD';
import React, { useReducer } from 'react';
import FetchingUsingReducer from './MyComponents/FetchingUsingReducer';
// import CounterReducer from './MyComponents/CounterReducer';
// import CounterReducerComplex from './MyComponents/CounterReducerComplex';
// import CounterMultiple from './MyComponents/CounterMultiple';
// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();
export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState

    default:
      return state
  }
}

function App(props) {
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <PerticularDataFatching />
      <header className="App-header">
        {/* <ClassCounter /> */}
        <span>counter : {count}</span>
        <div className='learn_react'>
          {/* <HookCounterArray></HookCounterArray> */}
          {/* <ClassCounter></ClassCounter> */}
        </div>
        <br />
        {/* <HookWithObj /> */}
        {/* <HookUserEffect /> */}
        {/* <GetSIzeUsingCleanUpFunction /> */}
        {/* <ClassBasedComp /> */}
        {/* <MouseContainer /> */}
        <br />
        {/* <IntervlClassCounter /> */}
        <br />
        {/* <DataFetching /> */}
        <br />

        {/* <UserContext.Provider value={{ name: 'Tushar', address: 'Address' }}>
          <ChannelContext.Provider value={"channel_name"}> */}
        <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
          <ComponentA />
          <ComponentB />
          <ComponentC />
          <ComponentD></ComponentD>
        </CountContext.Provider >

        <FetchingUsingReducer />
        {/* </ChannelContext.Provider >
        </UserContext.Provider> */}
        {/* <CounterReducer></CounterReducer> */}
        {/* <CounterReducerComplex></CounterReducerComplex> */}
        {/* <CounterMultiple></CounterMultiple> */}

      </header>
    </div>
  );
}

export default App;


