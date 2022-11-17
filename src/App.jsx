
import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import HomeContainer from './containers/HomeContainer'
import HeaderContainer from './containers/HeaderContainer'

function App(props) {
  const [post, setpost] = useState([]);
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setpost(res.data)
      })
      .catch(err => {
        console.log(err);
      })

    return () => {
    }
  }, [])
  return (
    <div className="App">
      <HomeContainer productData={post} />
      <HeaderContainer />

    </div>
  );
}

export default App;


