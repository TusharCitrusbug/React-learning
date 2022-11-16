
import './App.css';
// import ClassCounter from './MyComponents/ClassCounter';
// import HookCounterArray from './MyComponents/HookCounterArray';
// import HookUserEffect from './MyComponents/HookUserEffect';
// import GetSIzeUsingCleanUpFunction from './MyComponents/GetSIzeUsingCleanUpFunction';
// import ClassMouse from './MyComponents/ClassMouse';
import ClassBasedComp from './MyComponents/ClassBasedComp';
import IntervlClassCounter from './MyComponents/IntervlClassCounter';
import MouseContainer from './MyComponents/MouseContainer';
import DataFetching from './MyComponents/DataFetching';
import PerticularDataFatching from './MyComponents/PerticularDataFatching';
function App(props) {
  return (
    <div className="App">
      <PerticularDataFatching/>
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
        <ClassBasedComp/>
        <MouseContainer/>
        <br/>
        <IntervlClassCounter/>
        <br/>
        <DataFetching/>
      </header>
    </div>
  );
}

export default App;


