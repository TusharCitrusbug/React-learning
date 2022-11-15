
import './App.css';
import SetState from './MyComponents/SetState';
import FunctionClick from './MyComponents/FunctionClick';
import EventBinding from './MyComponents/EventBinding';
import ParentComponent from './MyComponents/ParentComponent';
import UserGreetings from './MyComponents/UserGreetings';
import AboutUs from './MyComponents/AboutUs';
import Contact from './MyComponents/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
            click on the shaktiman to spin the chakr!!!!!!!!
          </a>
        </div>
        <SetState />
        <FunctionClick />
        <EventBinding></EventBinding>

        <div>
          <h1>here code is messay</h1>
        </div>
        <ParentComponent></ParentComponent>
        <UserGreetings />

        <div>
          <BrowserRouter>
            <Routes>
              <Route path='/about-us' element={<AboutUs />} />
              <Route path='/contact-us' element={<Contact />} />
            </Routes>
          </BrowserRouter>
        </div>
      </header>
    </div>
  );
}

export default App;


