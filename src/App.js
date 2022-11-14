
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
      {props.header}

      <div className='learn_react'>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Shaktiman
        </a>
      </div>
      </header>
    </div>
  );
}

export default App;


