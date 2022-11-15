
import './App.css';
import AboutUs from './MyComponents/AboutUs';
import Contact from './MyComponents/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './MyComponents/HomePage';
import NavBar from './MyComponents/NavBar';

function App(props) {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <div>

          <BrowserRouter>
            <Routes>
              <Route path='/' element={<HomePage />} />
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


