
import './App.css';
// import CakeContainer from './components/CakeContainer';
import HookCakeContainer from './components/HookCakeContainer';
import { Provider } from 'react-redux';
import store from './stores/store'
import HookIceCreamContainer from './components/HookIceCreamContainer';
import HookChocolateComponent from './components/HookChocolateComponent';
import NewCakeContainer from './components/NewCakeContainer';

function App(props) {
  return (
    <div className="App">
      <Provider store={store}>
        {/* <HookCakeContainer /> */}
        <HookIceCreamContainer />
        {/* <CakeContainer /> */}
        <HookChocolateComponent />
        <NewCakeContainer />
      </Provider>

    </div>

  );
}

export default App;


