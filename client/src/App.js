import './App.css';
import {Route} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home'
import PokeDetail from './components/PokeDetail/PokeDetail';
import CreatePoke from './components/CreatePoke/CreatePoke';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Landing} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/poke/:id' component={PokeDetail} />
      <Route exact path='/create' component={CreatePoke} />
      <Route exact path='/aboutme' component={AboutMe} />
    </div>
  );
}

export default App;
