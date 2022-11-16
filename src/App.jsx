
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
import React from 'react';
import CounterReducer from './MyComponents/CounterReducer';
import CounterReducerComplex from './MyComponents/CounterReducerComplex';
import CounterMultiple from './MyComponents/CounterMultiple';
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();


function App(props) {
  return (
    <div className="App">
      <PerticularDataFatching />
      <header className="App-header">
        {/* <ClassCounter /> */}
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

        <UserContext.Provider value={{ name: 'Tushar', address: 'Address' }}>
          <ChannelContext.Provider value={"channel_name"}>
            <ComponentA />
          </ChannelContext.Provider >
        </UserContext.Provider>
        {/* <CounterReducer></CounterReducer> */}
        {/* <CounterReducerComplex></CounterReducerComplex> */}
        <CounterMultiple></CounterMultiple>

      </header>
    </div>
  );
}

export default App;


