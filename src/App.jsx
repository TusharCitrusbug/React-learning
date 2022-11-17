
import './App.css';
import HomeContainer from './containers/HomeContainer'
import HeaderContainer from './containers/HeaderContainer'

function App(props) {
  return (
    <div className="App">
      <HomeContainer productData={"tushar"} />
      <HeaderContainer />

    </div>
  );
}

export default App;


