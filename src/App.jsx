
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './stores/store'
function App(props) {
  return (
    <div className="App">
      <Provider store={store}>
        <CakeContainer />
      </Provider>

    </div>

  );
}

export default App;


